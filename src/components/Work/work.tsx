"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../section";
import GradientHeading from "../heading";

const WorkSection = () => {
  return (
    <Section id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <GradientHeading text={"Professional Experience"} className="text-3xl md:text-4xl mb-12 text-center" />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full top-0 hidden sm:block"></div>

          {/* Timeline Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Experience 1 */}
            <div className="relative flex flex-col sm:flex-row justify-start items-start sm:items-center mb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-indigo-900 shadow-lg hidden sm:block"></div>
              <div className="w-full sm:w-1/2 pr-0 sm:pr-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <motion.h3
                    className="text-xl md:text-3xl font-semibold text-white"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2">
                      Zeeve Deep Tech Pvt Ltd.
                      <Image src="/images/logo/zeeve.jpg" alt="Zeeve logo" width={30} height={30} />
                    </div>
                  </motion.h3>
                  <motion.h6
                    className="px-3 py-1 text-sm md:text-xl font-semibold text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full shadow-md hover:from-purple-500 hover:via-purple-600 hover:to-purple-700"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    3+ Exp
                  </motion.h6>
                </div>
                <motion.p
                  className="text-gray-300 text-sm md:text-lg mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <strong>Role:</strong> Software Engineer
                </motion.p>
                <motion.p
                  className="text-gray-300 text-sm md:text-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <strong>Tenure:</strong> January 2022 - Present
                </motion.p>
                <motion.p
                  className="text-gray-400 text-sm md:text-base mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Zeeve is a platform to deploy, scale, monitor, and manage Blockchain nodes and networks.
                </motion.p>
                <motion.ul
                  className="list-disc list-inside text-gray-300 space-y-3 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  {[
                    "Spearheaded the development of 5+ high-performance web applications using Next.js, improving scalability with optimized rendering.",
                    "Enhanced page load speeds by 30% and reduced bounce rates by 15% by integrating best practices in frontend development.",
                    "Reduced bugs by 70% and slashed development time by 25% through reusable component design and optimized testing frameworks.",
                    "Improved workflow efficiency by 25% with GitHub, facilitating smoother development cycles and faster issue resolution.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                      <div>{item}</div>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex flex-col sm:flex-row justify-end items-start sm:items-center mb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-indigo-900 shadow-lg hidden sm:block"></div>
              <div className="w-full sm:w-1/2 pl-0 sm:pl-6">
                <motion.h3
                  className="text-xl md:text-3xl font-semibold text-white mb-4 sm:mb-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  R&R Kay Interiors
                </motion.h3>
                <motion.p className="text-gray-300 text-sm md:text-lg mb-2">
                  <strong>Role:</strong> Freelance Web Developer
                </motion.p>
                <motion.p className="text-gray-300 text-sm md:text-lg mb-4">
                  <strong>Tenure:</strong> June 2021 - Dec 2021
                </motion.p>
                <motion.p className="text-gray-400 text-sm md:text-base mb-4">
                  Freelanced for R&R Kay Interiors and developed their e-commerce website using HTML, CSS, JavaScript, and React.js.
                </motion.p>
                <motion.ul className="list-disc list-inside text-gray-300 space-y-3 sm:space-y-4">
                  {[
                    "Designed and developed a fully functional e-commerce website from scratch using HTML, CSS, and React.js.",
                    "Implemented responsive design for a seamless user experience across devices.",
                    "Utilized JavaScript for interactive UI elements, enhancing customer engagement and conversion rates.",
                    "Integrated payment gateway functionality and optimized the checkout process for better user experience.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                      <div>{item}</div>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WorkSection;
