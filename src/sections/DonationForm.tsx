"use client";
import { useState } from "react";
import { cn } from "@/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const presetAmounts = [25, 50, 100, 250];

export function DonationForm() {
  const t = useTranslations("DonationForm");
  const [selected, setSelected] = useState<number | null>(50);
  const [custom, setCustom] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <form id="donationForm" className="card-surface p-6 md:p-10">
        <div className="mb-6">
          <Label className="block text-sm font-semibold text-neutral-700 mb-3">
            {t("selectAmount")}
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {presetAmounts.map((amount) => {
              const isActive = selected === amount;
              return (
                <button
                  type="button"
                  key={amount}
                  onClick={() => {
                    setSelected(amount);
                    setCustom("");
                  }}
                  className={cn(
                    "py-3 px-2 rounded-xl font-semibold border-2 transition-all",
                    isActive
                      ? "border-primary-700 bg-primary-700 text-white shadow-soft"
                      : "border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-700"
                  )}
                >
                  ${amount}
                </button>
              );
            })}
          </div>
          <Input
            type="text"
            inputMode="decimal"
            id="customAmount"
            placeholder={t("customAmountPlaceholder")}
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setSelected(null);
            }}
            className="h-11"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <Label htmlFor="firstName" className="mb-2 block text-sm font-medium">
              {t("firstName")}
            </Label>
            <Input id="firstName" required className="h-11" />
          </div>
          <div>
            <Label htmlFor="lastName" className="mb-2 block text-sm font-medium">
              {t("lastName")}
            </Label>
            <Input id="lastName" required className="h-11" />
          </div>
        </div>

        <div className="mb-5">
          <Label htmlFor="email" className="mb-2 block text-sm font-medium">
            {t("email")}
          </Label>
          <Input id="email" type="email" required className="h-11" />
        </div>

        <div className="mb-5">
          <Label htmlFor="cardNumber" className="mb-2 block text-sm font-medium">
            {t("cardNumber")}
          </Label>
          <Input
            id="cardNumber"
            placeholder={t("cardPlaceholder")}
            required
            className="h-11"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <Label htmlFor="expiry" className="mb-2 block text-sm font-medium">
              {t("expiry")}
            </Label>
            <Input id="expiry" placeholder={t("expiryPlaceholder")} required className="h-11" />
          </div>
          <div>
            <Label htmlFor="cvv" className="mb-2 block text-sm font-medium">
              {t("cvv")}
            </Label>
            <Input id="cvv" placeholder={t("cvvPlaceholder")} required className="h-11" />
          </div>
        </div>

        <button
          type="submit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full rounded-full h-12 bg-secondary hover:bg-secondary-600 text-white font-semibold shadow-lg shadow-secondary/20"
          )}
        >
          {t("submit")}
        </button>

        <div className="flex items-center justify-center mt-5 text-xs md:text-sm text-neutral-500 gap-2">
          <ShieldCheckIcon className="h-4 w-4 text-primary-600" />
          {t("secureNote")}
        </div>
      </form>
    </div>
  );
}
