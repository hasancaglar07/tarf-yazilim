"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  triggerLabel?: string;
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};

export function DemoDialog({
  triggerLabel = "Demo Talep Et",
  variant = "secondary",
  size = "lg",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demo talep et</DialogTitle>
          <DialogDescription>
            30 dakikalık bir oturum planlayalım. Hedeflerinizi konuşalım, doğru çözümü birlikte kuralım.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label>Ad Soyad</Label>
            <Input placeholder="Adınız Soyadınız" />
          </div>
          <div className="space-y-2">
            <Label>E-posta</Label>
            <Input type="email" placeholder="ornek@eposta.com" />
          </div>
          <div className="space-y-2">
            <Label>İlgi alanı</Label>
            <Input placeholder="Hizmet/Ürün" />
          </div>
          <div className="space-y-2">
            <Label>Mesaj</Label>
            <Textarea placeholder="Beklentiler, zamanlama, entegrasyon ihtiyacı" />
          </div>
          <Button className="w-full" onClick={() => setOpen(false)}>
            Talebi Gönder
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
