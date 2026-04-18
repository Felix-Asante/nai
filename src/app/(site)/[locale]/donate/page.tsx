import DonatePageContent from "@/sections/donate/DonatePageContent";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DonatePage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function DonationPage() {
  return <DonatePageContent />;
}
