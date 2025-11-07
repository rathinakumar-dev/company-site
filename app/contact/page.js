"use client";

import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Smartphone,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import BottomFooter from "@/components/BottomFooter";

const Page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <Breadcrumb className="w-full h-66 bg-zinc-100/50  dark:bg-zinc-800 object-contain flex justify-center items-center shadow-sm relative -top-16">
        <BreadcrumbList className="px-4 mt-8">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm md:text-base text-zinc-900 dark:text-white font-medium">
              Contact Us
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="max-w-7xl mx-auto px-4 pb-10 md:px-14 md:pt-0 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <motion.div className="space-y-4" {...fadeInUp}>
              <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-white leading-tight">
                Get in —<br />
                touch with us
              </h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We're here to help! Whether you have a question about our
                services, need assistance with your account, or want to provide
                feedback, our team is ready to assist you.
              </p>
            </motion.div>

            {/* Address Card - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wide mb-2 flex gap-1.5">
                    <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />{" "}
                    Address
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    No.21, Parthasarathypuram Extn., North Usman Road, T.Nagar,
                    Chennai - 600017.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Grid with Stagger */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Email Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="space-y-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                    Email
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:admin@goldmineinfotech.com"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 break-words"
                  >
                    admin@goldmineinfotech.com
                  </a>
                  <a
                    href="mailto:goldmineinfotech@gmail.com"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 break-words"
                  >
                    goldmineinfotech@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Mobile Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="space-y-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                    Mobile
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919500036310"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    +91 95000 36310
                  </a>
                  <a
                    href="tel:+919940044291"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    +91 99400 44291
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="space-y-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                    Phone
                  </h3>
                </div>
                <div>
                  <a
                    href="tel:+914442121117"
                    className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    +91 44 - 42121117
                  </a>
                </div>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="space-y-3 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    Monday to Saturday
                  </p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    10:00 AM - 7:30 PM IST
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 lg:p-10 shadow-lg h-fit lg:sticky lg:top-24"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-white leading-tight">
                  Interested in discussing?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name..."
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 h-11 mt-1.5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name..."
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 h-11 mt-1.5"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
                  className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 h-11 mt-1.5"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  How can we help you?
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message..."
                  rows={6}
                  className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 resize-none mt-1.5"
                  required
                />
              </div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Button
                  type="submit"
                  className="w-full sm:w-fit rounded-full p-6 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all font-medium"
                >
                  Send Message
                  <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black dark:bg-gray-900 dark:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="Goldmine Infotech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.744798240714!2d80.23250689999999!3d13.0519096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526784149c477d%3A0xe3242ff11d80e3d4!2sGoldmine%20Infotech!5e0!3m2!1sen!2sin!4v1762324782152!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <BottomFooter />
    </div>
  );
};

export default Page;
