"use client";
import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput, { getCountries } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import en from "react-phone-number-input/locale/en";
import fr from "react-phone-number-input/locale/fr";
import { useParams } from "next/navigation";
import SelectInput from "@/components/SelectInput";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { becomeVolunteerInput, becomeVolunteerRules } from "@/validations";
import { toast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import { sendVolunteerEmail } from "@/actions/newsletter";
import { getErrorMessage } from "@/utils";

export default function VolunteerForm() {
  const params = useParams();
  const locale = params?.locale || "en";
  const lang = locale === "en" ? en : fr;

  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const COUNTRIES = getCountries().map((country) => ({
    label: lang[country],
    value: country,
  }));

  const form = useForm<becomeVolunteerInput>({
    resolver: zodResolver(becomeVolunteerRules),
  });

  const translate = useTranslations();

  const onSubmit = async (data: becomeVolunteerInput) => {
    try {
      setIsSubscribing(true);
      const response = await sendVolunteerEmail(data);
      if (response?.error) {
        toast({
          variant: "destructive",
          description: getErrorMessage(response.error),
        });
      } else {
        toast({
          description: translate("becomeVolunteer.success-message"),
        });
        form.reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: translate("errors.something-went-wrong"),
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3"
      >
        <FormInput
          name="name"
          placeholder={translate("becomeVolunteer.fullName")}
          label={translate("becomeVolunteer.fullName")}
        />
        <FormInput
          type="email"
          name="email"
          placeholder={translate("becomeVolunteer.email")}
          label={translate("becomeVolunteer.email")}
        />

        <SelectInput
          name="country"
          placeholder={translate("becomeVolunteer.country")}
          label={translate("becomeVolunteer.country")}
          control={form.control}
          options={COUNTRIES}
        />
        <FormInput
          name="phone"
          placeholder={translate("becomeVolunteer.phone")}
          label={translate("becomeVolunteer.phone")}
          type="tel"
        />
        <Button loading={isSubscribing} size="lg" className="mt-4">
          {translate("becomeVolunteer.send-request")}
        </Button>
      </form>
    </Form>
  );
}

type Options = {
  label: string;
  value: string;
  id?: string;
};

type CountryPickerProps = {
  options: Options[];
  label: string;
  errorMessage?: string;
  iconComponent: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

function CountryPicker(props: CountryPickerProps) {
  const {
    options,
    label,
    value,
    onChange,
    errorMessage,
    placeholder,
    iconComponent,
    ...rest
  } = props;

  return (
    <div className="mt-2.5">
      <Label className="block mb-1.5">{label}</Label>
      <div className="flex items-center gap-2">
        {iconComponent}
        <Select onValueChange={(d: any) => onChange?.(d)} value={value as any}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option?.id ? `(${option?.id})` : ""} {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {errorMessage && (
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
      )}
    </div>
  );
}
