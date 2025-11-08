"use client";

import { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom"; 
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Target } from "lucide-react";
import { concerns, center, solution, concernWhyChoose } from "@/data/Data";

const Page = () => {
  // Refs for animation triggers
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const concernPath = [{ label: "Home", href: "/" }, { label: "Our Concerns" }];

  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <NavPath path={concernPath} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                headerInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-800 text-white px-5 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              11+ Years of Excellence
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Your Trusted Technology Partner
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Leading dealer of Dell, HP, ASUS, ACER, and Lenovo in Chennai with
              comprehensive IT solutions
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {concerns.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 text-center shadow-md border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-900 dark:bg-zinc-800 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section 1 - Computer Sales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.div variants={slideIn} className="order-2 md:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/Images/pc.webp"
                alt="Computer and Laptop Store"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="w-12 h-1 bg-white mb-4" />
                <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-2">
                  Premium Products
                </p>
                <h3 className="text-3xl font-bold text-white">
                  Laptops & Desktops
                </h3>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-4xl flex font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                Computer Sales & Service
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We are one of the{" "}
                <strong className="text-zinc-900 dark:text-white">
                  leading dealers
                </strong>{" "}
                of Dell, HP, ASUS, ACER and Lenovo for desktops & laptops in
                Chennai. All branded computers are sold at competitive prices
                with exclusive offers.
              </p>
            </div>

            <div className="space-y-5 mb-4">
              {center.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-900/50 transition-colors"
                  >
                    <div className="p-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://www.goldminesystems.com/">
                <Button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold px-8 py-6 text-base rounded-xl shadow-sm">
                  Explore Our Products
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section 2 - CCTV Systems */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.div variants={fadeInUp} className="order-1">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                CCTV Security Systems
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Chennai-based company dealing with all types of{" "}
                <strong className="text-zinc-900 dark:text-white">
                  electronic security systems
                </strong>{" "}
                throughout Tamilnadu. We provide high-resolution surveillance
                for domestic and commercial applications.
              </p>
            </div>

            <div className="space-y-5 mb-4">
              {solution.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-900/50 transition-colors"
                  >
                    <div className="p-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://www.goldminesystems.com/">
                <Button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold px-8 py-6 text-base rounded-xl shadow-sm">
                  Get Security Quote
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={slideIn} className="order-2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/Images/cctv.webp"
                alt="CCTV Security Camera Installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="w-12 h-1 bg-white mb-4" />
                <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-2">
                  Security Solutions
                </p>
                <h3 className="text-3xl font-bold text-white">
                  CCTV & Automation
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section 3 - Vision & Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideIn} className="order-2 md:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/Images/support.jpg"
                alt="Professional IT Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="w-12 h-1 bg-white mb-4" />
                <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-2">
                  Expert Support
                </p>
                <h3 className="text-3xl font-bold text-white">
                  Quality Service
                </h3>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                Our Vision & Mission
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We provide{" "}
                <strong className="text-zinc-900 dark:text-white">
                  best and guaranteed quality
                </strong>{" "}
                service to all with affordable prices. Our mission is to provide
                exceptional service utilizing all resources for cost-effective
                solutions.
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 mb-8 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-lg">
                  Why Choose Us
                </h4>
              </div>
              <ul className="space-y-4">
                {concernWhyChoose.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2.5 bg-zinc-200 dark:bg-zinc-600 rounded-lg flex-shrink-0">
                  <Target className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <p className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                  Our Goal
                </p>
              </div>
              <p className="text-white/90 leading-relaxed">
                To provide high quality & cost-effective laptop, desktop
                computer and network solutions and services.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://www.goldminesystems.com/">
                <Button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold px-8 py-6 text-base rounded-xl shadow-sm">
                  Learn More About Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
};

export default Page;
