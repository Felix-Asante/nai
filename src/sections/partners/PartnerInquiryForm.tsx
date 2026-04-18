"use client";
import Button from "@/components/Button";
import Container from "@/components/layouts/Container";
import FormInput from "@/components/FormInput";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn, getErrorMessage } from "@/utils";
import { PartnerInquiryInput, partnerInquiryRules } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BuildingIcon,
  CheckCircle2Icon,
  HandshakeIcon,
  MailIcon,
  SendIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { submitPartnerInquiry } from "@/actions/partners";

export default function PartnerInquiryForm() {
  const t = useTranslations("PartnersPage.inquiry");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bullets = useMemo(
    () => [t("bullet1"), t("bullet2"), t("bullet3")],
    [t]
  );

  const form = useForm<PartnerInquiryInput>({
    resolver: zodResolver(partnerInquiryRules),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      organizationName: "",
      message: "",
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: PartnerInquiryInput) => {
    try {
      setIsSubmitting(true);
      const response = await submitPartnerInquiry(data);
      if ("error" in response && response.error) {
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

  return (
    <section id="partner-inquiry" className="section-y bg-white scroll-mt-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />

            <ul className="mt-8 space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-neutral-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 text-xs text-neutral-500">
              <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
              {t("privacy")}
            </div>
          </div>

          <Reveal className="lg:col-span-7 w-full" y={12}>
            {submitted ? (
              <div className="card-surface p-8 md:p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto flex items-center justify-center">
                  <CheckCircle2Icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-xl md:text-2xl font-semibold text-primary-700">
                  {t("successTitle")}
                </h3>
                <p className="mt-3 text-neutral-600">{t("successBody")}</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary-700 hover:text-secondary transition-colors"
                >
                  {t("submitAnother")}
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={cn("card-surface p-6 md:p-8 flex flex-col gap-5")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                      <HandshakeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-700">
                        {t("formTitle")}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {t("formSubtitle")}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      name="firstName"
                      label={t("firstName")}
                      placeholder={t("firstNamePlaceholder")}
                      startContent={
                        <UserIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                    <FormInput
                      name="lastName"
                      label={t("lastName")}
                      placeholder={t("lastNamePlaceholder")}
                      startContent={
                        <UserIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                  </div>

                  <FormInput
                    name="workEmail"
                    type="email"
                    label={t("workEmail")}
                    placeholder={t("workEmailPlaceholder")}
                    startContent={
                      <MailIcon className="w-4 h-4 text-neutral-400" />
                    }
                    wrapperClassName="h-11"
                  />

                  <FormInput
                    name="organizationName"
                    label={t("organization")}
                    placeholder={t("organizationPlaceholder")}
                    startContent={
                      <BuildingIcon className="w-4 h-4 text-neutral-400" />
                    }
                    wrapperClassName="h-11"
                  />

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className={cn(
                        "text-sm",
                        errors.message && "text-destructive"
                      )}
                    >
                      {t("messageOptional")}
                    </Label>
                    <Controller
                      control={control}
                      name="message"
                      render={({ field }) => (
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder={t("messagePlaceholder")}
                          {...field}
                        />
                      )}
                    />
                    {errors.message?.message && (
                      <p className="text-sm font-medium text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">{t("consent")}</p>
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      className="h-11 rounded-full px-6 bg-secondary hover:bg-secondary-600 text-white shadow-sm shadow-secondary/20"
                    >
                      <SendIcon className="w-4 h-4" />
                      {t("submit")}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
