"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  Mail,
  Shield,
  Calendar,
  Server,
  Smartphone,
  BarChart2,
  CheckCircle2,
  UserCheck,
  Filter,
  Folder,
  Layers,
  Terminal,
  Eye,
  Star,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      color: "from-primary/15 to-white dark:from-primary/25",
      icon: <Mail className="w-10 h-10 text-primary" />,
      title: "Standard E-Mail Hosting",
      desc: "Best value plans for individuals and small businesses—personalized email without extra cost.",
      tags: [
        "99.9% Uptime",
        "Spam & Virus Protection",
        "POP3/IMAP/SMTP",
        "Webmail",
      ],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Advanced Threat Protection",
      desc: "Protect against virus, spam, dictionary attacks, mail bombs, and server flooding.",
      tags: ["Anti-Virus", "Anti-Spam"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-800",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Productivity Features",
      desc: "Online address book, calendar, task lists, templates, sorting, and message searching.",
      tags: ["Address Book", "Task List", "Message Templates"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-white dark:from-primary/20",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Device Support",
      desc: "Full HTML email, 'drag and drop', support for wireless and mobile devices.",
      tags: ["Mobile", "Webmail", "HTML Email"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Folder className="w-8 h-8 text-primary" />,
      title: "Flexible Management",
      desc: "Web control panel, folder management, tab-based browsing, sorting & searching.",
      tags: ["Control Panel", "Folders"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-900",
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Server & DNS Control",
      desc: "DNS manager, catch-all addresses, 500 email forwards/aliases, 50 mailing lists.",
      tags: ["DNS Manager", "Mailing Lists", "Aliases"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/20 to-slate-50 dark:from-primary/30",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Reliability",
      desc: "Unlimited POP3 & IMAP, SMTP access, auto-responders, login history, vacation bots.",
      tags: ["Unlimited Access", "Auto-Responder", "Login History"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-800",
      icon: <Filter className="w-8 h-8 text-primary" />,
      title: "Spam Filtering",
      desc: "Basic spam filters and modern protection keep your inbox clean.",
      tags: ["Spam Filtering", "Protection"],
    },
    {
      size: "lg:col-span-2",
      color: "from-primary/10 to-slate-200 dark:from-primary/20",
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Feature Highlights",
      desc: "• Intuitive web-based interface\n• Tabbed browsing\n• Mail encryption\n• Forwarding & templates\n• Sorting/searching\n• Folder management",
      tags: ["Intuitive UI", "Encrypted Email", "Templates"],
    },
    {
      size: "lg:col-span-2",
      color: "from-slate-100 to-white dark:from-zinc-900",
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Peace of Mind",
      desc: "• All accounts protected\n• Dictionary attack protection\n• Flood control\n• 24x7 support available",
      tags: ["Reliability", "Support"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[{ label: "Home", href: "/" }, { label: "E-Mail Solutions" }]}
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
