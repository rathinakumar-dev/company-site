"use client";

import Navbar from "@/components/Navbar";
import NavPath from "@/components/NavPath";
import BottomFooter from "@/components/FooterBottom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShoppingCart,
  Settings,
  Info,
  Package,
  CreditCard,
  Wrench,
  Link2,
  MessageSquare,
  Lock,
  AlertTriangle,
  Ban,
  ShieldAlert,
  Scale,
  XCircle,
  FileCheck,
  Gavel,
  RefreshCw,
  Mail,
  ArrowUp,
  BookOpen,
} from "lucide-react";

const sections = [
  { id: "overview", title: "Overview", icon: BookOpen },
  { id: "section-1", title: "Online Store Terms", icon: ShoppingCart },
  { id: "section-2", title: "General Conditions", icon: Settings },
  { id: "section-3", title: "Accuracy of Information", icon: Info },
  { id: "section-4", title: "Service Modifications", icon: RefreshCw },
  { id: "section-5", title: "Products or Services", icon: Package },
  { id: "section-6", title: "Billing Information", icon: CreditCard },
  { id: "section-7", title: "Optional Tools", icon: Wrench },
  { id: "section-8", title: "Third-Party Links", icon: Link2 },
  { id: "section-9", title: "User Comments & Feedback", icon: MessageSquare },
  { id: "section-10", title: "Personal Information", icon: Lock },
  { id: "section-11", title: "Errors & Omissions", icon: AlertTriangle },
  { id: "section-12", title: "Prohibited Uses", icon: Ban },
  { id: "section-13", title: "Disclaimer of Warranties", icon: ShieldAlert },
  { id: "section-14", title: "Indemnification", icon: Scale },
  { id: "section-15", title: "Severability", icon: FileCheck },
  { id: "section-16", title: "Termination", icon: XCircle },
  { id: "section-17", title: "Entire Agreement", icon: FileText },
  { id: "section-18", title: "Governing Law", icon: Gavel },
  { id: "section-19", title: "Changes to Terms", icon: RefreshCw },
  { id: "section-20", title: "Contact Information", icon: Mail },
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

  const termsPath = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions" },
  ];

  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
      <NavPath path={termsPath} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="sticky top-24 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Table of Contents
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-scroll">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.button
                      key={section.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-[200px] text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                        activeSection === section.id
                          ? "bg-zinc-900 dark:bg-zinc-700 text-white font-medium"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-9"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-600 dark:to-zinc-600 p-8 sm:p-12"
              >
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                >
                  Terms & Conditions
                </motion.h1>
              </motion.div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                {/* Overview Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="overview"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <BookOpen className="w-7 h-7" />
                    Overview
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      This website is operated by{" "}
                      <strong>Goldmine Infotech Private Limited</strong>.
                      Throughout the site, the terms "we", "us" and "our" refer
                      to Goldmine Infotech Private Limited. Goldmine Infotech
                      Private Limited offers this website, including all
                      information, tools and services available from this site
                      to you, the user, conditioned upon your acceptance of all
                      terms, conditions, policies and notices stated here.
                    </p>
                    <p>
                      By visiting our site and/or purchasing something from us,
                      you engage in our "Service" and agree to be bound by the
                      following terms and conditions ("Terms of Service",
                      "Terms"), including those additional terms and conditions
                      and policies referenced herein and/or available by
                      hyperlink. These Terms of Service apply to{" "}
                      <strong>all users of the site</strong>, including without
                      limitation users who are browsers, vendors, customers,
                      merchants, and/or contributors of content.
                    </p>
                    <p>
                      Please read these Terms of Service carefully before
                      accessing or using our website. By accessing or using any
                      part of the site, you agree to be bound by these Terms of
                      Service. If you do not agree to all the terms and
                      conditions of this agreement, then you may not access the
                      website or use any services.
                    </p>
                    <p>
                      Any new features or tools which are added to the current
                      store shall also be subject to the Terms of Service. You
                      can review the most current version of the Terms of
                      Service at any time on this page. We reserve the right to
                      update, change or replace any part of these Terms of
                      Service by posting updates and/or changes to our website.
                    </p>
                  </div>
                </motion.section>

                {/* Section 1 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-1"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <ShoppingCart className="w-7 h-7" />
                    Section 1 - Online Store Terms
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      By agreeing to these Terms of Service, you represent that
                      you are at least the <strong>age of majority</strong> in
                      your state or province of residence, or that you are the
                      age of majority in your state or province of residence and
                      you have given us your consent to allow any of your minor
                      dependents to use this site.
                    </p>
                    <p>
                      You may not use our products for any{" "}
                      <strong>illegal or unauthorized purpose</strong> nor may
                      you, in the use of the Service, violate any laws in your
                      jurisdiction (including but not limited to copyright
                      laws).
                    </p>
                    <p>
                      You must not transmit any worms or viruses or any code of
                      a destructive nature.
                    </p>
                    <p>
                      A breach or violation of any of the Terms will result in
                      an <strong>immediate termination</strong> of your
                      Services.
                    </p>
                  </div>
                </motion.section>

                {/* Section 2 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-2"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Settings className="w-7 h-7" />
                    Section 2 - General Conditions
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      We reserve the right to refuse service to anyone for any
                      reason at any time.
                    </p>
                    <p>
                      You understand that your content (not including credit
                      card information), may be transferred unencrypted and
                      involve (a) transmissions over various networks; and (b)
                      changes to conform and adapt to technical requirements of
                      connecting networks or devices.{" "}
                      <strong>
                        Credit card information is always encrypted
                      </strong>{" "}
                      during transfer over networks.
                    </p>
                    <p>
                      You agree not to reproduce, duplicate, copy, sell, resell
                      or exploit any portion of the Service, use of the Service,
                      or access to the Service or any contact on the website
                      through which the service is provided, without express
                      written permission by us.
                    </p>
                    <p>
                      The headings used in this agreement are included for
                      convenience only and will not limit or otherwise affect
                      these Terms.
                    </p>
                  </div>
                </motion.section>

                {/* Section 3 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-3"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Info className="w-7 h-7" />
                    Section 3 - Accuracy, Completeness and Timeliness of
                    Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      We are not responsible if information made available on
                      this site is not accurate, complete or current. The
                      material on this site is provided for{" "}
                      <strong>general information only</strong> and should not
                      be relied upon or used as the sole basis for making
                      decisions without consulting primary, more accurate, more
                      complete or more timely sources of information.
                    </p>
                    <p>
                      This site may contain certain historical information.
                      Historical information, necessarily, is not current and is
                      provided for your reference only. We reserve the right to
                      modify the contents of this site at any time, but we have
                      no obligation to update any information on our site.
                    </p>
                    <p>
                      You agree that it is your responsibility to monitor
                      changes to our site.
                    </p>
                  </div>
                </motion.section>

                {/* Section 4 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-4"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <RefreshCw className="w-7 h-7" />
                    Section 4 - Modifications to the Service and Prices
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Prices for our products are subject to change without
                      notice.
                    </p>
                    <p>
                      We reserve the right at any time to modify or discontinue
                      the Service (or any part or content thereof) without
                      notice at any time.
                    </p>
                    <p>
                      We shall not be liable to you or to any third-party for
                      any modification, price change, suspension or
                      discontinuance of the Service.
                    </p>
                  </div>
                </motion.section>

                {/* Section 5 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-5"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Package className="w-7 h-7" />
                    Section 5 - Products or Services
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Certain products or services may be available exclusively
                      online through the website. These products or services may
                      have <strong>limited quantities</strong> and are subject
                      to return or exchange only according to our Return Policy.
                    </p>
                    <p>
                      We have made every effort to display as accurately as
                      possible the colors and images of our products that appear
                      at the store. We cannot guarantee that your computer
                      monitor's display of any color will be accurate.
                    </p>
                    <p>
                      We reserve the right, but are not obligated, to limit the
                      sales of our products or Services to any person,
                      geographic region or jurisdiction. We may exercise this
                      right on a case-by-case basis. We reserve the right to
                      limit the quantities of any products or services that we
                      offer.
                    </p>
                    <p>
                      We do not warrant that the quality of any products,
                      services, information, or other material purchased or
                      obtained by you will meet your expectations, or that any
                      errors in the Service will be corrected.
                    </p>
                  </div>
                </motion.section>

                {/* Section 6 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-6"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <CreditCard className="w-7 h-7" />
                    Section 6 - Accuracy of Billing and Account Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      We reserve the right to refuse any order you place with
                      us. We may, in our sole discretion, limit or cancel
                      quantities purchased per person, per household or per
                      order. These restrictions may include orders placed by or
                      under the same customer account, the same credit card,
                      and/or orders that use the same billing and/or shipping
                      address.
                    </p>
                    <p>
                      You agree to provide{" "}
                      <strong>current, complete and accurate</strong> purchase
                      and account information for all purchases made at our
                      store. You agree to promptly update your account and other
                      information, including your email address and credit card
                      numbers and expiration dates, so that we can complete your
                      transactions and contact you as needed.
                    </p>
                    <p>For more detail, please review our Returns Policy.</p>
                  </div>
                </motion.section>

                {/* Section 7 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-7"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Wrench className="w-7 h-7" />
                    Section 7 - Optional Tools
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      We may provide you with access to third-party tools over
                      which we neither monitor nor have any control nor input.
                    </p>
                    <p>
                      You acknowledge and agree that we provide access to such
                      tools <strong>"as is" and "as available"</strong> without
                      any warranties, representations or conditions of any kind
                      and without any endorsement. We shall have no liability
                      whatsoever arising from or relating to your use of
                      optional third-party tools.
                    </p>
                    <p>
                      Any use by you of optional tools offered through the site
                      is entirely at your own risk and discretion and you should
                      ensure that you are familiar with and approve of the terms
                      on which tools are provided by the relevant third-party
                      provider(s).
                    </p>
                    <p>
                      We may also, in the future, offer new services and/or
                      features through the website (including, the release of
                      new tools and resources). Such new features and/or
                      services shall also be subject to these Terms of Service.
                    </p>
                  </div>
                </motion.section>

                {/* Section 8 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-8"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Link2 className="w-7 h-7" />
                    Section 8 - Third-Party Links
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Certain content, products and services available via our
                      Service may include materials from third-parties.
                    </p>
                    <p>
                      Third-party links on this site may direct you to
                      third-party websites that are not affiliated with us. We
                      are not responsible for examining or evaluating the
                      content or accuracy and we do not warrant and will not
                      have any liability or responsibility for any third-party
                      materials or websites, or for any other materials,
                      products, or services of third-parties.
                    </p>
                    <p>
                      We are not liable for any harm or damages related to the
                      purchase or use of goods, services, resources, content, or
                      any other transactions made in connection with any
                      third-party websites. Please review carefully the
                      third-party's policies and practices and make sure you
                      understand them before you engage in any transaction.
                    </p>
                  </div>
                </motion.section>

                {/* Section 9 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-9"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <MessageSquare className="w-7 h-7" />
                    Section 9 - User Comments, Feedback and Other Submissions
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      If, at our request, you send certain specific submissions
                      (for example contest entries) or without a request from us
                      you send creative ideas, suggestions, proposals, plans, or
                      other materials, whether online, by email, by postal mail,
                      or otherwise (collectively, 'comments'), you agree that we
                      may, at any time, without restriction, edit, copy,
                      publish, distribute, translate and otherwise use in any
                      medium any comments that you forward to us.
                    </p>
                    <p>
                      We may, but have no obligation to, monitor, edit or remove
                      content that we determine in our sole discretion are
                      unlawful, offensive, threatening, libelous, defamatory,
                      pornographic, obscene or otherwise objectionable or
                      violates any party's intellectual property or these Terms
                      of Service.
                    </p>
                    <p>
                      You agree that your comments will not violate any right of
                      any third-party, including copyright, trademark, privacy,
                      personality or other personal or proprietary right. You
                      are solely responsible for any comments you make and their
                      accuracy.
                    </p>
                  </div>
                </motion.section>

                {/* Section 10 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-10"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Lock className="w-7 h-7" />
                    Section 10 - Personal Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Your submission of personal information through the store
                      is governed by our <strong>Privacy Policy</strong>.
                    </p>
                  </div>
                </motion.section>

                {/* Section 11 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-11"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <AlertTriangle className="w-7 h-7" />
                    Section 11 - Errors, Inaccuracies and Omissions
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Occasionally there may be information on our site or in
                      the Service that contains typographical errors,
                      inaccuracies or omissions that may relate to product
                      descriptions, pricing, promotions, offers, product
                      shipping charges, transit times and availability.
                    </p>
                    <p>
                      We reserve the right to correct any errors, inaccuracies
                      or omissions, and to change or update information or
                      cancel orders if any information in the Service or on any
                      related website is inaccurate at any time without prior
                      notice (including after you have submitted your order).
                    </p>
                    <p>
                      We undertake no obligation to update, amend or clarify
                      information in the Service or on any related website,
                      including without limitation, pricing information, except
                      as required by law.
                    </p>
                  </div>
                </motion.section>

                {/* Section 12 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-12"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Ban className="w-7 h-7" />
                    Section 12 - Prohibited Uses
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      In addition to other prohibitions as set forth in the
                      Terms of Service, you are prohibited from using the site
                      or its content:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>For any unlawful purpose</li>
                      <li>
                        To solicit others to perform or participate in any
                        unlawful acts
                      </li>
                      <li>
                        To violate any international, federal, provincial or
                        state regulations, rules, laws, or local ordinances
                      </li>
                      <li>
                        To infringe upon or violate our intellectual property
                        rights or the intellectual property rights of others
                      </li>
                      <li>
                        To harass, abuse, insult, harm, defame, slander,
                        disparage, intimidate, or discriminate
                      </li>
                      <li>To submit false or misleading information</li>
                      <li>
                        To upload or transmit viruses or any other type of
                        malicious code
                      </li>
                      <li>
                        To collect or track the personal information of others
                      </li>
                      <li>
                        To spam, phish, pharm, pretext, spider, crawl, or scrape
                      </li>
                      <li>For any obscene or immoral purpose</li>
                      <li>
                        To interfere with or circumvent the security features of
                        the Service
                      </li>
                    </ul>
                    <p className="mt-4">
                      We reserve the right to terminate your use of the Service
                      or any related website for violating any of the prohibited
                      uses.
                    </p>
                  </div>
                </motion.section>

                {/* Section 13 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-13"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <ShieldAlert className="w-7 h-7" />
                    Section 13 - Disclaimer of Warranties; Limitation of
                    Liability
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      We do not guarantee, represent or warrant that your use of
                      our service will be uninterrupted, timely, secure or
                      error-free.
                    </p>
                    <p>
                      You expressly agree that your use of, or inability to use,
                      the service is at your sole risk. The service and all
                      products and services delivered to you through the service
                      are (except as expressly stated by us) provided{" "}
                      <strong>'as is' and 'as available'</strong> for your use.
                    </p>
                    <p>
                      In no case shall Goldmine Infotech Private Limited, our
                      directors, officers, employees, affiliates, agents,
                      contractors, interns, suppliers, service providers or
                      licensors be liable for any injury, loss, claim, or any
                      direct, indirect, incidental, punitive, special, or
                      consequential damages of any kind, including, without
                      limitation lost profits, lost revenue, lost savings, loss
                      of data, replacement costs, or any similar damages.
                    </p>
                  </div>
                </motion.section>

                {/* Section 14 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-14"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Scale className="w-7 h-7" />
                    Section 14 - Indemnification
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      You agree to indemnify, defend and hold harmless Goldmine
                      Infotech Private Limited and our parent, subsidiaries,
                      affiliates, partners, officers, directors, agents,
                      contractors, licensors, service providers, subcontractors,
                      suppliers, interns and employees, harmless from any claim
                      or demand, including reasonable attorneys' fees, made by
                      any third-party due to or arising out of your breach of
                      these Terms of Service or the documents they incorporate
                      by reference, or your violation of any law or the rights
                      of a third-party.
                    </p>
                  </div>
                </motion.section>

                {/* Section 15 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-15"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <FileCheck className="w-7 h-7" />
                    Section 15 - Severability
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      In the event that any provision of these Terms of Service
                      is determined to be unlawful, void or unenforceable, such
                      provision shall nonetheless be enforceable to the fullest
                      extent permitted by applicable law, and the unenforceable
                      portion shall be deemed to be severed from these Terms of
                      Service, such determination shall not affect the validity
                      and enforceability of any other remaining provisions.
                    </p>
                  </div>
                </motion.section>

                {/* Section 16 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-16"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <XCircle className="w-7 h-7" />
                    Section 16 - Termination
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      The obligations and liabilities of the parties incurred
                      prior to the termination date shall survive the
                      termination of this agreement for all purposes.
                    </p>
                    <p>
                      These Terms of Service are effective unless and until
                      terminated by either you or us. You may terminate these
                      Terms of Service at any time by notifying us that you no
                      longer wish to use our Services, or when you cease using
                      our site.
                    </p>
                    <p>
                      If in our sole judgment you fail, or we suspect that you
                      have failed, to comply with any term or provision of these
                      Terms of Service, we also may terminate this agreement at
                      any time without notice and you will remain liable for all
                      amounts due up to and including the date of termination.
                    </p>
                  </div>
                </motion.section>

                {/* Section 17 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-17"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <FileText className="w-7 h-7" />
                    Section 17 - Entire Agreement
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      The failure of us to exercise or enforce any right or
                      provision of these Terms of Service shall not constitute a
                      waiver of such right or provision.
                    </p>
                    <p>
                      These Terms of Service and any policies or operating rules
                      posted by us on this site or in respect to The Service
                      constitutes the{" "}
                      <strong>entire agreement and understanding</strong>{" "}
                      between you and us and govern your use of the Service,
                      superseding any prior or contemporaneous agreements,
                      communications and proposals, whether oral or written,
                      between you and us.
                    </p>
                  </div>
                </motion.section>

                {/* Section 18 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-18"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Gavel className="w-7 h-7" />
                    Section 18 - Governing Law
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      These Terms of Service and any separate agreements whereby
                      we provide you Services shall be governed by and construed
                      in accordance with the <strong>laws of India</strong> and
                      jurisdiction of <strong>Chennai, Tamil Nadu</strong>.
                    </p>
                  </div>
                </motion.section>

                {/* Section 19 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-19"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <RefreshCw className="w-7 h-7" />
                    Section 19 - Changes to Terms of Service
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      You can review the most current version of the Terms of
                      Service at any time at this page.
                    </p>
                    <p>
                      We reserve the right, at our sole discretion, to update,
                      change or replace any part of these Terms of Service by
                      posting updates and changes to our website. It is{" "}
                      <strong>your responsibility</strong> to check our website
                      periodically for changes.
                    </p>
                    <p>
                      Your continued use of or access to our website or the
                      Service following the posting of any changes to these
                      Terms of Service constitutes acceptance of those changes.
                    </p>
                  </div>
                </motion.section>

                {/* Section 20 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  id="section-20"
                  className="mb-0 scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b-2 border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                    <Mail className="w-7 h-7" />
                    Section 20 - Contact Information
                  </h2>
                  <div className="space-y-5 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <p>
                      Questions about the Terms of Service should be sent to us
                      at:
                    </p>
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-500">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <a
                          href="mailto:admin@goldmineinfotech.com"
                          className="text-zinc-900 dark:text-white font-medium hover:underline text-lg"
                        >
                          admin@goldmineinfotech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors shadow-lg"
              >
                <ArrowUp className="w-5 h-5" />
                Back to Top
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <BottomFooter />
    </div>
  );
};

export default Page;
