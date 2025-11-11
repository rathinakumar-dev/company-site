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
  ShoppingCart,
  Store,
  Percent,
  CreditCard,
  ListOrdered,
  Star,
  Truck,
  Eye,
  Heart,
  CheckCircle2,
  Shield,
  Smartphone,
} from "lucide-react";

export default function Page() {
  const ecommerceFeatures = [
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      text: "Product Showcase & Catalog",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      text: "Secure Payment Gateway Integration",
    },
    {
      icon: <Store className="w-5 h-5" />,
      text: "Inventory & Order Management",
    },
    {
      icon: <Percent className="w-5 h-5" />,
      text: "Discounts & Coupons Engine",
    },
    {
      icon: <ListOrdered className="w-5 h-5" />,
      text: "Wishlist & Cart Functionality",
    },
    { icon: <Star className="w-5 h-5" />, text: "Ratings & Product Reviews" },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Shipping & Delivery Options",
    },
    { icon: <Heart className="w-5 h-5" />, text: "User Account & Favorites" },
    {
      icon: <Eye className="w-5 h-5" />,
      text: "Analytics & Conversion Tracking",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "SSL Security & Data Protection",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      text: "Mobile Responsive Design",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "SEO Friendly Structure",
    },
  ];

  const benefits = [
    {
      title: "Open 24/7",
      desc: "Sell products globally, not limited by geography or time.",
    },
    {
      title: "Mobile Friendly",
      desc: "Capture sales from users on any device with a responsive layout.",
    },
    {
      title: "Fast & Reliable",
      desc: "Templates optimized for speed and industry best-practices.",
    },
    {
      title: "Brand Customization",
      desc: "Easily adjust colors, fonts, and images to fit your brand identity.",
    },
    {
      title: "Easy Checkout",
      desc: "Streamlined shopping experience for higher conversions.",
    },
    {
      title: "Built-in SEO",
      desc: "Structure built to rank better and attract organic customers.",
    },
    {
      title: "Product Search & Filters",
      desc: "Make it easy for customers to discover products by category, brand, price, and more.",
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
        path={[{ label: "Home", href: "/" }, { label: "Ecommerce Website" }]}
      />
      <main className="max-w-5xl mx-auto pb -16 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <ShoppingCart className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Ecommerce Website Development
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            Launch your online store and reach customers worldwide. Our
            eCommerce websites are fast, responsive, SEO-friendly, and packed
            with all the essential features for a modern shop.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Why Choose Us */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Why Choose Our Ecommerce Solution?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      <span className="font-semibold">{benefit.title}:</span>{" "}
                      {benefit.desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-3 text-lg">
                    Your Store, Your Way
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Customize layouts, colors, and product displays to create a
                    unique and branded shopping experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Key Ecommerce Features
                </CardTitle>
                <CardDescription>
                  All modern online shop essentials included
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ecommerceFeatures.map((feature, index) => (
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
                Responsive & SEO Optimized
              </CardTitle>
              <CardDescription>
                Mobile-ready design with best practices for fast loading and
                high search rankings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="px-3 py-1 mr-2">
                Fast Loading
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 mr-2">
                100% Responsive
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 mr-2">
                SEO Friendly
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Easy Customization
              </Badge>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Ready to launch your online store? Get in touch to start
                building your ecommerce presence today!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <BottomFooter />
    </div>
  );
}
