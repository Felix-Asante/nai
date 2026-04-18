"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import VolunteerForm from "@/sections/VolunteerForm";
import { HeartHandshakeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function VolunteerDialog({ open, onOpenChange }: Props) {
  const translate = useTranslations("volunteers");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        className="max-w-2xl p-0 gap-0 overflow-hidden rounded-2xl"
      >
        <div className="relative px-6 md:px-8 pt-8 pb-6 bg-brand-gradient text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.35),transparent_65%)]"
            aria-hidden
          />
          <div className="relative flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
              <HeartHandshakeIcon className="w-6 h-6 text-white" />
            </div>
            <DialogHeader className="space-y-1.5 text-left">
              <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                {translate("becomeVolunteer")}
              </DialogTitle>
              <DialogDescription className="text-sm md:text-base text-white/80">
                Join our community of changemakers. Fill in your details and our
                team will reach out with ways you can help.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
        <div className="px-6 md:px-8 py-6 md:py-8 max-h-[70vh] overflow-y-auto">
          <VolunteerForm toggleModal={(state) => onOpenChange(state)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
