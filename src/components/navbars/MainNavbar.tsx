"use client";
import { navbarRoutes } from "@/constants/routes";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustifyIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { buttonVariants, ShadcnButton } from "../ui/button";
import Button from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type Props = {
  className?: string;
};

const flags: { [lang: string]: string } = {
  en: "/icons/uk.png",
  fr: "/icons/france.png",
};

export default function MainNavbar(props: Props) {
  const { className = "" } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translate = useTranslations();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const setLanguage = (lang: string) => {
    // @ts-expect-error
    router.replace({ pathname, params }, { locale: lang });
  };
  const lang = (params?.locale as string) ?? "en";

  return (
    <motion.nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-neutral-100 text-neutral-300 shadow-md"
          : "bg-transparent text-neutral-100"
      }, ${className}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="Noble Alms International"
            width={50}
            height={50}
            unoptimized
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          {navbarRoutes(translate).map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className="hidden lg:inline-block hover:underline hover:text-primary transition-colors duration-300"
              >
                {route.name}
              </Link>
            </li>
          ))}

          <Link
            href="/donate"
            className={buttonVariants({
              className: `px-4 py-2 hidden lg:inline-block rounded ${"bg-secondary text-white hover:bg-secondary-200 rounded-full"}`,
            })}
          >
            {translate("donateNow")}
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <ShadcnButton variant="ghost">
                <img src={flags[lang]} alt={`${lang} flag`} className="w-10" />
              </ShadcnButton>
            </PopoverTrigger>
            <PopoverContent className="px-0 w-fit" align="end">
              <div className=" flex flex-col items-start space-y-3">
                <Button variant="ghost" onClick={() => setLanguage("en")}>
                  <img src={flags.en} alt={`${lang} flag`} className="w-8" />
                  <span>{translate("languages.en")}</span>
                </Button>
                <Button variant="ghost" onClick={() => setLanguage("fr")}>
                  <img src={flags.fr} alt={`${lang} flag`} className="w-8" />
                  <span>{translate("languages.fr")}</span>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Button size="icon" onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? (
              <XIcon className="w-10 h-10" />
            ) : (
              <AlignJustifyIcon className="w-10 h-10" />
            )}
          </Button>
        </ul>
      </div>
      {isMenuOpen && (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white p-5 absolute top-20 left-0 max-h-screen h-screen w-full"
          >
            {navbarRoutes(translate).map((route) => (
              <li key={route.name} className="border-b py-3">
                <Link
                  href={route.href}
                  className="hover:text-secondary capitalize font-semibold transition-colors duration-300"
                >
                  {route.name}
                </Link>
              </li>
            ))}
            <Link
              href="/donate"
              className={buttonVariants({ size: "lg", className: "mt-7" })}
            >
              {translate("donateNow")}
            </Link>
          </motion.ul>
        </AnimatePresence>
      )}
    </motion.nav>
  );
}
