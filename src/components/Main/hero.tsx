"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../button";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden  text-white flex items-center justify-center">

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center text-center px-6 sm:px-10 lg:px-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Greeting */}
        <motion.h2
          className="text-gray-300 text-sm sm:text-lg lg:text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I'm
        </motion.h2>

        {/* Name */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold bg-clip-text text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Rajinder Kaur Saggu
        </motion.h2>

        {/* Animated Role */}
     {/* Animated Role */}
<motion.div
  className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mt-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>

  <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "Web Enthusiast",
      2000,
      "React Specialist",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</div>

</motion.div>


        {/* Description */}
        <motion.p
          className="text-gray-400 mt-6 text-sm sm:text-lg lg:text-xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Crafting seamless, dynamic, and user-friendly digital experiences
          with 3+ years of expertise in modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            text="Download CV"
            href="/rajinder-resume-frontend-2024.pdf"
            target="_blank"
            variant="primary"
            icon={<FaDownload className="text-sm" />}
            iconPosition="right"
          />
          <Button
            text="LinkedIn"
            href="https://www.linkedin.com/in/rajinder-kaur-s-886398216/"
            variant="outline"
            icon={<FaLinkedin />}
            iconPosition="right"
          />
          <Button
            text="GitHub"
            href="https://github.com/RajinderSaggu"
            target="_blank"
            variant="outline"
            icon={<FaGithub />}
            iconPosition="right"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
