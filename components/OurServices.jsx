"use client";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Code2,
  Smartphone,
  Globe2,
  Server,
  Mail,
  CreditCard,
  Info,
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "Website Design & Development",
      desc: "Crafting world-class website designs for real-world experiences, transforming your ideas into action.",
      icon: MonitorSmartphone,
    },
    {
      title: "Software Development",
      desc: "Delivering technology-driven, tailor-made software using an agile SDLC for faster, safer releases.",
      icon: Code2,
    },
    {
      title: "Mobile Application Development",
      desc: "Deploying rich, performant mobile apps that help you connect with your mobile-savvy audience.",
      icon: Smartphone,
    },
    {
      title: "Domain Registration",
      desc: "ICANN-aligned domain registration with transparent pricing and reliable lifecycle management.",
      icon: Globe2,
    },
    {
      title: "Web Hosting & Maintenance",
      desc: "Reliable hosting and proactive maintenance to ensure consistent uptime for deployed software.",
      icon: Server,
    },
    {
      title: "E-Mail Solutions",
      desc: "Secure, scalable email hosting plans offering great value for individuals and small businesses.",
      icon: Mail,
    },
  ];

  // Animation variants
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

  return (
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
          {[
            {
              icon: CreditCard,
              title: "eNACH Registration thru Website",
              desc: "We designed an eNACH form for a quick and secure way of accepting payments from your customers by integrating bank eNACH APIs.",
            },
            {
              icon: Info,
              title: "What is eNACH FORM",
              desc: "eNACH enables banks, FIs, and government bodies to automate recurring payments. After signing an eNACH mandate, the payer authorizes periodic debits on a fixed schedule.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
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
  );
}
