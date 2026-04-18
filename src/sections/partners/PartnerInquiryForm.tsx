"use client";
import Button from "@/components/Button";
import Container from "@/components/layouts/Container";
import FormInput from "@/components/FormInput";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelectInput from "@/components/SelectInput";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn, getErrorMessage } from "@/utils";
import {
  PartnerInquiryInput,
  partnerInquiryRules,
} from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BuildingIcon,
  CheckCircle2Icon,
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { submitPartnerInquiry } from "@/actions/partners";

const partnershipOptions = [
  { label: "Strategic Giving", value: "strategic-giving" },
  { label: "Cause Marketing", value: "cause-marketing" },
  { label: "Employee Engagement", value: "employee-engagement" },
  { label: "Gifts In Kind", value: "gifts-in-kind" },
  { label: "Event Partnership", value: "event-partnership" },
  { label: "Other", value: "other" },
];

export default function PartnerInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<PartnerInquiryInput>({
    resolver: zodResolver(partnerInquiryRules),
    defaultValues: {
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      partnershipType: undefined,
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
        description:
          "Thank you! Our partnerships team will be in touch shortly.",
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
    <section id="partner-inquiry" className="section-y bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Start the conversation"
              title="Let's build something meaningful together"
              description="Tell us a little about your organisation and how you imagine working with us. We'll review your enquiry and respond within three business days."
            />

            <ul className="mt-8 space-y-4">
              {[
                "Dedicated partnership manager for every organisation",
                "Bespoke proposals aligned with your goals and budget",
                "Transparent reporting and shared storytelling",
              ].map((item) => (
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
              Your information is kept private and used only to discuss this
              partnership opportunity.
            </div>
          </div>

          <Reveal className="lg:col-span-7 w-full" y={12}>
            {submitted ? (
              <div className="card-surface p-8 md:p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-700 mx-auto flex items-center justify-center">
                  <CheckCircle2Icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-xl md:text-2xl font-semibold text-primary-700">
                  Enquiry received
                </h3>
                <p className="mt-3 text-neutral-600">
                  Thank you for reaching out. A member of our partnerships team
                  will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary-700 hover:text-secondary transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={cn(
                    "card-surface p-6 md:p-8 flex flex-col gap-5"
                  )}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      name="organizationName"
                      label="Organization name"
                      placeholder="Acme Foundation"
                      startContent={
                        <BuildingIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                    <FormInput
                      name="contactName"
                      label="Your name"
                      placeholder="Jane Doe"
                      startContent={
                        <UserIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      name="email"
                      type="email"
                      label="Work email"
                      placeholder="jane@acme.org"
                      startContent={
                        <MailIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                    <FormInput
                      name="phone"
                      type="tel"
                      label="Phone (optional)"
                      placeholder="+1 555 000 0000"
                      startContent={
                        <PhoneIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      name="website"
                      label="Website (optional)"
                      placeholder="https://acme.org"
                      startContent={
                        <GlobeIcon className="w-4 h-4 text-neutral-400" />
                      }
                      wrapperClassName="h-11"
                    />
                    <SelectInput
                      name="partnershipType"
                      label="Partnership interest"
                      placeholder="Select a partnership type"
                      control={control}
                      options={partnershipOptions}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className={cn(
                        "text-sm",
                        errors.message && "text-destructive"
                      )}
                    >
                      Tell us about your goals
                    </Label>
                    <Controller
                      control={control}
                      name="message"
                      render={({ field }) => (
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Share a bit about your organisation and what kind of partnership you're exploring."
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
                    <p className="text-xs text-neutral-500">
                      By submitting you agree to be contacted about this
                      partnership opportunity.
                    </p>
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      className="h-11 rounded-full px-6 bg-secondary hover:bg-secondary-600 text-white shadow-sm shadow-secondary/20"
                    >
                      <SendIcon className="w-4 h-4" />
                      Submit enquiry
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
