"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "../section";
import GradientHeading from "../heading";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "TraceHawk",
    description: "A blockchain analytics platform for Ethereum with real-time updates and responsive design.",
    image: "/images/project_01.png",
    previewUrl: "https://tracehawk.zeeve.io/",
  },
  {
    id: 2,
    title: "Energy Web",
    description: "A decentralized energy platform using React.js and Next.js 13 with enhanced UX and fast load times.",
    image: "/images/project_22.png",
    previewUrl: "https://ewf-dev.zeeve.net/login",
  },
  {
    id: 3,
    title: "QuickBills",
    description: "An invoice management tool with custom authentication, PDF generation, and data visualization.",
    image: "/images/project_31.png",
    previewUrl: "https://quickbills-z7cl.vercel.app/",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section id="projects">
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <GradientHeading text={"Projects"} level={2} className="text-4xl mb-6" />

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
            className="bg-gray-900  rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl relative group"
          >
            <div className="relative p-6 ">
              {/* Project Image with Padding */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold  text-white">{project.title}</h3>

              {/* Description (Always visible) */}
              <p className="text-sm  mt-2 mb-4 text-white">{project.description}</p>

              {/* Link Button */}
              <div className="flex justify-end">
              <Link
              href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity duration-300"
              >
                View Project
              </Link>
                </div>
           
            
            </div>
          </motion.li>
        ))}
      </ul>
      </div>
    </Section>
  );
};

export default ProjectsSection;
