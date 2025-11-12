"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  CreditCard,
  Badge,
  Shield,
  Cpu,
  CheckCircle2,
  Layers,
  BarChart2,
  Rocket,
  Cloud,
  Calendar,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      color: "from-primary/15 to-white dark:from-primary/25",
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: "Payment Gateway Integration",
      desc: "Accept secure online payments with smooth, reliable gateway integration for ecommerce, apps, and portals. Reach customers everywhere, build trust, and drive revenue.",
      tags: ["PayPal", "Stripe", "Razorpay", "Bank", "UPI"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Badge className="w-8 h-8 text-primary" />,
      title: "Requirements & Compliance",
      desc: "We analyze your business needs, required payment methods, regulatory risks, PCI DSS compliance, and infrastructure.",
      tags: ["Security", "PCI DSS"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-800",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security & Data Protection",
      desc: "Customer data encrypted, tokenized and safely handled to protect privacy and reduce compliance scope.",
      tags: ["Encryption", "Tokenization"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-white dark:from-primary/20",
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "API & Platform Integration",
      desc: "Plug services into your platform via RESTful APIs, SDKs, or drop-in widgets for both web and mobile apps.",
      tags: ["API", "Mobile", "Web"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Transparent Milestones",
      desc: "We provide schedules, testing access, and clear phase delivery so you can plan launches confidently.",
      tags: ["Milestones", "Testing"],
    },
    {
      size: "lg:col-span-2",
      color: "from-primary/20 to-slate-200 dark:from-primary/30",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Payment Operations",
      desc: "Instant authorization, capture, refund, settlement, and cancellation support for multiple payment types.",
      tags: ["Credit Card", "NetBanking", "UPI", "Wallets"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-50 to-slate-200 dark:from-zinc-900",
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      title: "Reporting & Analytics",
      desc: "Real-time payment monitoring, order status, and business intelligence dashboards to optimize growth.",
      tags: ["Analytics", "Reporting"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-white dark:from-zinc-900",
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Launch & Support",
      desc: "Sandbox & go-live deployment, merchant onboarding, and post-launch maintenance are included.",
      tags: ["Go Live", "Support"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-slate-200 dark:from-primary/20",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Fraud Prevention",
      desc: "Multi-layered threat detection, anti-fraud rules, and chargeback protection built-in.",
      tags: ["Fraud Detection", "Chargeback"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-800",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Flexible Payment Options",
      desc: "Support for cards, wallets, netbanking, UPI, EMI, subscriptions, recurring payments, donations, more.",
      tags: ["UPI", "Wallet", "Subscription"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[
          { label: "Home", href: "/" },
          { label: "Payment Gateway Integration" },
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
