"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../button";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16  max-h-full">
      <div className="grid grid-cols-1 sm:grid-cols-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="text-gray-400 text-base sm:text-xl lg:text-3xl font-bold">
            I am Rajinder Kaur Saggu
          </h2>
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500"
            />
          </h2>

          <p className="text-[#ADB7BE] text-base sm:text-md mb-6 lg:text-lg">
          Crafting seamless, responsive, and visually striking user interfaces with 
         
            <br />
            3+ years of expertise in modern frontend development and cutting-edge practices.
         
          </p>
          <div className="flex gap-3  xs:flex-col">
          <Button text={"Download CV"} href="/rajinder-resume-frontend-2024.pdf" target="_blank" variant="primary" icon={<FaDownload className="text-sm" />} iconPosition="right"></Button>
          <Button text={"Linkedin"} icon={<FaLinkedin/>} href="https://www.linkedin.com/in/rajinder-kaur-s-886398216/" variant="outline" iconPosition="right" ></Button>
          <Button text={"Github"} icon={<FaGithub/>} href="https://github.com/RajinderSaggu" target="_blank" variant="outline" iconPosition="right"></Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[300px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;