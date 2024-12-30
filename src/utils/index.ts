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

export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "Quelque chose n'a pas fonctionné"
): string => {
  let message: string;
  if (error instanceof Error) {
    message = error?.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error?.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = defaultMessage;
  }

  return message;
};
