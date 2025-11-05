"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import CountUp from "@/components/CountUp";
import { Smile, CheckCircle2, Globe2, Award } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Feedback() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { label: "Happy Client", value: 2250, icon: Smile },
    { label: "Projects Done", value: 1500, icon: CheckCircle2 },
    { label: "Domain Registered", value: 750, icon: Globe2 },
    { label: "Awards Won", value: 4, icon: Award },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white dark:bg-neutral-950 overflow-hidden py-16"
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
        <motion.ul
          ref={statsRef}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="w-full max-w-[260px]"
            >
              <Card className="group relative overflow-hidden rounded-2xl border border-gray-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center gap-3">
                  {/* Icon Wrapper */}
                  <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-amber-600 dark:text-amber-500 stroke-[2.5]" />
                  </div>

                  {/* Count */}
                  <span className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <CountUp
                      from={0}
                      to={value}
                      separator=","
                      duration={1.3}
                      className="count-up-text"
                    />
                    <span className="text-4xl">+</span>
                  </span>

                  {/* Label */}
                  <span className="mt-1 text-base md:text-lg text-gray-600 dark:text-gray-300">
                    {label}
                  </span>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Logo Loop Section */}
      <div className="py-10 relative overflow-hidden">
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
  );
}
