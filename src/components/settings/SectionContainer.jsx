
import React from 'react';

const SectionContainer = ({ title, children, height = "auto" }) => {
  return (
    <div
      className="bg-white rounded-md shadow-sm p-8 mb-6"
      style={{ borderRadius: "5px", width: "1044px", height: height }}
    >
      <h2 className="text-xl font-semibold text-[#1F4E79] mb-6">{title}</h2>
      {children}
    </div>
  );
};

export default SectionContainer;
