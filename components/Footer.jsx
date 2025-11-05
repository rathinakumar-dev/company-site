"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const rootRef = useRef(null);
  const legalRef = useRef(null);

  const inView = useInView(rootRef, { once: true, margin: "-100px" });
  const legalInView = useInView(legalRef, { once: true, margin: "-100px" });

  const year = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      ref={rootRef}
      role="contentinfo"
      className="border-t border-gray-200 dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:pt-12">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="footer-col">
            <a href="#" className="inline-flex">
              <Image
                src="/Images/logo.png"
                alt="Goldmine Info Tech"
                width={260}
                height={50}
                className="dark:invert w-auto h-auto"
                priority
              />
            </a>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              End-to-end IT solutions: web, software, mobile, hosting, and
              communications designed for growth.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={fadeUp} className="footer-col">
            <div className="text-sm uppercase tracking-wide text-gray-800 font-semibold dark:text-gray-400">
              Quick Links
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Who We Are", "#who-we-are"],
                ["Why Choose Us", "#why-choose-us"],
                ["Services", "#services"],
                ["Stats", "#stats"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={fadeUp} className="footer-col">
            <div className="text-sm uppercase tracking-wide text-gray-800 font-semibold dark:text-gray-400">
              Services
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "Website Design & Development",
                "Software Development",
                "Mobile App Development",
                "Domain Registration",
                "Hosting & Maintenance",
                "E-Mail Solutions",
                "eNACH Registration",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter + Contact */}
          <motion.div variants={fadeUp} className="footer-col">
            <div className="text-sm uppercase tracking-wide text-gray-800 font-semibold dark:text-gray-400">
              Stay Updated
            </div>
            <Card className="mt-3 p-3 bg-white/80 dark:bg-neutral-900/60 border-gray-200 dark:border-neutral-800">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2"
                aria-label="Newsletter signup"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white dark:bg-neutral-900 border border-gray-400 dark:border-neutral-400"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Subscribe
                </Button>
              </form>
            </Card>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@goldmineinfotech.com"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  info@goldmineinfotech.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+910000000000"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  +91 00000 00000
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Chennai, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Legal Section */}
      <div className="footer-legal border-t border-gray-300 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {year} Goldmine Infotech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="/sitemap"
              className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
