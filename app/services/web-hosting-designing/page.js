"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion";
import {
  Globe,
  Laptop,
  Building,
  Layers,
  Star,
  Zap,
  Square,
  Film,
  Server,
  Grid2x2, 
  Terminal,
} from "lucide-react";

export default function Page() {
  const blocks = [
    {
      size: "lg:col-span-2 lg:row-span-2",
      color: "from-primary/15 to-white dark:from-primary/25",
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Website Designing",
      desc: "Websites now essential for transforming offline businesses online.\nA charming look and user-friendliness make for lasting success, whether travel, e-commerce, or any industry.",
      tags: ["Business Online", "Modern Design", "User-Friendly"],
    },
    {
      size: "lg:col-span-2",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Commercial Web Designing",
      desc: "Simple, clean, dynamic layouts made for programming, up-to-date design and technical scalability.\nIncludes: Portal Sites, Networking, Web Apps, CMS, E-Commerce, Cart Integration.",
      tags: ["CMS", "E-Commerce", "Portal"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-800",
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Corporate Web Designing",
      desc: "Modern solutions to establish authentic, professional identity for all industries. Serving IT, Retail, Education, Travel, Hotels, HR, etc.",
      tags: ["Professional", "Corporate", "Industry"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/10 to-white dark:from-primary/20",
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "General Web Designing",
      desc: "Personal, single page, and local portal presence: hellochennai.in, tilesbazzar.com, chennaiphotographers.com, etc.",
      tags: ["Local Portals", "Personal", "SMB"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-900",
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Flash Designing",
      desc: "Add creativity, innovation, and impressive presentations with Flash designs—make your site lively and memorable.",
      tags: ["Flash Animation", "Interactive"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-100 to-slate-300 dark:from-zinc-900",
      icon: <Square className="w-8 h-8 text-primary" />,
      title: "Animated Banners",
      desc: "Creative, exclusive designs for brand image—add new dimensions and energy to your site and business.",
      tags: ["Animated Banners", "Branding"],
    },
    {
      size: "lg:col-span-1",
      color: "from-primary/20 to-slate-50 dark:from-primary/30",
      icon: <Film className="w-8 h-8 text-primary" />,
      title: "Multimedia Presentations",
      desc: "Powerpoint, Flash, and Director presentations to communicate and impress visitors.",
      tags: ["Powerpoint", "Presentations", "Flash"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-200 to-white dark:from-zinc-800",
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Flash Websites / Flash Intros",
      desc: "Flash-driven sites are lively, interactive, and memorable—perfect for first impressions and modern style.",
      tags: ["Flash Websites", "Flash Intros"],
    },
    {
      size: "lg:col-span-2",
      color: "from-primary/10 to-slate-200 dark:from-primary/20",
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Web Hosting",
      desc: "99.9% uptime, fast stable servers in both Windows & Linux. Plans include:\n• Free DNS Management\n• Email with advanced spam/virus protection\n• Secure FTP",
      tags: ["Reliable Hosting", "Windows", "Linux"],
    },
    {
      size: "lg:col-span-1",
      color: "from-white to-slate-100 dark:from-zinc-900",
      icon: <Grid2x2 className="w-8 h-8 text-primary" />,
      title: "Windows Web Hosting",
      desc: "Best if you need .NET, ASP, MSSQL, Access. Hosted on latest Intel Windows 2003 servers.\n• ODBC, JMail, CDONTS, Active Perl, CGI, WAP, FTP, POP Accounts, Free 'Catch-all' forwarding.",
      tags: ["ASP.NET", "Windows", "MSSQL"],
    },
    {
      size: "lg:col-span-1",
      color: "from-slate-50 to-slate-200 dark:from-zinc-900",
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Linux Web Hosting",
      desc: "Most common OS for hosting companies. Suitable for Linux features: PHP, Perl, MySQL, CGI.\nCheaper, reliable, and always updated.",
      tags: ["PHP", "MySQL", "Linux"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[
          { label: "Home", href: "/" },
          { label: "Website Designing & Hosting" },
        ]}
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
