"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import Section from "../section";
import GradientHeading from "../heading";

const skillsList = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
  { icon: <TbBrandCss3 className="text-blue-500" />, label: "CSS3" },
  { icon: <TbBrandJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, label: "React.js" },
  { icon: <SiRedux className="text-purple-400" />, label: "Redux" },
  { icon: <FaBootstrap className="text-indigo-500" />, label: "Bootstrap" },
  { icon: <RiNextjsLine className="text-white" />, label: "Next.js" },
  { icon: <RiTailwindCssFill className="text-teal-400" />, label: "Tailwind CSS" },
];

const SkillsSection = () => {
  return (
    <Section id="skills">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <GradientHeading text={"Skills"} level={2} className="text-4xl mb-6" />
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-[#18191E] border border-[#33353F] rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500">
                {React.cloneElement(skill.icon, { size: "2.5rem" })}
              </div>
              <p className="text-white text-lg mt-4">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
