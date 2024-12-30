// ListItem.tsx
import React from "react";
import Image from "next/image"; // assuming you're using Next.js's Image component

// Define types for the props
interface ListItemProps {
  text: string;       // Text to display in the list item
  imageSrc?: string;  // Optional image source (URL)
  imageAlt: string;   // Alt text for the image
}

const ListItem: React.FC<ListItemProps> = ({ text, imageSrc, imageAlt }) => {
  return (
    <li className="flex items-center gap-3 text-[16px]">
      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
      <span>{text}</span>
      {imageSrc && (
        <div className="p-1 bg-gray-600">
          <Image src={imageSrc} alt={imageAlt} width={20} height={40} />
        </div>
      )}
    </li>
  );
};

export default ListItem;
