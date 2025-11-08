"use client";

import Navbar from "@/components/Navbar";
import BottomFooter from "@/components/FooterBottom";
import { motion } from "framer-motion"; 
import { Target, Eye, Trophy, CheckCircle2 } from "lucide-react";
import { companyValues, timeline, achievements } from "@/data/Data";
import NavPath from "@/components/NavPath";

const page = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const aboutPath = [
  { label: "Home", href: "/" },
  { label: "About" }
];
  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar className="absolute" />
       <NavPath path={aboutPath} />
      <main>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.section
            {...fadeInUp}
            className="bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 md:mb-16 lg:mb-20 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white  mb-6 md:mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-zinc-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                At{" "}
                <span className="font-bold text-zinc-900 dark:text-white">
                  Goldmine Infotech
                </span>
                , we don't just build websites—we craft digital experiences that
                drive business growth. What makes us different is our genuine
                commitment to understanding your business inside and out before
                we write a single line of code.
              </p>
              <p>
                Our team takes the time to study your industry, your customers,
                and your unique challenges. This deep dive allows us to create
                strategic web solutions that aren't just technically excellent,
                but also perfectly aligned with your business objectives.
              </p>
              <p>
                With over two decades of experience and 2,250+ successful client
                relationships, we've learned that the best solutions come from
                true partnership. We're not vendors—we're your long-term
                technology partners invested in your success.
              </p>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl"
            >
              <Target className="w-10 h-10 md:w-12 md:h-12 mb-4 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-center text-amber-50">
                To empower businesses of all sizes with innovative, strategic
                web solutions that drive growth and success in the digital era.
                We craft custom IT solutions that transform how our clients
                connect with their customers online.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl"
            >
              <Eye className="w-10 h-10 md:w-12 md:h-12 mb-4 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center">
                Our Vision
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-blue-50 text-center">
                To be India's most trusted IT solutions partner, recognized for
                pioneering innovation, exceptional quality, and unwavering
                commitment to client success. We envision a future where every
                business thrives online with our support.
              </p>
            </motion.div>
          </div>

          <motion.section {...fadeInUp} className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white mb-8 md:mb-12 text-center px-4">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 hidden lg:block"></div>

              <div className="space-y-8 md:space-y-12">
                {timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-1 w-full ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      <div className="bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <span className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2 md:mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2 md:mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-4 border-white dark:border-zinc-900 shadow-lg z-10 flex-shrink-0"></div>
                    <div className="hidden lg:block flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 md:mb-16 lg:mb-20"
          >
            <div className="text-center mb-8 md:mb-12 px-4">
              <Trophy className="w-12 h-12 md:w-16 md:h-16 text-amber-600 dark:text-amber-500 mx-auto mb-4 md:mb-6" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white mb-3 md:mb-4">
                Our Achievements
              </h2>
              <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Milestones that reflect our commitment to excellence and client
                success
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-5  shadow-md border-l-4 border-amber-500"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-8 h-8  text-amber-600 dark:text-amber-500 flex-shrink-0 mt-2" />
                    <p className="text-zinc-900 dark:text-white font-semibold text-base md:text-lg">
                      {achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white mb-3 md:mb-4 text-center px-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              The principles that guide every decision we make and every
              solution we deliver
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all border-t-4 border-amber-500"
                >
                  <div className="text-amber-600 dark:text-amber-500 rounded-full bg-amber-50  dark:bg-amber-500/10 h-18 w-18 mx-auto items-center mb-3 grid place-content-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center text-zinc-900 dark:text-white mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-center text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <BottomFooter />
    </div>
  );
};

export default page;
