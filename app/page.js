"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import LogoLoop from "@/components/LogoLoop";
import Footer from "@/components/Footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useInView, motion } from "framer-motion";
import {
  products,
  features,
  services,
  enach,
  stats,
  techLogos,
} from "@/data/Data";
import StatsGrid from "@/components/StatsCard";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="font-inter min-h-screen">
      {/* Nav */}
      <Navbar />
      {/* Hero */}
      {/* <HeroParallax products={products} /> */}
      <Hero />
      {/* whychooseus */}
      <section
        aria-labelledby="why-choose-us-title"
        className="bg-white dark:bg-neutral-950"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 md:py-10">
          {/* WHO WE ARE */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-center text-gray-900 dark:text-white "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Who we are
          </motion.h1>

          <motion.div
            className="mt-6 text-left leading-relaxed space-y-4 text-gray-700 dark:text-gray-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <p>
              Goldmine Infotech Pvt Ltd one of the fastest growing company
              providing end to end IT solutions was officially launched in the
              month of March 2000. We offer host of value added services in Web
              Designing, Domain Registration, Web Hosting, Software Solutions,
              and E-Mail Solutions, to complete the industry needed IT
              solutions.
            </p>
            <p>
              At Goldmine Infotech, we render services to host business on web.
              It is the interest we take to study the business course of our
              clients that facilitate us to craft strategic web solutions for
              their enterprise. From creating specialized infrastructure to
              implementing and managing a complete website, Goldmine Infotech
              tune-up pioneering solutions to meet your targets on web,
              explicitly. We render exclusive and innovative web design
              solutions to all those business seeking for different idea.
              Whether it’s an online application, a CMS or blog, none of them
              could retain the visitors until and unless they have aesthetic
              landing pages.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Button className="rounded-full px-5">Read More</Button>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-8 md:pb-10">
          <motion.h1
            id="why-choose-us-title"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-center text-gray-900 dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h1>

          <motion.p
            className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Partner with a team that prioritizes quality, timelines, and ongoing
            support—built for your business outcomes.
          </motion.p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ label, icon: Icon }, i) => (
              <motion.li
                key={label}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5 shadow-sm hover:shadow-md transition-shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-18 w-18 grid place-items-center rounded-full bg-amber-50   dark:bg-amber-500/10 text-amber-600 dark:text-amber-500">
                  <Icon className="h-11 w-11" aria-hidden="true" />
                </div>
                <span className="text-gray-800 dark:text-gray-100 text-center">
                  {label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      {/* Services */}
      <section
        aria-labelledby="our-services-title"
        className="relative bg-white dark:bg-neutral-950"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-8 md:pb-14">
          {/* Header */}
          <motion.div
            className="services-title text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              id="our-services-title"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white"
            >
              Our Services
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              End-to-end IT services across web, software, mobile, hosting, and
              communications—built to scale with your business.
            </p>
          </motion.div>

          {/* Service Cards */}
          <ul className="services-grid mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ title, desc, icon: Icon, href }, i) => (
              <motion.li
                key={title}
                className="service-card group relative rounded-2xl border border-gray-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5 shadow-sm hover:shadow-md transition-shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                whileHover={{ scale: 1.05 }}
              >
                <h1
                  className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={title}
                />
                <div className="flex flex-col items-center gap-3">
                  <div className="h-18 w-18 grid place-items-center rounded-full bg-amber-50   dark:bg-amber-500/10 text-amber-600 dark:text-amber-500">
                    <Icon className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-center leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* eNACH Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enach.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="enach-block rounded-2xl border border-gray-300 dark:border-neutral-800 bg-gray-50/80 dark:bg-neutral-900/60 p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col justify-center items-center gap-3">
                  <div className="h-18 w-18 grid place-items-center rounded-full bg-amber-50   dark:bg-amber-500/10 text-amber-600 dark:text-amber-500">
                    <Icon className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <div className="ms-1">
                    <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Feedback */}
      <section
        ref={sectionRef}
        className="relative bg-white dark:bg-neutral-950 overflow-hidden pb-8 md:pb-14"
        aria-labelledby="stats-title"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Section Title */}
          <motion.div
            ref={titleRef}
            variants={fadeUp}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2
              id="stats-title"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white"
            >
              Our Impact in Numbers
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Milestones that reflect sustained delivery, customer trust, and
              reliable operations.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <StatsGrid
            stats={stats}
            statsRef={statsRef}
            statsInView={statsInView}
            fadeUp={fadeUp}
          />
        </div>

        {/* Logo Loop Section */}
        <div className="pt-10 relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
