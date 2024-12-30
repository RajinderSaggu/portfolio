import React from 'react';

type SectionProps = {
  id?: string; // Optional id prop for dynamic section identification
  children: React.ReactNode; // To allow dynamic content within the section
  hasGradient?: boolean; // Boolean to conditionally apply background gradient
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  hasGradient = false, // Default is true for gradient
}) => {
  return (
    <section
      id={id}
      className={`text-white ${hasGradient ? 'bg-gradient-to-br from-blue-500 to-purple-600' : ''}  py-12 flex flex-col justify-center`}
    >
      {children}
    </section>
  );
};

export default Section;
