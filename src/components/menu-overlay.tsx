import Link from "next/link";
import React from "react";

// Define the types for the link object and props
interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
          href={link.path}
          title={link.title}
          className="text-white hover:text-white transition duration-300 ease-in-out text-xl font-semibold"
        >
          {link.title}
        </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
