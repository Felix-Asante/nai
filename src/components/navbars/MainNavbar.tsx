"use client";
import { navbarRoutes } from "@/constants/routes";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustifyIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import Button from "../Button";

type Props = {
  className?: string;
};
export default function MainNavbar(props: Props) {
  const { className = "" } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {navbarRoutes.map((route) => (
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
            className={`px-4 py-2 hidden lg:inline-block rounded ${
              isSticky
                ? "bg-primary text-white hover:bg-primary-200"
                : "bg-secondary text-white hover:bg-secondary-200"
            }`}
          >
            Donate Now
          </Link>
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
            {navbarRoutes.map((route) => (
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
              Donate Now
            </Link>
          </motion.ul>
        </AnimatePresence>
      )}
    </motion.nav>
  );
}
