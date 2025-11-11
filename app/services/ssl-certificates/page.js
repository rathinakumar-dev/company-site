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
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, Award, Server, Globe } from "lucide-react";

export default function Page() {
  const sslTypes = [
    { name: "DV SSL", description: "Domain Validated" },
    { name: "OV SSL", description: "Organization Validated" },
    { name: "EV SSL", description: "Extended Validated" },
    { name: "Wildcard SSL", description: "Multiple Subdomains" },
    { name: "Multi-Domain", description: "Multiple Domains" },
    { name: "UCC SSL", description: "Unified Communications" },
  ];

  const certificateInfo = [
    { label: "Certificate holder's name" },
    { label: "Certificate serial number & expiration date" },
    { label: "Copy of certificate holder's public key" },
    { label: "Digital signature of certificate-issuing authority" },
  ];

  const features = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Free Installation" },
    { icon: <Shield className="w-5 h-5" />, text: "DV, EV, OV SSL's" },
    { icon: <Award className="w-5 h-5" />, text: "Cheapest in the Industry" },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "SSL from all leading providers",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Immediate (DV) SSL issuance",
    },
    { icon: <Lock className="w-5 h-5" />, text: "256-bit Encryption" },
    {
      icon: <Server className="w-5 h-5" />,
      text: "Separate IP Address Included",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Browser Compatibility",
    },
    { icon: <Shield className="w-5 h-5" />, text: "Secure Data Transfer" },
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
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100 dark:from-black dark:to-zinc-900 font-inter">
      <Navbar className="relative z-20" />
      <NavPath
        path={[{ label: "Home", href: "/" }, { label: "SSL Certificates" }]}
      />
      <main className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            SSL Certificates
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            An SSL (Secure Sockets Layer) certificate is a digital certificate
            that authenticates the identity of a website and encrypts
            information sent to the server using SSL technology. Encryption is
            the process of scrambling data into an undecipherable format that
            can only be returned to a readable format with the proper decryption
            key.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* What is an SSL Certificate */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  What is an SSL Certificate?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A certificate serves as an electronic "passport" that
                  establishes an online entity's credentials when doing business
                  on the Web. When an Internet user attempts to send
                  confidential information to a Web server, the user's browser
                  accesses the server's digital certificate and establishes a
                  secure connection.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-lg">
                    Pricing Information
                  </h4>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-lg font-bold text-primary mb-1">
                      ₹3,750/- per year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For single domain (SSL Certificate + Separate IP Address)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certificate Information */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  SSL Certificate Contains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certificateInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
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
              <CardTitle className="text-2xl">SSL Certificate Types</CardTitle>
              <CardDescription>
                Choose the right SSL certificate for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {sslTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    <div className="font-semibold text-sm mb-1">
                      {type.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {type.description}
                    </div>
                  </motion.div>
                ))}
              </div>
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
              <CardTitle className="text-2xl">
                SSL Certificates For Every Website
              </CardTitle>
              <CardDescription>
                Start securing your sites today with comprehensive features
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
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-bold text-lg mb-2 text-center">
                  Start Choosing Your SSL Certificate Now!
                </h4>
                <p className="text-sm text-muted-foreground text-center">
                  Secure your website with industry-leading SSL certificates
                  from trusted providers
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
