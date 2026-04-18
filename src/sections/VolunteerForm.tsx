"use client";
import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { getCountries } from "react-phone-number-input";
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
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
} from "lucide-react";

type VolunteerFormProps = {
  toggleModal: (state: boolean) => void;
};

export default function VolunteerForm({ toggleModal }: VolunteerFormProps) {
  const params = useParams();
  const locale = params?.locale || "en";
  const lang = locale === "en" ? en : fr;

  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const COUNTRIES = React.useMemo(
    () =>
      getCountries().map((country) => ({
        label: lang[country],
        value: en[country],
      })),
    [lang]
  );

  const form = useForm<becomeVolunteerInput>({
    resolver: zodResolver(becomeVolunteerRules),
    defaultValues: { name: "", email: "", phone: "", country: "" },
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
          description: translate("becomeVolunteer.sucess-message"),
        });
        form.reset();
        toggleModal(false);
      }
    } catch {
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
        className="flex flex-col gap-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <FormInput
            name="name"
            placeholder="Jane Doe"
            label={translate("becomeVolunteer.fullName")}
            startContent={<UserIcon className="w-4 h-4 text-neutral-400" />}
            wrapperClassName="h-11"
          />
          <FormInput
            type="email"
            name="email"
            placeholder="jane@example.com"
            label={translate("becomeVolunteer.email")}
            startContent={<MailIcon className="w-4 h-4 text-neutral-400" />}
            wrapperClassName="h-11"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <SelectInput
            name="country"
            placeholder={translate("becomeVolunteer.country")}
            label={translate("becomeVolunteer.country")}
            control={form.control}
            options={COUNTRIES}
          />
          <FormInput
            name="phone"
            placeholder="+1 555 000 0000"
            label={translate("becomeVolunteer.phone")}
            type="tel"
            startContent={<PhoneIcon className="w-4 h-4 text-neutral-400" />}
            wrapperClassName="h-11"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
          <ShieldCheckIcon className="w-4 h-4 text-primary-600 shrink-0" />
          <span>
            Your details are kept private and used only to contact you about
            volunteering opportunities.
          </span>
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2 border-t border-neutral-200">
          <Button
            type="button"
            variant="outline"
            onClick={() => toggleModal(false)}
            className="sm:w-auto h-11 rounded-full px-5"
          >
            Cancel
          </Button>
          <Button
            loading={isSubscribing}
            type="submit"
            className="sm:w-auto h-11 rounded-full px-6 bg-secondary hover:bg-secondary-600 text-white shadow-sm shadow-secondary/20"
          >
            <SendIcon className="w-4 h-4" />
            {translate("becomeVolunteer.send-request")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
