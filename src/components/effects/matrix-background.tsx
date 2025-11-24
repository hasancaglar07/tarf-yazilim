"use client";

import { useEffect, useRef } from "react";

type Props = {
  textColor?: string;
  backgroundColor?: string;
};

export function MatrixBackground({
  textColor = "#ec4899",
  backgroundColor = "#ffffff",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 15;
    const fadeAlpha = 0.05;
    const speedMin = 0.05;
    const speedMax = 0.14;
    const chars = "01<>\\/{}[]ABCDEFghijklmnopqrstuvwxyz".split("");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    let columns = Math.floor(canvas.width / fontSize);
    let drops = new Array(columns).fill(1);
    let speeds = drops.map(
      () => speedMin + Math.random() * (speedMax - speedMin),
    );
    let rafId: number;

    const draw = () => {
      ctx.fillStyle = `rgba(255,255,255,${fadeAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.fillStyle = textColor;
      ctx.globalAlpha = 0.6;
      ctx.font = `${fontSize}px 'JetBrains Mono', 'Space Grotesk', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = speedMin + Math.random() * (speedMax - speedMin);
        }
        drops[i] += speeds[i];
      }
      ctx.restore();
      rafId = requestAnimationFrame(draw);
    };

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rafId = requestAnimationFrame(draw);

    const handleResize = () => {
      setSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
      speeds = drops.map(
        () => speedMin + Math.random() * (speedMax - speedMin),
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [textColor, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-white opacity-70 [filter:blur(0.35px)]"
      aria-hidden
    />
  );
}
