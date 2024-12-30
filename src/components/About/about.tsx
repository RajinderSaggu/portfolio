"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../section";
import GradientHeading from "../heading";
import ListItem from "./list";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3">
        <ListItem text={"Masters in Computer Applications - Chandigarh University - 2022-2024"} imageAlt="Cu logo" imageSrc="/images/logo/cu.jpg" />
        <ListItem text={"Bachelors in Commerce - Delhi University 2018-2021"} imageAlt="Du logo" imageSrc="/images/logo/du.jpg" />

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-3">
        <ListItem text={"Meta Front-End Developer Professional Certificate - Coursera"} imageAlt="Coursera logo" imageSrc="/images/logo/coursera.png" />
        <ListItem text={"React - The Complete Guide by Academind, Udemy"} imageAlt="Udemy logo" imageSrc="/images/logo/udemy.jpg" />
        <ListItem text={"Web Development by Bradley Berger, Udemy"} imageAlt="Udemy logo" imageSrc="/images/logo/coursera.png" />
        <ListItem text={"JavaScript Tutorial by John Smilg, Udemy"} imageAlt="Udemy logo" imageSrc="/images/logo/coursera.png" />
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <Section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-6 xl:gap-16 sm:py-16 xl:px-20">
        {/* Image container with padding and centered alignment */}
        <div className="relative w-full h-full p-6 flex justify-center items-center">
          <Image
            src="/about-image.png"
            alt="About Image"
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            width={1200} // Increased image size
            height={1200} // Increased image size
          />
        </div>

        {/* Text content container */}
        <div className="mt-6 md:mt-0 flex flex-col">
          <GradientHeading text={"About Me"} level={2} className="text-4xl mb-6" />
          <p className="text-base lg:text-lg mb-6">
            Welcome to my portfolio! I’m a Frontend Developer with{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              3+ years of experience
            </motion.span>{" "}
            creating responsive and scalable web applications using React.js, Next.js,
            and TypeScript. My work focuses on performance optimization, user-centric
            design, and reusable components. From blockchain analytics to decentralized
            energy platforms, I’ve delivered impactful solutions across diverse domains.
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {" "}
              I am a self-taught coder
            </motion.span>{" "}
            who combines technical expertise with creativity to build high-quality web
            experiences. Explore my projects to see how I craft engaging, performant,
            and user-friendly applications.
          </p>

          {/* Tabs for Education/Certifications */}
          <div
            className="flex space-x-4 mb-6"
            role="tablist"
            aria-label="About Me Tabs"
          >
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-4 py-2 rounded-full font-medium transition duration-200 focus:outline-none ${tab === tabItem.id
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                role="tab"
                aria-selected={tab === tabItem.id}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-3 bg-gray-800 p-4 rounded-lg shadow-md" role="tabpanel">
            {activeTab?.content || <p>Content not available.</p>}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
