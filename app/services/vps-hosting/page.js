"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Shield,
  Power,
  Repeat,
  Globe,
  Terminal,
  UserCheck,
  Settings,
  Badge,
  CheckCircle2,
  BarChart2,
  Box,
  Database,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      color: "from-primary/20 to-white dark:from-primary/30",
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Value VPS Plan",
      desc: "40 GB Disk | 1 Core | 1 Dedicated IP | FREE Reboot | 1 GB RAM | UNLIMITED Bandwidth | 24x7 Support | FREE OS reloads",
      price: "₹49,750 + 18% GST / Year",
      tags: ["Instant Setup", "Dedicated Resources"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Intel Dual Xeon Nodes",
      desc: "All VPS nodes powered by Intel Dual Xeon Quad Core, 64GB ECC RAM or higher for peak performance.",
      tags: ["Powerful Hardware", "Stable"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-800",
      icon: <HardDrive className="w-8 h-8 text-primary" />,
      title: "RAID 10 Disk Arrays",
      desc: "Enterprise grade WD drives & LSI hardware RAID 10 for speed and fault tolerance.",
      tags: ["Fault Tolerant", "Fast"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-white dark:from-primary/20",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "No Overselling",
      desc: "XEN virtualization ensures genuine dedicated resources—no overselling, always top performance.",
      tags: ["XEN Platform"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Repeat className="w-8 h-8 text-primary" />,
      title: "Free Reboots & OS Reloads",
      desc: "Control panel lets you reboot or reinstall OS at any time, with instant provisioning.",
      tags: ["SolusVM Panel"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-50 to-slate-200 dark:from-zinc-900",
      icon: <Box className="w-8 h-8 text-primary" />,
      title: "Full Root Access",
      desc: "Total control—manage your VPS just like a dedicated server. System admin freedom.",
      tags: ["Root Access"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/20 to-slate-50 dark:from-primary/30",
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "cPanel/Plesk, Linux or Windows",
      desc: "Best Linux VPS with cPanel, Windows VPS with Plesk. Free panel options for experts.",
      tags: ["cPanel", "Plesk", "Free Panels"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-800",
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Choice of OS",
      desc: "CentOS, Fedora, Ubuntu, Debian, Win Server 2012/16—all supported, ready to deploy.",
      tags: ["Linux", "Windows"],
    },
    {
      size: "lg:col-span-2",
      color: "from-primary/10 to-slate-200 dark:from-primary/20",
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "VPS Hosting Features",
      desc: "• Fully managed & dedicated resources\n• Instant activation post-verification\n• 24x7 support\n• VPS Management via SolusVM panel",
      tags: ["Managed Support", "SolusVM"],
    },
    {
      size: "lg:col-span-2",
      color: "from-slate-100 to-white dark:from-zinc-900",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Why Choose Us?",
      desc: "• Reliable XEN platform\n• No overselling\n• Enterprise hardware only\n• Fast, friendly, and expert support",
      tags: ["India Based", "Trusted Performance"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[{ label: "Home", href: "/" }, { label: "VPS Hosting" }]}
      />

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-12 rounded-2xl">
        {/* Bento Grid */}
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
              {block.price && (
                <div className="font-semibold text-primary mb-2 text-base">
                  {block.price}
                </div>
              )}
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
