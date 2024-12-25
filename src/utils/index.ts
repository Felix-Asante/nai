import { SupportedLanguages } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function getYoutubeId(url: any) {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const match = regex.exec(url);

  if (!match) {
    return null;
  }
  return match[3];
}

export function getAlternateLanguage(locale: SupportedLanguages) {
  if (locale === "en") {
    return "fr";
  }
  return "en";
}
