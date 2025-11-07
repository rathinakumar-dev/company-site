"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.3, staggerChildren: 0.06 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "tween", duration: 0.25 },
  },
};
const linkVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export default function Navbar() {
  const mounted = useMounted();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About", href: "about" },
    ],
    []
  );
  const servicesSubmenu = useMemo(
    () => [
      "Domain Registration",
      "Web Hosting & Designing",
      "SSL Certificates",
      "VPS Hosting",
      "E-Commerce WEbsite",
      "E-Mail Solutions",
      "Software Development",
      "Android App Development",
      "Panoromic 360° View",
      "Bulk SMS Service",
      "Gsuite email Creation",
      "Payment Gatewap Intergation",
    ],
    []
  );

  const headerSurface =
    mounted && scrolled
      ? "border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-sm dark:border-neutral-800/60 dark:bg-neutral-950/60"
      : "border-transparent bg-transparent dark:border-transparent dark:bg-transparent";

  return (
    <div className="sticky top-4 md:top-6 z-50">
      <header className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "relative flex h-16 items-center justify-between rounded-2xl px-4 md:px-6 transition-all duration-300",
            headerSurface,
          ].join(" ")}
        >
          <a href="/" className="flex items-center min-w-0">
            <Image
              src="/Images/logo.png"
              alt="Goldmine Infotech"
              width={220}
              height={44}
              priority
              className="dark:invert"
              style={{ height: 44, width: "auto" }}
            />
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-sm font-medium text-gray-800 hover:text-amber-600 dark:text-gray-100 dark:hover:text-amber-400 transition-colors px-2 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded-md"
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  id="radix-_R_2clrlb_-trigger-radix-_R_4qclrlb_"
                  aria-controls="radix-_R_2clrlb_-content-radix-_R_4qclrlb_"
                  className="text-sm font-medium text-gray-800 dark:text-gray-100 dark:hover:text-amber-400 transition-colors bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded-md"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <ul className="grid w-[420px] gap-2 p-4 md:w-[520px] md:grid-cols-2  lg:w-[640px]">
                    {servicesSubmenu.map((service) => (
                      <li key={service}>
                        <NavigationMenuLink asChild>
                          <a
                            href="services"
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700 outline-none dark:text-gray-200 dark:hover:bg-amber-500/10 dark:hover:text-amber-300 transition-colors"
                          >
                            {service}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="concerns"
                  className="text-sm font-medium text-gray-800 hover:text-amber-600 dark:text-gray-100 dark:hover:text-amber-400 transition-colors px-2 py-2 focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded-md"
                >
                  Our Concerns
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-3">
            <AnimatedThemeToggler className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer" />
            <a href="contact">
              <Button className="bg-amber-400 hover:bg-amber-300 text-black px-5 rounded-full text-sm font-semibold focus-visible:ring-2 focus-visible:ring-amber-500/60 cursor-pointer">
                Contact Us
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <AnimatedThemeToggler className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800 transition-colors" />
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mounted && isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />
            <motion.nav
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-[100dvh] w-72 max-w-[85vw] bg-white dark:bg-neutral-950 shadow-2xl border-l border-gray-200 dark:border-neutral-800 md:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-200 dark:border-neutral-800">
                <span className="text-sm font-semibold text-gray-900 dark:text-white"></span>
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="p-2 rounded-full bg-gray-300 dark:bg-neutral-800"
                >
                  <X className="h-5 w-5 text-gray-800 dark:text-gray-100" />
                </button>
              </div>

              <div className="px-4 pt-3 pb-10 overflow-y-auto">
                <div className="flex flex-col divide-y divide-gray-100 dark:divide-neutral-800 rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      variants={linkVariants}
                      href={link.href}
                      onClick={toggleMenu}
                      className="px-2 py-3 text-base font-semibold text-gray-800 hover:text-amber-600 dark:text-gray-100 dark:hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <motion.div variants={linkVariants} className="px-2">
                    <details className="group">
                      <summary className="py-3 text-base font-semibold text-gray-800 hover:text-amber-600 dark:text-gray-100 dark:hover:text-amber-400 transition-colors cursor-pointer flex items-center justify-between">
                        Services
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pb-2">
                        <ul className="flex flex-col gap-0.5">
                          {servicesSubmenu.map((service) => (
                            <li key={service}>
                              <a
                                href="services"
                                onClick={toggleMenu}
                                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 dark:text-gray-300 dark:hover:bg-amber-500/10 dark:hover:text-amber-300 transition-colors"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </motion.div>

                  <motion.a
                    variants={linkVariants}
                    href="concerns"
                    onClick={toggleMenu}
                    className="px-2 py-3 text-base font-semibold text-gray-800 hover:text-amber-600 dark:text-gray-100 dark:hover:text-amber-400 transition-colors"
                  >
                    Our Concerns
                  </motion.a>
                </div>

                <motion.div variants={linkVariants} className="mt-6">
                  <a href="contact">
                    <Button className="w-full bg-amber-500 text-zinc-900 hover:bg-amber-400 px-6 rounded-lg text-sm font-semibold">
                      Contact Us
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
