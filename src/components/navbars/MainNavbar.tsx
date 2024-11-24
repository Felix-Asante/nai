import { navbarRoutes } from "@/constants/routes";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlignJustifyIcon } from "lucide-react";

type Props = {
  linkClassName?: string;
};
export default function MainNavbar({ linkClassName }: Props) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 mb-6 ${
        isSticky
          ? "bg-neutral-100 text-neutral-300 shadow-md"
          : "bg-transparent text-neutral-100"
      }`}
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
          <button className="lg:hidden">
            <AlignJustifyIcon className="w-6 h-6" />
          </button>
        </ul>
      </div>
    </motion.nav>
  );
}
