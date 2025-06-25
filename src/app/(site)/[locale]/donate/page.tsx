import Button from "@/components/Button";
import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { buttonVariants } from "@/components/ui/button";
import { DonationForm } from "@/sections/DonationForm";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import { CheckIcon } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function DonationPage() {
  return (
    <div>
      <header className="relative h-[80vh] w-full bg-[url('/images/img-30.jpg')] bg-cover bg-center bg-no-repeat">
        <MainNavbar className="text-white" />
        <div className="absolute top-0 left-0 w-full h-full -z[10] bg-black/70" />
        <div className="flex flex-col items-center justify-center gap-3 h-[80%] relative text-center z-10 w-full mx-auto lg:w-[70%]">
          <h1 className="title font-bold text-white uppercase">
            Together we can make a difference
          </h1>
          <p className="paragraph-large text-white">
            Your generosity powers our work to empower others. Every donation,
            no matter the size, makes a meaningful impact.
          </p>
          <Link
            href="#donate"
            className={buttonVariants({
              size: "lg",
              variant: "secondary",
              className: "mt-4",
            })}
          >
            Donate Now
          </Link>
        </div>
      </header>

      <section className="mt-14">
        <Container>
          <div>
            <h2 className="title">Why donate?</h2>
            <ul className="space-y-4 mt-5">
              <li>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-secondary" />
                  <span className="font-bold">Direct Impact:</span> Your
                  contributions directly support our programs and initiatives.
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-secondary" />
                  <span className="font-bold">Transparency:</span> We ensure 80%
                  of your donation goes directly to our programs.
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-secondary" />
                  <span className="font-bold">Community:</span> Become part of a
                  global movement of compassion and generosity.
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <HowUCanHelp />
      <section id="donate">
        <DonationForm />
      </section>
    </div>
  );
}
