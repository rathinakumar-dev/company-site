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
import {
  Mail,
  Shield,
  Users,
  CheckCircle2,
  Globe,
  Lock,
  Settings,
  Smartphone,
} from "lucide-react";

export default function Page() {
  const emailFeatures = [
    { icon: <Mail className="w-5 h-5" />, text: "Professional business email" },
    { icon: <Shield className="w-5 h-5" />, text: "Spam & virus protection" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "99.9% uptime & reliability" },
    { icon: <Lock className="w-5 h-5" />, text: "Secure data encryption" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Access on any device" },
    { icon: <Settings className="w-5 h-5" />, text: "Easy user management" },
    { icon: <Globe className="w-5 h-5" />, text: "Global sync across devices" },
    { icon: <Users className="w-5 h-5" />, text: "Team collaboration" },
  ];

  const benefits = [
    { title: "Google Workspace Integration", desc: "Seamless access to Gmail, Drive, Calendar, Meet and more." },
    { title: "Professional Branding", desc: "Personalized email for your team boosts trust & credibility." },
    { title: "Scalability", desc: "Easily add/remove users as your business grows." },
    { title: "Security", desc: "Google’s infrastructure keeps your business data safe." },
    { title: "Migration Support", desc: "Switch from other providers with expert assistance." },
  ];

  const steps = [
    "Sign up for Google Workspace and verify your domain.",
    "Create users and assign custom email addresses in Admin Console.",
    "Configure MX records to route email to Google servers.",
    "Manage user permissions, mobile access, and security settings.",
    "Start using Gmail and all Workspace apps across devices.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[{ label: "Home", href: "/" }, { label: "G Suite Email Creation" }]}
      />
      <main className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            G Suite / Google Workspace Email Creation
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            Create professional, secure business email accounts for your domain, leveraging Google’s trusted infrastructure and productivity suite. Enhances branding, security, and collaboration for teams of any size.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Benefits */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Google Workspace Email?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      <span className="font-semibold">{benefit.title}:</span> {benefit.desc}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Badge variant="secondary" className="px-3 py-1">Full Setup & Migration Help Available</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Email Features</CardTitle>
                <CardDescription>
                  Everything your business needs for secure, scalable email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {emailFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="text-primary flex-shrink-0">{feature.icon}</div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Setup Steps */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">How to Get Started</CardTitle>
              <CardDescription>
                Easy step-by-step process for setup and activation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-4 space-y-2 text-muted-foreground text-sm">
                {steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              <p className="text-sm text-muted-foreground mt-3 italic">
                *Full support for setup, migration, and ongoing management available.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
