
import React from 'react';

const ToggleSwitch = ({ isEnabled, onToggle }) => {
  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={onToggle}
        className="sr-only peer"
      />
      <div
        className={`w-8 h-4 rounded-full peer ${
          isEnabled ? "bg-blue-500" : "bg-gray-300"
        } 
        peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
        after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all`}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
