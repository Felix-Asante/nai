"use client";
import { subscribeToNewsLetter } from "@/actions/newsletter";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { getErrorMessage } from "@/utils";
import {
  subscribeNewsLetterRules,
  subscribeToNewsLetterInput,
} from "@/validations";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewsLetterSection() {
  const translate = useTranslations();
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const form = useForm<subscribeToNewsLetterInput>({
    resolver: zodResolver(subscribeNewsLetterRules),
  });

  const onSubscribeToNewsLetter = async (data: subscribeToNewsLetterInput) => {
    try {
      setIsSubscribing(true);
      const response = await subscribeToNewsLetter(data.email);
      if (response?.error) {
        toast({
          variant: "destructive",
          description: getErrorMessage(response.error),
        });
      } else {
        toast({
          description: translate("subscriptionSuccess"),
        });
        form.setValue("email", "");
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
    <section className="flex flex-col md:flex-row gap-7 lg:gap-12 py-5">
      <h4 className="font-bold text-2xl md:w-[40%] lg:w-[30%]">
        Join our newsletter to keep up to date with us!
      </h4>
      <div className="md:w-[60%] lg:w-[70%]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubscribeToNewsLetter)}
            className="flex flex-col sm:flex-row sm:items-start  sm:justify-end gap-5 "
          >
            <div className="md:w-1/2">
              <FormInput
                name="email"
                placeholder="Enter your email"
                wrapperClassName="rounded-full border-neutral-100 border-2 h-11"
                className="bg-transparent text-netural-100 placeholder:text-neutral-100"
              />
            </div>
            <Button
              loading={isSubscribing}
              className="rounded-full bg-secondary-200 hover:bg-secondary text-black"
              size="lg"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
