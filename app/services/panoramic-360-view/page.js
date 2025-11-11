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
  Camera,
  Globe2,
  Eye,
  Smartphone,
  CheckCircle2,
  ImageIcon,
  Star,
} from "lucide-react";

export default function Page() {
  const viewFeatures = [
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Interactive Panoramic 360° Views",
    },
    { icon: <Eye className="w-5 h-5" />, text: "Immersive Experience" },
    { icon: <Globe2 className="w-5 h-5" />, text: "Web & Mobile Support" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Responsive Design" },
    { icon: <Star className="w-5 h-5" />, text: "High-Quality Visuals" },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Easy Embedding & Integration",
    },
    { icon: <ImageIcon className="w-5 h-5" />, text: "Custom Branding" },
  ];

  const useCases = [
    "Real Estate Virtual Tours",
    "Hotels & Resorts Showcases",
    "Event & Venue Presentations",
    "Education & Training Simulations",
    "Automotive 360° Views",
    "Product Demonstrations",
    "Tourism Destinations",
    "Architectural Visualization",
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
        path={[{ label: "Home", href: "/" }, { label: "Panoramic 360 View" }]}
      />
      <main className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Camera className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Panoramic 360° View Services
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            Elevate your website with immersive panoramic 360° views. Showcase
            spaces, products, and experiences with interactive visuals that
            engage visitors, enhance storytelling, and drive conversions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Key Features */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Key 360° Features</CardTitle>
                <CardDescription>
                  Seamless panoramic viewing experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {viewFeatures.map((feature, index) => (
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
                      <span className="text-sm font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Popular Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  {useCases.map((use, idx) => (
                    <li key={idx} className="text-sm">
                      {use}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-3 text-lg">
                    Engage & Convert
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Panoramic views let customers explore in detail, building
                    trust and excitement for your brand or products.
                  </p>
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
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Integration & Support</CardTitle>
              <CardDescription>
                Easy integration into any website, with full support for all
                devices and platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1 mr-2">
                  Web & Mobile Compatible
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 mr-2">
                  Plug-and-Play Install
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 mr-2">
                  Custom Branding
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Expert Support
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Contact us to learn more about bringing 360° experiences to
                your business or website!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
