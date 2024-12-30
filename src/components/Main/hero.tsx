"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../button";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          filter: "blur(200px)",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-gray-400 text-lg sm:text-2xl lg:text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I am Rajinder Kaur Saggu
        </motion.h2>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer", 1000,
              "Web Developer", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          className="text-[#ADB7BE] mt-4 mb-8 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Crafting seamless, responsive, and visually striking user interfaces with <br />
          3+ years of expertise in modern frontend development and cutting-edge practices.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/rajinder-kaur-s-886398216/"
            variant="outline"
            iconPosition="right"
          />
          <Button
            text="GitHub"
            icon={<FaGithub />}
            href="https://github.com/RajinderSaggu"
            target="_blank"
            variant="outline"
            iconPosition="right"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
