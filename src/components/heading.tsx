import React, { JSX } from 'react';

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const GradientHeading: React.FC<HeadingProps> = ({ text, level = 1, className = "" }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-600 font-extrabold ${className}`}
    >
      {text}
    </HeadingTag>
  );
};

export default GradientHeading;
