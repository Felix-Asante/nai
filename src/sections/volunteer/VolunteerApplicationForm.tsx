"use client";

import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn, getErrorMessage } from "@/utils";
import {
  VolunteerApplicationInput,
  volunteerApplicationRules,
} from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BookOpenIcon,
  CalendarIcon,
  CheckCircle2Icon,
  CheckIcon,
  ClockIcon,
  HandHeartIcon,
  HeartPulseIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import fr from "react-phone-number-input/locale/fr";
import { submitVolunteerApplication } from "@/actions/volunteers";
import { useTranslations } from "next-intl";

type InterestValue = "education" | "health" | "community" | "other";
type AvailabilityValue = "weekdays" | "weekends" | "both";

export default function VolunteerApplicationForm() {
  const t = useTranslations("VolunteerApplicationForm");
  const params = useParams();
  const locale = params?.locale || "en";
  const lang = locale === "en" ? en : fr;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const COUNTRIES = useMemo(
    () =>
      getCountries().map((country) => ({
        label: lang[country],
        value: en[country],
      })),
    [lang]
  );

  const interestOptions = useMemo(
    () =>
      [
        {
          value: "education" as const,
          label: t("interestEducation"),
          Icon: BookOpenIcon,
          accent: "bg-primary-50 text-primary-700",
        },
        {
          value: "health" as const,
          label: t("interestHealth"),
          Icon: HeartPulseIcon,
          accent: "bg-secondary-50 text-secondary-600",
        },
        {
          value: "community" as const,
          label: t("interestCommunity"),
          Icon: HandHeartIcon,
          accent: "bg-primary-50 text-primary-700",
        },
        {
          value: "other" as const,
          label: t("interestOther"),
          Icon: SparklesIcon,
          accent: "bg-neutral-100 text-neutral-700",
        },
      ],
    [t]
  );

  const availabilityOptions = useMemo(
    () => [
      {
        value: "weekdays" as const,
        label: t("weekdays"),
        description: t("weekdaysDesc"),
      },
      {
        value: "weekends" as const,
        label: t("weekends"),
        description: t("weekendsDesc"),
      },
      {
        value: "both" as const,
        label: t("both"),
        description: t("bothDesc"),
      },
    ],
    [t]
  );

  const hoursOptions = useMemo(
    () => [
      { value: "1-3", label: t("hours1to3") },
      { value: "4-6", label: t("hours4to6") },
      { value: "7-10", label: t("hours7to10") },
      { value: "10+", label: t("hours10plus") },
    ],
    [t]
  );

  const form = useForm<VolunteerApplicationInput>({
    resolver: zodResolver(volunteerApplicationRules),
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      interests: [],
      interestsOther: "",
      availability: undefined,
      hoursPerWeek: "",
      motivation: "",
    },
  });

  const { control, watch, setValue } = form;
  const { errors } = useFormState({ control });

  const interests = watch("interests") ?? [];
  const availability = watch("availability");
  const showOtherField = interests.includes("other");

  const toggleInterest = (value: InterestValue) => {
    const current = interests;
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("interests", next, { shouldValidate: true });
    if (value === "other" && current.includes("other")) {
      setValue("interestsOther", "");
    }
  };

  const onSubmit = async (data: VolunteerApplicationInput) => {
    try {
      setIsSubmitting(true);
      const response = await submitVolunteerApplication(data);
      if (response && "error" in response && response.error) {
        toast({ variant: "destructive", description: response.error });
        return;
      }
      setSubmitted(true);
      form.reset();
      toast({
        description: t("toastSuccess"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: getErrorMessage(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-surface p-8 md:p-10 text-center max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto flex items-center justify-center">
          <CheckCircle2Icon className="w-7 h-7" />
        </div>
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-primary-700">
          {t("successTitle")}
        </h3>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          {t("successBody")}
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          {t("successInquiries")}{" "}
          <a
            href="mailto:info@noblealmsinternational.com"
            className="font-semibold text-primary-700 hover:text-secondary transition-colors"
          >
            info@noblealmsinternational.com
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary-700 hover:text-secondary transition-colors"
        >
          {t("submitAnother")}
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
      >
        {/* Personal Information */}
        <Section
          icon="📌"
          title={t("personalSection.title")}
          description={t("personalSection.description")}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <FormInput
              name="fullName"
              label={t("fullName")}
              placeholder={t("fullNamePlaceholder")}
              startContent={
                <UserIcon className="w-4 h-4 text-neutral-400" />
              }
              wrapperClassName="h-11"
            />
            <FormInput
              type="email"
              name="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              startContent={
                <MailIcon className="w-4 h-4 text-neutral-400" />
              }
              wrapperClassName="h-11"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormInput
              name="phone"
              type="tel"
              label={t("phone")}
              placeholder={t("phonePlaceholder")}
              startContent={
                <PhoneIcon className="w-4 h-4 text-neutral-400" />
              }
              wrapperClassName="h-11"
            />
            <SelectInput
              name="country"
              control={control}
              label={t("country")}
              placeholder={t("countryPlaceholder")}
              options={COUNTRIES}
            />
          </div>
        </Section>

        {/* Areas of Interest */}
        <Section
          icon="🎯"
          title={t("interestsSection.title")}
          description={t("interestsSection.description")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {interestOptions.map((option) => {
              const Icon = option.Icon;
              const isActive = interests.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleInterest(option.value)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all",
                    isActive
                      ? "border-primary-700 bg-primary-50/60 shadow-soft"
                      : "border-neutral-200 hover:border-primary-300"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                      option.accent
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p
                      className={cn(
                        "font-semibold",
                        isActive ? "text-primary-700" : "text-neutral-700"
                      )}
                    >
                      {option.label}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0",
                      isActive
                        ? "border-primary-700 bg-primary-700 text-white"
                        : "border-neutral-300"
                    )}
                    aria-hidden
                  >
                    {isActive && <CheckIcon className="w-3 h-3" />}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.interests?.message && (
            <p className="text-sm font-medium text-destructive">
              {errors.interests.message}
            </p>
          )}

          {showOtherField && (
            <div className="space-y-2">
              <Label htmlFor="interestsOther" className="text-sm">
                {t("otherSpecify")}
              </Label>
              <Controller
                control={control}
                name="interestsOther"
                render={({ field }) => (
                  <input
                    id="interestsOther"
                    type="text"
                    placeholder={t("otherPlaceholder")}
                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    {...field}
                  />
                )}
              />
            </div>
          )}
        </Section>

        {/* Availability */}
        <Section
          icon="⏰"
          title={t("availabilitySection.title")}
          description={t("availabilitySection.description")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {availabilityOptions.map((option) => {
              const isActive = availability === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setValue("availability", option.value, {
                      shouldValidate: true,
                    })
                  }
                  aria-pressed={isActive}
                  className={cn(
                    "flex flex-col gap-1 p-4 rounded-xl border-2 text-left transition-all",
                    isActive
                      ? "border-primary-700 bg-primary-50/60 shadow-soft"
                      : "border-neutral-200 hover:border-primary-300"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <CalendarIcon
                      className={cn(
                        "w-4 h-4",
                        isActive ? "text-primary-700" : "text-neutral-400"
                      )}
                    />
                    <span
                      className={cn(
                        "font-semibold",
                        isActive ? "text-primary-700" : "text-neutral-700"
                      )}
                    >
                      {option.label}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">
                    {option.description}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.availability?.message && (
            <p className="text-sm font-medium text-destructive">
              {errors.availability.message}
            </p>
          )}

          <div className="space-y-2">
            <Label htmlFor="hoursPerWeek" className="text-sm">
              {t("hoursLabel")}
            </Label>
            <div className="flex flex-wrap gap-2">
              {hoursOptions.map((opt) => {
                const isActive = watch("hoursPerWeek") === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() =>
                      setValue("hoursPerWeek", opt.value, {
                        shouldValidate: true,
                      })
                    }
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm border-2 transition-all",
                      isActive
                        ? "border-primary-700 bg-primary-700 text-white shadow-soft"
                        : "border-neutral-200 text-neutral-700 hover:border-primary-300"
                    )}
                  >
                    <ClockIcon className="w-3.5 h-3.5" />
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {errors.hoursPerWeek?.message && (
              <p className="text-sm font-medium text-destructive">
                {errors.hoursPerWeek.message}
              </p>
            )}
          </div>
        </Section>

        {/* Motivation */}
        <Section
          icon="💬"
          title={t("motivationSection.title")}
          description={t("motivationSection.description")}
        >
          <div className="space-y-2">
            <Controller
              control={control}
              name="motivation"
              render={({ field }) => (
                <Textarea
                  id="motivation"
                  rows={5}
                  placeholder={t("motivationPlaceholder")}
                  {...field}
                />
              )}
            />
            {errors.motivation?.message && (
              <p className="text-sm font-medium text-destructive">
                {errors.motivation.message}
              </p>
            )}
          </div>
        </Section>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-start gap-2 text-xs text-neutral-500">
            <ShieldCheckIcon className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
            <span>
              {t("privacyNote")}
            </span>
          </div>
          <Button
            loading={isSubmitting}
            type="submit"
            className="sm:w-auto h-12 rounded-full px-6 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/20"
          >
            <SendIcon className="w-4 h-4" />
            {t("submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}

type SectionProps = {
  icon: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({ icon, title, description, children }: SectionProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="text-2xl leading-none shrink-0"
        >
          {icon}
        </span>
        <div>
          <h3 className="font-semibold text-lg text-primary-700">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
