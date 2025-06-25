"use client";
import Button from "@/components/Button";
import { SocialMediaIcons } from "@/constants";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Projects } from "@/types/sanity";
import { useCopy } from "@/hooks/use-copy";
import { useTranslations } from "next-intl";

export default function ProjectShareSection({
  project,
}: {
  project: Projects;
}) {
  const { copied, copy } = useCopy();
  const t = useTranslations();

  return (
    <div className="my-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
      <div>
        <p className="text-sm">
          <strong>{t("publishedAt")}: </strong>
          <span className="text-netural-300 text-sm">
            {new Date(project._createdAt).toLocaleDateString()}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={() => copy(window.location.href)}
          variant="outline"
          size="sm"
        >
          <CopyIcon className="w-4 h-4" />
          <span>{copied ? t("copied") : t("copyLink")}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          title={t("shareOn", { platform: "Facebook" })}
          className="px-0"
        >
          <FacebookShareButton url={window.location.href}>
            <Image
              src={SocialMediaIcons.facebook}
              alt="facebook"
              width={30}
              height={30}
              className="w-7 h-7"
              unoptimized
            />
          </FacebookShareButton>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          title={t("shareOn", { platform: "X" })}
          className="px-0"
        >
          <TwitterShareButton url={window.location.href}>
            <Image
              src={SocialMediaIcons.x}
              alt="twitter"
              width={30}
              height={30}
              className="w-7 h-7"
              unoptimized
            />
          </TwitterShareButton>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          title={t("shareOn", { platform: "Whatsapp" })}
          className="px-0"
        >
          <WhatsappShareButton url={window.location.href}>
            <Image
              src={SocialMediaIcons.whatsapp}
              alt="twitter"
              width={30}
              height={30}
              className="w-7 h-7"
              unoptimized
            />
          </WhatsappShareButton>
        </Button>
      </div>
    </div>
  );
}
