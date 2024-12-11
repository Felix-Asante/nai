"use client";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import TextAreaInput from "@/components/TextAreaInput";
import { Form } from "@/components/ui/form";
import { SocialMediaIcons } from "@/constants";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const socialAccounts = [
  {
    label: "Message us on WhatsApp",
    link: "https://wa.me/2332412111928",
    icon: SocialMediaIcons.whatsapp,
  },
  {
    label: "Message us on Facebook",
    link: "https://facebook.com",
    icon: SocialMediaIcons.facebook,
  },
  {
    label: "Message us on Instagram",
    link: "https://instagram.com",
    icon: SocialMediaIcons.instagram,
  },
  {
    label: "Message us on X",
    link: "https://twitter.com",
    icon: SocialMediaIcons.x,
  },
];
export default function ContactSection() {
  const form = useForm();
  return (
    <div className="flex flex-col gap-x-8 lg:gap-x-16 gap-y-8 md:flex-row md:items-center">
      <div className="md:w-[65%] lg:w-1/2">
        <h3 className="subtitle text-primary font-bold mb-5">
          Send as a message
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <Form {...form}>
            <form className="flex flex-col gap-4">
              <FormInput
                name="name"
                label="Name"
                placeholder="Enter your name"
                className="bg-transparent"
              />
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter your email"
                className="bg-transparent"
              />
              <TextAreaInput
                control={form.control}
                name="message"
                label="Message"
                placeholder="Enter your message"
              />

              <Button type="submit" size="lg" className="my-5">
                Send message
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col space-y-4">
        <div>
          <h4 className="font-bold">Connect with us</h4>
          <p className="text-neutral-300 text-sm">
            Connect with our friendly team via our social media
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            {socialAccounts.map((item) => (
              <Link
                target="_blank"
                href={item.link}
                key={item.label}
                className="flex items-center gap-2 fotn-medium text-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  unoptimized
                  priority
                />
                <span className="hover:underline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold">Call us</h4>
          <p className="text-neutral-300 text-sm">
            Call our team Monday to Friday from 8am to 5pm
          </p>
          <Link
            href="tel:+2332412111928"
            className="flex items-center gap-2 font-medium text-sm mt-3"
          >
            <PhoneIcon size={16} />
            <span className="hover:underline">+233(0)2412111928</span>
          </Link>
        </div>
        <div>
          <h4 className="font-bold">Visit us</h4>
          <p className="text-neutral-300 text-sm">
            Visit our office at 123 Main Street, Accra
          </p>
          <Link
            className="flex items-center gap-2 font-medium text-sm mt-3"
            href="https://www.google.com/maps"
            target="_blank"
          >
            <MapPinIcon size={16} />
            <span className="hover:underline">123 Main Street, Accra</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
