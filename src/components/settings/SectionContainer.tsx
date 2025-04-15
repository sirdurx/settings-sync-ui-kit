
import React, { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
  height?: string;
}

const SectionContainer = ({ title, children, height = "auto" }: SectionContainerProps) => {
  return (
    <div
      className="bg-white rounded-md shadow-sm p-8 mb-6 border-b border-gray-200"
      style={{ width: "1044px", height: height, borderRadius: "5px" }}
    >
      <h2 className="text-xl font-semibold text-[#1F4E79] mb-8">{title}</h2>
      {children}
    </div>
  );
};

export default SectionContainer;
