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

export default function ProjectShareSection() {
  return (
    <div className="my-4 flex items-center justify-between">
      <div>
        <p className="text-sm">
          <strong>Pubslished at: </strong>
          <span className="text-netural-300 text-sm">01/01/2023</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <CopyIcon className="w-4 h-4" />
          <span>Copy Link</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          title="Share on Facebook"
          className="px-0"
        >
          <FacebookShareButton url="https://www.facebook.com">
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
          title="Share on Twitter"
          className="px-0"
        >
          <TwitterShareButton url="https://www.twitter.com">
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
          title="Share on Whatsapp"
          className="px-0"
        >
          <WhatsappShareButton url="https://www.twitter.com">
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
