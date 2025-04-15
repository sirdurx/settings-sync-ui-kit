
import { useState } from 'react';

interface ToggleSwitchProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export const ToggleSwitch = ({ isEnabled, onToggle }: ToggleSwitchProps) => {
  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      style={{ width: "86px", height: "18px" }}
    >
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={onToggle}
        className="sr-only peer"
      />
      <div
        className={`w-10 h-5 rounded-full peer ${
          isEnabled ? "bg-blue-500" : "bg-gray-300"
        } 
        peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] 
        after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all`}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
