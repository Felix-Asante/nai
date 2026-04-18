import PageHero from "@/components/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { getPartners } from "@/lib/sanity/api/partners";
import PartnerInquiryForm from "@/sections/partners/PartnerInquiryForm";
import PartnerProcess from "@/sections/partners/PartnerProcess";
import PartnersGrid from "@/sections/partners/PartnersGrid";
import PartnersIntro from "@/sections/partners/PartnersIntro";
import PartnershipTypes from "@/sections/partners/PartnershipTypes";
import WhyPartner from "@/sections/partners/WhyPartner";
import { cn } from "@/utils";
import { ArrowRightIcon, HandshakeIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PartnersPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PartnersPage() {
  const partners = await getPartners();
  const t = await getTranslations("PartnersPage");

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        image="/images/img-8.jpg"
      >
        <Link
          href="#partner-inquiry"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30"
          )}
        >
          <HandshakeIcon className="w-4 h-4" />
          {t("hero.becomePartner")}
        </Link>
        <Link
          href="#partnership-types"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
          )}
        >
          {t("hero.exploreModels")}
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </PageHero>

      <PartnersIntro />
      <div id="partnership-types">
        <PartnershipTypes />
      </div>
      <WhyPartner />
      <PartnerProcess />
      <PartnersGrid partners={partners} />
      <PartnerInquiryForm />
    </main>
  );
}
