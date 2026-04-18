"use client";

import { useTranslations } from "next-intl";

export default function YoutubeIframe({ videoId }: { videoId: string | null }) {
  const t = useTranslations("a11y");
  if (!videoId) {
    return null;
  }
  return (
    <iframe
      className="aspect-video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={t("youtubePlayer")}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
