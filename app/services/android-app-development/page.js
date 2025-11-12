"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  Smartphone, 
  Rocket,
  Lightbulb,
  UserCheck,
  Figma,
  Cpu,
  CheckCircle2,
  Settings,
  Shield,
  BarChart2,
  Calendar,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      color: "from-primary/15 to-white dark:from-primary/25",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Android App Development",
      desc: "Custom mobile solutions for startups, businesses, and enterprises.\nTransform your vision into high-performance, user-friendly apps for every purpose.",
      tags: ["Native Android", "Business Apps", "Startup Solutions"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Discovery & Strategy",
      desc: "We help shape your app concept, define goals, and map user journeys for maximum engagement.",
      tags: ["App Ideation", "User Journey"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-800",
      icon: <Figma className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      desc: "Intuitive, beautiful visuals for every screen size, built for user satisfaction and brand impact.",
      tags: ["UI/UX", "Responsive Design"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-white dark:from-primary/20",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Development & Integration",
      desc: "Scalable backend, custom APIs, cloud and third-party integrations built for speed & security.",
      tags: ["Backend", "API", "Cloud"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Project Planning",
      desc: "Transparent milestones, friendly updates, and clear phased delivery to keep you in the loop.",
      tags: ["Agile", "Milestones"],
    },
    {
      size: "lg:col-span-2",
      color: "from-primary/20 to-slate-200 dark:from-primary/30",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      desc: "Thorough testing for security, usability and device compatibility. Fixes, optimizations and process automation included.",
      tags: ["Testing", "Security", "Automation"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-50 to-slate-200 dark:from-zinc-900",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Launch & Support",
      desc: "App store deployment, post-launch support, analytics, bug-fixes, and future upgrades.",
      tags: ["Go-Live", "Maintenance"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-white dark:from-zinc-900",
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      title: "Case Studies",
      desc: "See real-world examples and proven success from our portfolio.",
      tags: ["Success Stories", "Portfolio"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-slate-200 dark:from-primary/20",
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Client-Centered Approach",
      desc: "Flexible engagement, ongoing communication, and full transparency at every stage.",
      tags: ["Customer Focus", "Transparency"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-800",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Success Metrics",
      desc: "Our process is data-driven: monitor downloads, growth, engagement, retention, and user satisfaction.",
      tags: ["KPI Tracking", "Growth"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[
          { label: "Home", href: "/" },
          { label: "Android App Development" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-12 rounded-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-6"
        >
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col items-start justify-between p-7 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300
                 bg-gradient-to-br ${block.color} ${block.size}`}
            >
              <span className="flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 shadow w-14 h-14 mb-4">
                {block.icon}
              </span>
              <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {block.title}
              </h3>
              <p className="text-muted-foreground mb-3 text-sm whitespace-pre-line">
                {block.desc}
              </p>
              {block.tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {block.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
