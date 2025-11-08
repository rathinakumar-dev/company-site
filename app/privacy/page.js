"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Eye,
  Mail,
  ThumbsUp,
  BarChart3,
  Users,
  Database,
  Lock,
  AlertCircle,
  ArrowUp,
} from "lucide-react";

const sections = [
  { id: "overview", title: "Privacy Policy" },
  { id: "privacy-commitment", title: "Privacy Commitment" },
  { id: "information-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "disclosure", title: "Disclosure of Information" },
  { id: "maintenance", title: "Maintenance of Information" },
  { id: "contact", title: "Questions" },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const privacyPath = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
  ];

  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <NavPath path={privacyPath} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="sticky top-24 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                Table of Contents
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-zinc-900 dark:bg-zinc-700 text-white font-medium"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-9"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-600 dark:to-zinc-600 p-8 sm:p-12"
              >
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                  Privacy Policy
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-blue-100 text-lg"
                >
                  Last updated: November 07, 2025
                </motion.p>
              </motion.div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                {/* Overview Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="overview"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    Privacy Policy
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      This Privacy Policy governs the manner in which{" "}
                      <strong>Goldmine Infotech Private Limited</strong>{" "}
                      collects, uses, maintains and discloses information
                      collected from users of our web site and hosting service.
                    </p>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 dark:border-blue-500 p-6 rounded-r-lg"
                    >
                      <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                        Your privacy is our top priority. We are committed to
                        protecting your personal information and being
                        transparent about our data practices.
                      </p>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Privacy Commitment */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="privacy-commitment"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    Our Privacy Commitment
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Users' privacy is very important to Goldmine Infotech
                      Private Limited. We are{" "}
                      <strong>committed to safeguarding</strong> the information
                      Users entrust to us.
                    </p>
                    <p>
                      This website is <strong>not directed at children</strong>{" "}
                      under 13 years of age. We do not knowingly collect
                      personal information from children under 13. If you are a
                      parent or guardian and believe your child has provided us
                      with personal information, please contact us immediately.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {[
                        {
                          icon: Shield,
                          title: "Secure Storage",
                          desc: "Industry-standard security measures protect your data",
                        },
                        {
                          icon: Eye,
                          title: "Transparency",
                          desc: "Clear communication about data collection and use",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-zinc-100 dark:bg-zinc-800 p-5 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                              <div>
                                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                <p className="text-sm">{item.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>

                {/* Information We Collect */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="information-collect"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    The Information We Collect
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Goldmine Infotech Private Limited may collect{" "}
                      <strong>personally identifiable information</strong> from
                      Users in a variety of ways, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg">
                      <li>
                        Through online forms for ordering products and services
                      </li>
                      <li>When Users voluntarily provide information</li>
                      <li>During registration or account creation processes</li>
                      <li>When subscribing to newsletters or communications</li>
                      <li>Through customer support interactions</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">
                      Website Usage Data
                    </h3>
                    <p>
                      We may also collect information about how Users use our
                      website, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Page views:</strong> Tracking the number of
                        unique views received by pages
                      </li>
                      <li>
                        <strong>Origin domains:</strong> The domains from which
                        Users originate
                      </li>
                      <li>
                        <strong>Navigation patterns:</strong> How Users move
                        through our site
                      </li>
                      <li>
                        <strong>Time spent:</strong> Duration of visits and
                        interactions
                      </li>
                    </ul>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-600 dark:border-amber-500 p-6 rounded-r-lg mt-6"
                    >
                      <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        About Cookies
                      </h4>
                      <p className="text-zinc-800 dark:text-zinc-200">
                        We use <strong>"cookies"</strong> to track how Users use
                        our website. A cookie is a piece of software that a web
                        server can store on your PC and use to identify you
                        should you visit the website again.
                      </p>
                    </motion.div>
                  </div>
                </motion.section>

                {/* How We Use Information */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="how-we-use"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    How We Use Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Goldmine Infotech Private Limited may use personally
                      identifiable information collected through our website for
                      the following purposes:
                    </p>

                    <div className="grid gap-4 mt-6">
                      {[
                        {
                          icon: Mail,
                          title: "Communication",
                          desc: "To contact Users regarding products and services offered by Goldmine Infotech Private Limited and its trusted affiliates, independent contractors and business partners.",
                        },
                        {
                          icon: ThumbsUp,
                          title: "Experience Enhancement",
                          desc: "To enhance Users' experience with Goldmine Infotech Private Limited and its affiliates, independent contractors and business partners.",
                        },
                        {
                          icon: BarChart3,
                          title: "Research and Analysis",
                          desc: "For research regarding the effectiveness of the website and the marketing, advertising and sales efforts of Goldmine Infotech Private Limited.",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-4 p-5 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                                {item.title}
                              </h3>
                              <p>{item.desc}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>

                {/* Disclosure of Information */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="disclosure"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    Disclosure of Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Goldmine Infotech Private Limited may disclose information
                      collected from Users in the following circumstances:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          icon: Users,
                          title: "Trusted Partners",
                          desc: "To trusted affiliates, independent contractors and business partners who will use the information for the purposes outlined in this policy.",
                        },
                        {
                          icon: Database,
                          title: "Aggregate Data",
                          desc: "We may disclose aggregate, anonymous data based on information collected from Users to investors and potential partners. This data does not identify individual users.",
                        },
                        {
                          icon: BarChart3,
                          title: "Business Transfers",
                          desc: "We may transfer information collected from Users in connection with a sale of Goldmine Infotech Private Limited's business.",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 py-2"
                          >
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                              <Icon className="w-5 h-5" />
                              {item.title}
                            </h3>
                            <p>{item.desc}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>

                {/* Maintenance of Information */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="maintenance"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    Maintenance of Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 dark:border-green-500 p-6 rounded-r-lg"
                    >
                      <div className="flex items-start gap-3">
                        <Lock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                            Security Measures
                          </h3>
                          <p className="text-zinc-800 dark:text-zinc-200">
                            Information about Users that is maintained on our
                            systems is protected using{" "}
                            <strong>industry standard security measures</strong>
                            .
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-600 dark:border-amber-500 p-6 rounded-r-lg mt-4"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                            Important Notice
                          </h3>
                          <p className="text-zinc-800 dark:text-zinc-200">
                            However, we cannot guarantee that the information
                            submitted to, maintained on, or transmitted from our
                            systems will be completely secure. No method of
                            transmission over the Internet or electronic storage
                            is 100% secure.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  id="contact"
                  className="mb-0 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                    Questions
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Users may direct questions concerning this Privacy Policy
                      by email to:
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-500"
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <a
                          href="mailto:admin@goldmineinfotech.com"
                          className="text-zinc-900 dark:text-white font-medium hover:underline text-lg"
                        >
                          admin@goldmineinfotech.com
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>
              </div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors shadow-lg"
                  >
                    <ArrowUp className="w-5 h-5" />
                    Back to Top
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <BottomFooter />
    </div>
  );
};

export default Page;
