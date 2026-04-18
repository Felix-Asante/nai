import PageHero from "@/components/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { getPartners } from "@/lib/sanity/api/partners";
import PartnerBenefits from "@/sections/partners/PartnerBenefits";
import PartnerInquiryForm from "@/sections/partners/PartnerInquiryForm";
import PartnerProcess from "@/sections/partners/PartnerProcess";
import PartnersGrid from "@/sections/partners/PartnersGrid";
import PartnershipTypes from "@/sections/partners/PartnershipTypes";
import { cn } from "@/utils";
import { ArrowRightIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Corporate Partnerships — Noble Alms International",
  description:
    "Partner with Noble Alms International to deliver measurable impact across education, health and livelihoods.",
};

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <main>
      <PageHero
        eyebrow="Partner with us"
        title="Corporate Partnerships"
        description="Join a community of forward-thinking organisations investing in meaningful, measurable change. Together we unlock opportunity for vulnerable communities."
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
          Become a partner
        </Link>
        <Link
          href="#partnership-types"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
          )}
        >
          Explore partnership models
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </PageHero>

      <PartnerBenefits />
      <div id="partnership-types">
        <PartnershipTypes />
      </div>
      <PartnerProcess />
      <PartnersGrid partners={partners} />
      <PartnerInquiryForm />
    </main>
  );
}
