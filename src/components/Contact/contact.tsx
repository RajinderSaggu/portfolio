"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Section from "../section";
import Link from "next/link";

const ContactSection = () => {
  const links = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajinder-kaur-s-886398216/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/RajinderSaggu",

    },
    // {
    //   icon: <FaPhoneAlt />,
    //   label: "Phone",
    //   text: "+91 8448425699",
    // },
    {
      icon: <FaEnvelope />,
      label: "Mail",
      text: "rajinderkaursaggu@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      text: "New Delhi, India",
    },
  ];

  return (
    <Section
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-gray-400 mb-6">
          Have an exciting project? I’d love to hear about it!
          <br />
          Reach out via email or connect through social platforms.
        </p>
        <ul className="space-y-6  py-6 flex  flex-col  justify-end gap-3">
          {links.map((link, index) => (
            <li
              key={index}
              className="flex items-center gap-4 group hover:cursor-pointer"
            >
              <span className="text-3xl text-white group-hover:text-purple-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                {link.icon}
              </span>
              {link.text ? (
                <span className="text-lg font-medium text-white group-hover:text-purple-500 transition-colors duration-300 ease-in-out">
                  {link.text}
                </span>
              ) : (
                <Link
                  href={link.href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg font-medium text-white hover:text-purple-500
                    }`}
                >
                </Link>
              )}
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
};

export default ContactSection;
