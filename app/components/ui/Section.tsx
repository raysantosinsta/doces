import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      {children}
    </section>
  );
};
