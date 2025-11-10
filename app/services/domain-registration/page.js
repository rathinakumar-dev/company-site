"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Globe, Shield, Mail, Server, CheckCircle2 } from "lucide-react";

export default function Page() {
  const domainExtensions = [
    ".com",
    ".net",
    ".org",
    ".info",
    ".biz",
    ".mobi",
    ".in",
    ".co.in",
    ".net.in",
    ".org.in",
    ".gen.in",
    ".firm.in",
    ".ind.in",
    ".ac.in",
    ".edu.in",
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Domain Theft Protection" },
    { icon: <Mail className="w-5 h-5" />, text: "Mail Forwarding" },
    {
      icon: <Server className="w-5 h-5" />,
      text: "Update Nameservers to your own DNS",
    },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Control A records" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "MX records" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Domain Forwarding" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Free DNS service" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "CNAME records" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "NS Records" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "TXT Records" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100  dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[{ label: "Home", href: "/" }, { label: "Domain Registration" }]}
      />
      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Globe className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Domain Registration
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            A Domain Name is an identification label to define a realm of
            administrative autonomy, authority, or control in the Internet,
            based on the Domain Name System (DNS). Domain names are used in
            various networking contexts and application-specific naming and
            addressing purposes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Why you need a domain name */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Why you need a domain name?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You need a domain to get notified by all over the internet.
                  You can design a web site that informs about your personal
                  information or your business.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-lg">
                    About Our Service
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Goldmine Infotech Pvt Ltd is an ICANN Accredited domain name
                    registrar providing great value and more features. We
                    provide the best support for domain names with a skilled
                    technical team. Our simple registration process helps you
                    register a domain quickly with a clean interface at
                    affordable pricing for businesses of all sizes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Domain Transfer */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Domain Name Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The Domain Transfer service enables you to transfer your
                  Domain Name from any other Domain Registrar to us. During the
                  Domain transfer process, your website will continue to
                  function without any problem or interruption. In addition, we
                  will extend your Registration term from its present expiry
                  date.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Supported Domain Extensions
              </CardTitle>
              <CardDescription>
                We register all types of domain names
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {domainExtensions.map((ext, index) => (
                  <motion.div
                    key={ext}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {ext}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic mt-4">
                * For .ac.in, .edu.in and .res.in - We need letter from the
                organisation in letter head.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Domain Features</CardTitle>
              <CardDescription>
                Comprehensive features included with every domain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg  transition-colors"
                  >
                    <div className="text-primary flex-shrink-0 ">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
