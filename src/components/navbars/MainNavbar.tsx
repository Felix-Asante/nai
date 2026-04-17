"use client";
import { navbarRoutes } from "@/constants/routes";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useMemo, useState } from "react";
import { buttonVariants, ShadcnButton } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { cn } from "@/utils";

const flags: Record<string, { src: string; label: string }> = {
  en: { src: "/icons/uk.png", label: "EN" },
  fr: { src: "/icons/france.png", label: "FR" },
};

export default function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translate = useTranslations();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsMenuOpen(false);
    };
    handle(mql);
    mql.addEventListener("change", handle);
    return () => mql.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  const setLanguage = (newLang: string) => {
    // @ts-expect-error next-intl typed router limitation
    router.replace({ pathname, params }, { locale: newLang });
  };

  const lang = (params?.locale as string) ?? "en";
  const routes = useMemo(() => navbarRoutes(translate), [translate]);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md text-neutral-700",
        isScrolled
          ? "shadow-[0_4px_24px_rgba(11,60,117,0.08)] border-b border-neutral-200/60"
          : "border-b border-transparent"
      )}
    >
      <nav
        className="container mx-auto flex items-center justify-between h-16 md:h-20 gap-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Noble Alms International — Home"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.jpg"
            alt="Noble Alms International"
            width={44}
            height={44}
            unoptimized
            priority
            className="object-contain rounded-md"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold tracking-tight text-primary-700">
              Noble Alms
            </span>
            <span className="text-[11px] md:text-xs font-medium text-neutral-500">
              International
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {routes.map((route) => {
            const isActive =
              pathname === route.href ||
              (route.href !== "/" && pathname.startsWith(route.href));
            return (
              <li key={route.name}>
                <Link
                  href={route.href}
                  className={cn(
                    "relative inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-primary-700"
                      : "text-neutral-600 hover:text-primary-700"
                  )}
                >
                  {route.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3.5 right-3.5 -bottom-px h-0.5 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <ShadcnButton
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex h-9 gap-1.5 rounded-full px-2.5 text-neutral-600 hover:text-primary-700"
                aria-label="Change language"
              >
                <img
                  src={flags[lang].src}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-xs font-semibold">
                  {flags[lang].label}
                </span>
                <ChevronDownIcon className="w-3.5 h-3.5 opacity-60" />
              </ShadcnButton>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-1.5" align="end">
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors",
                    lang === l && "bg-muted font-medium"
                  )}
                >
                  <img
                    src={flags[l].src}
                    alt=""
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span>{translate(`languages.${l}`)}</span>
                </button>
              ))}
            </PopoverContent>
          </Popover>

          <Link
            href="/donate"
            className={cn(
              buttonVariants({ size: "default" }),
              "hidden sm:inline-flex h-10 rounded-full px-5 bg-secondary text-white hover:bg-secondary-600 shadow-sm shadow-secondary/30"
            )}
          >
            {translate("donateNow")}
          </Link>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-primary-700 hover:bg-primary-50 transition-colors"
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white z-40 overflow-y-auto overscroll-contain"
          >
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col px-6 py-4 divide-y divide-neutral-200"
            >
              {routes.map((route) => {
                const isActive =
                  pathname === route.href ||
                  (route.href !== "/" && pathname.startsWith(route.href));
                return (
                  <li key={route.name}>
                    <Link
                      href={route.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between py-4 text-lg font-semibold transition-colors",
                        isActive
                          ? "text-primary-700"
                          : "text-neutral-700 hover:text-primary-700"
                      )}
                    >
                      {route.name}
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-6 pb-2 flex flex-col gap-3">
                <Link
                  href="/donate"
                  onClick={closeMenu}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full rounded-full bg-secondary text-white hover:bg-secondary-600"
                  )}
                >
                  {translate("donateNow")}
                </Link>
                <div className="flex items-center gap-2 pt-2 justify-center">
                  {(["en", "fr"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLanguage(l);
                        closeMenu();
                      }}
                      className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors",
                        lang === l
                          ? "border-primary-700 text-primary-700 bg-primary-50"
                          : "border-neutral-200 text-neutral-600 hover:border-primary-300"
                      )}
                    >
                      <img
                        src={flags[l].src}
                        alt=""
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      {translate(`languages.${l}`)}
                    </button>
                  ))}
                </div>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
