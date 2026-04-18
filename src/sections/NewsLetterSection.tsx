"use client";
import { subscribeToNewsLetter } from "@/actions/newsletter";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { cn, getErrorMessage } from "@/utils";
import {
  subscribeNewsLetterRules,
  subscribeToNewsLetterInput,
} from "@/validations";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, SendIcon } from "lucide-react";

export default function NewsLetterSection() {
  const translate = useTranslations();
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const form = useForm<subscribeToNewsLetterInput>({
    resolver: zodResolver(subscribeNewsLetterRules),
  });

  const onSubscribe = async (data: subscribeToNewsLetterInput) => {
    try {
      setIsSubscribing(true);
      const response = await subscribeToNewsLetter(data.email);
      if (response?.error) {
        toast({
          variant: "destructive",
          description: getErrorMessage(response.error),
        });
      } else {
        toast({ description: translate("subscriptionSuccess") });
        form.setValue("email", "");
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
    <section className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-10 lg:p-12">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-5">
          <span className="eyebrow text-secondary-200 before:bg-secondary-200/70">
            Stay connected
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight">
            Join our newsletter
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-sm">
            Get stories of impact, upcoming projects and ways to support —
            straight to your inbox.
          </p>
        </div>

        <div className="md:col-span-7">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubscribe)}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <div className="flex-1">
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  startContent={<MailIcon className="w-5 h-5 text-white/60" />}
                  wrapperClassName={cn(
                    "flex-1 rounded-full border-white/25 bg-white/10",
                    "h-12 md:h-14 px-5 md:px-6",
                    "focus-within:border-white/50 focus-within:ring-white/30",
                  )}
                  className="bg-transparent text-white placeholder:text-white/60 text-sm md:text-base"
                />
              </div>
              <Button
                loading={isSubscribing}
                className={cn(
                  "rounded-full bg-secondary hover:bg-secondary-600 text-white shrink-0",
                  "h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-semibold",
                  "shadow-lg shadow-secondary/20",
                )}
                type="submit"
              >
                <SendIcon className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          </Form>
          <p className="mt-3 text-xs text-white/50">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
