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
  Code2,
  Database,
  Settings,
  FileCode,
  TestTube,
  Rocket,
  Wrench,
  Users,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function Page() {
  const technologies = [
    "ASP",
    ".NET",
    "Visual Basic",
    "PHP",
    "MySQL",
    "MSSQL",  
  ];

  const developmentPhases = [
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Planning & Analysis",
      description:
        "Extracting requirements and determining project scope with clear documentation to avoid ambiguity.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Design & Architecture",
      description:
        "Domain analysis and creating abstract representation ensuring the system meets current and future requirements.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Specification",
      description:
        "Precisely describing the software with rigorous documentation and third-party reviews for logical soundness.",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Implementation",
      description:
        "Software engineers program the code for the project using latest development technologies.",
    },
    {
      icon: <TestTube className="w-5 h-5" />,
      title: "Testing & Documentation",
      description:
        "Integral testing process to recognize bugs early and documenting for future maintenance and enhancement.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Deployment",
      description:
        "Releasing approved code to production environment with comprehensive training and support for clients.",
    },
  ];

  const services = [
    { text: "Custom Programming" },
    { text: "Database Design" },
    { text: "Client-Server Applications" },
    { text: "Internet/Intranet Development" },
    { text: "Software Application Development" },
    { text: "Offshore Software Outsourcing" },
    { text: "Legacy System Modernization" },
    { text: "API Integration Services" },
  ];

  const maintenanceFeatures = [
    {
      icon: <Wrench className="w-5 h-5" />,
      text: "Bug Tracking System",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Training & Support",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Enhancement Services",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      text: "Performance Optimization",
    },
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
        path={[{ label: "Home", href: "/" }, { label: "Software Development" }]}
      />
      <main className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Code2 className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Software Development
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            Goldmine Infotech Pvt Ltd is a leading software development company
            in Chennai, India. We specialize in the development of custom
            software applications and offshore software outsourcing services,
            including custom programming, database design, and client-server and
            internet/intranet software application development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Our Expertise */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Our Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Over the years we have built a solid team of software
                  professionals from various backgrounds, expanding the creative
                  potential of our company. Our expertise embraces a wide range
                  of custom programming skills involving the latest and most
                  effective development technologies.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-lg">
                    What We Deliver
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This expertise defines the quality and reliability of the
                    custom software applications we develop. We ensure every
                    solution meets the highest standards of performance,
                    security, and scalability to support your business growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {service.text}
                      </span>
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
              <CardTitle className="text-2xl">
                Development Technologies
              </CardTitle>
              <CardDescription>
                Modern tech stack for reliable software solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
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
          className="mb-8"
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Development Process</CardTitle>
              <CardDescription>
                Comprehensive waterfall model approach for quality software
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {developmentPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary">{phase.icon}</div>
                      <h4 className="font-semibold text-sm">{phase.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Deployment & Training */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Deployment & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deployment starts after code is appropriately tested and
                  approved for release. Software training and support is crucial
                  because many projects fail when users don't adopt the system.
                </p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold mb-2">
                    Why Training Matters
                  </p>
                  <p className="text-xs text-muted-foreground">
                    People are often resistant to change. As part of deployment,
                    we provide comprehensive training classes for new clients to
                    ensure successful adoption and maximum ROI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Maintenance & Support */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Maintenance & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Maintenance and enhancement to cope with newly discovered
                  problems or new requirements can take far more time than
                  initial development. We provide ongoing support to ensure your
                  software remains efficient and up-to-date.
                </p>
                <div className="space-y-3">
                  {maintenanceFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="text-primary flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
