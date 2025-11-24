"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Bird = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
};

const BIRD_COUNT = 280;
const BOUNDS = 260;
const BOUNDS_HALF = BOUNDS / 2;

export function FlockBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      2000,
    );
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.zIndex = "-1";
    container.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry(2.4, 7, 8);
    geometry.rotateX(Math.PI / 2);

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#e86f51"),
      emissive: new THREE.Color("#f4a261"),
      emissiveIntensity: 0.16,
      metalness: 0.1,
      roughness: 0.5,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });

    const instanced = new THREE.InstancedMesh(geometry, material, BIRD_COUNT);
    instanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(instanced);

    const ambient = new THREE.AmbientLight("#f7b267", 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight("#e76f51", 0.5);
    dir.position.set(1, 1, 1);
    scene.add(dir);

    const birds: Bird[] = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < BIRD_COUNT; i++) {
      birds.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * BOUNDS,
          (Math.random() - 0.5) * BOUNDS,
          (Math.random() - 0.5) * BOUNDS,
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
        ),
      });
    }

    const alignStrength = 0.035;
    const cohesionStrength = 0.008;
    const separationStrength = 0.08;
    const separationDist = 18;
    const maxSpeed = 18;
    const minSpeed = 6;

    const updateBirds = (delta: number) => {
      for (let i = 0; i < BIRD_COUNT; i++) {
        const bird = birds[i];
        const alignment = new THREE.Vector3();
        const cohesion = new THREE.Vector3();
        const separation = new THREE.Vector3();
        let neighborCount = 0;

        for (let j = 0; j < BIRD_COUNT; j++) {
          if (i === j) continue;
          const other = birds[j];
          const dist = bird.position.distanceTo(other.position);
          if (dist < 60) {
            alignment.add(other.velocity);
            cohesion.add(other.position);
            neighborCount++;
            if (dist < separationDist) {
              separation.add(
                new THREE.Vector3().subVectors(bird.position, other.position).divideScalar(dist),
              );
            }
          }
        }

        if (neighborCount > 0) {
          alignment.divideScalar(neighborCount).multiplyScalar(alignStrength);
          cohesion
            .divideScalar(neighborCount)
            .sub(bird.position)
            .multiplyScalar(cohesionStrength);
          separation.multiplyScalar(separationStrength);
          bird.velocity.add(alignment).add(cohesion).add(separation);
        }

        const speed = bird.velocity.length();
        if (speed > maxSpeed) bird.velocity.setLength(maxSpeed);
        if (speed < minSpeed) bird.velocity.setLength(minSpeed);

        bird.position.addScaledVector(bird.velocity, delta);

        const axes: Array<"x" | "y" | "z"> = ["x", "y", "z"];
        axes.forEach((axis) => {
          if (bird.position[axis] > BOUNDS_HALF) bird.position[axis] = -BOUNDS_HALF;
          if (bird.position[axis] < -BOUNDS_HALF) bird.position[axis] = BOUNDS_HALF;
        });
      }
    };

    let last = performance.now();
    const animate = () => {
      const now = performance.now();
      let delta = (now - last) / 1000;
      if (delta > 0.05) delta = 0.05;
      last = now;

      updateBirds(delta);

      for (let i = 0; i < BIRD_COUNT; i++) {
        const bird = birds[i];
        dummy.position.copy(bird.position);
        dummy.lookAt(bird.position.clone().add(bird.velocity));
        dummy.updateMatrix();
        instanced.setMatrixAt(i, dummy.matrix);
      }
      instanced.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10" aria-hidden />;
}
