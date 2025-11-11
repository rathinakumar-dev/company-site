"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Laptop,
  Building2,
  ShieldCheck,
  Users,
  Layers,
  Zap,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      icon: Globe,
      title: "Transform Your Business Online",
      desc:
        "A well-designed website expands your reach and builds instant credibility. We turn offline businesses into thriving online brands.",
    },
    {
      size: "lg:col-span-1",
      icon: Laptop,
      title: "Web Designing",
      desc:
        "We blend aesthetic appeal and user-friendliness for powerful business results.",
    },
    {
      size: "lg:col-span-1",
      icon: Building2,
      title: "Commercial Sites",
      desc:
        "Modern, scalable, and technically advanced web apps, portals, CMS, e-commerce & more.",
    },
    {
      size: "lg:col-span-1",
      icon: Layers,
      title: "Corporate Sites",
      desc:
        "Distinct digital identity and credibility for organizations in every sector.",
      tags: ["IT", "Retail", "Outsourcing", "Travel", "Hotels", "HR", "Education", "Arts", "More"],
    },
    {
      size: "lg:col-span-1",
      icon: Users,
      title: "General & Personal Sites",
      desc:
        "Impactful web identities for individuals, listings, and small businesses.",
      tags: ["hellochennai.in", "tilesbazzar.com", "chennaiphotographers.com"],
    },
    {
      size: "lg:col-span-2",
      icon: Zap,
      title: "Flash & Multimedia",
      desc:
        "Bring your brand to life with interactive designs, intros, banners, and multimedia presentations.",
      tags: ["Flash websites", "Animated Banners", "Multimedia Presentations"],
    },
    {
      size: "lg:col-span-1",
      icon: Server,
      title: "Web Hosting",
      desc:
        "Secure, high-speed hosting with 99.9% uptime—your site is always on.",
      tags: ["Windows Hosting", "Linux Hosting"],
    },
    {
      size: "lg:col-span-1",
      icon: ShieldCheck,
      title: "Why Goldmine?",
      desc:
        "Creative design team, reliable infrastructure, affordable custom solutions, and 24x7 support.",
      tags: ["Professional", "Affordable", "Custom", "Support"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-black dark:to-zinc-950 font-inter">
      <Navbar className="relative z-20" />
      <NavPath path={[{ label: "Home", href: "/" }, { label: "Website Designing & Web Hosting" }]} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        {/* Page intro */}
        <section className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Website Designing & Web Hosting
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Design that looks great and reads clearly—on every device and in every theme. We’ve refined spacing, contrast, and layout
            so your content stays readable and the UI feels balanced.
          </p>
        </section>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(160px,auto)] gap-5 sm:gap-6 lg:gap-7"
        >
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className={`group relative flex flex-col p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-slate-200/70 dark:border-zinc-800 shadow-sm hover:shadow-md transition duration-300 ${block.size}`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 ring-1 ring-sky-200/60 dark:ring-sky-800/50 w-12 h-12">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {block.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {block.desc}
                </p>

                {/* Tags */}
                {block.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {block.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hover affordance */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-sky-300/40 dark:ring-sky-500/30 transition" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout */}
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-gradient-to-r from-sky-50 to-white dark:from-zinc-900 dark:to-zinc-900 p-6 sm:p-7 shadow-sm">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
            Tip: For best readability, we use higher contrast text colours, increased line-height, and generous padding. All components support
            dark mode automatically.
          </p>
        </div>
      </main>

      <BottomFooter />
    </div>
  );
}
