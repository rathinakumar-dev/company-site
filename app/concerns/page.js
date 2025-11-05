"use client";

import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Monitor,
  Wrench,
  ArrowUpCircle,
  Camera,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const year = new Date().getFullYear();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <Breadcrumb className="w-full h-66 bg-zinc-100/50  dark:bg-zinc-800 object-contain flex justify-center items-center shadow-sm relative -top-16">
        <BreadcrumbList className="px-4 mt-8">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm md:text-base text-zinc-900 dark:text-white font-medium">
              Our Concerns
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Your Trusted Technology Partner
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Leading dealer of Dell, HP, ASUS, ACER, and Lenovo in Chennai with
              11+ years of excellence
            </p>
          </motion.div>

          {/* Grid Section 1 - Image Left, Content Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-30"
          >
            <motion.div variants={scaleIn} className="order-2 md:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src="/api/placeholder/600/400"
                  alt="Computer and Laptop Store"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Premium Products
                  </p>
                  <h3 className="text-2xl font-bold mt-1">
                    Laptops & Desktops
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Computer Sales & Service
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                  We are one of the leading dealers of Dell, HP, ASUS, ACER and
                  Lenovo for desktops & laptops in Chennai. All branded desktops
                  and laptops are sold at competitive price with FREE offers
                  from us. We do not hard sell computers; we guide you through
                  your buying decisions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Sales with Buy-back
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Laptop & Desktop exchange offers available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Complete Service
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Desktops, laptops, UPS and printers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowUpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Hardware Upgrades
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        RAM, HDD, graphics card & more
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <a href="https://www.goldminesystems.com/">
                    <Button className="cursor-pointer">Read More</Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Grid Section 2 - Content Left, Image Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-30"
          >
            <motion.div variants={fadeInUp} className="order-1">
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  CCTV Security Systems
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                  CCTV Camera Service is a Chennai-based company which deals
                  with all types of electronic security systems throughout
                  Tamilnadu with excellent customer service support. We provide
                  high-resolution surveillance security systems for both
                  domestic and commercial applications.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Custom Solutions
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Single to multi-site camera configurations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        11+ Years Experience
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Served over 2000 satisfied customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Service First Approach
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Survey → Analyse → Install → Maintain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <a href="https://www.goldminesystems.com/">
                    <Button className="cursor-pointer">Read More</Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} className="order-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src="/api/placeholder/600/400"
                  alt="CCTV Security Camera Installation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Security Solutions
                  </p>
                  <h3 className="text-2xl font-bold mt-1">CCTV & Automation</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Grid Section 3 - Image Left, Content Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <motion.div variants={scaleIn} className="order-2 md:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src="/api/placeholder/600/400"
                  alt="Professional IT Services"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Expert Support
                  </p>
                  <h3 className="text-2xl font-bold mt-1">Quality Service</h3>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <Card className="p-8 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-colors duration-300">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Our Vision & Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                  We provide best and guaranteed quality service to all with
                  affordable price in the market. Our mission is to provide you
                  exceptional service and we utilize all of our resources to
                  ensure cost effective repairs.
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 mb-2 transition-colors duration-300">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Why Choose Us?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      Friendly, fast & reliable service
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      Professional team with strong expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      Affordable pricing for business & residential
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      Regular follow-ups for customer satisfaction
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                    Our Goal
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To provide high quality & cost-effective laptop, desktop
                    computer and network solutions and services.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <a href="https://www.goldminesystems.com/">
                    <Button className="cursor-pointer">Read More</Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <div className="footer-legal border-t border-gray-800 dark:border-neutral-800">
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
    </div>
  );
};

export default page;
