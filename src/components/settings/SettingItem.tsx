
import React, { ReactNode } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { FiEdit2 } from 'react-icons/fi';

interface SettingItemProps {
  title: string;
  description?: string;
  isToggle?: boolean;
  isEnabled?: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  children?: ReactNode;
  hasBorder?: boolean;
}

const SettingItem = ({
  title,
  description,
  isToggle = false,
  isEnabled = false,
  onToggle,
  onEdit,
  children,
  hasBorder = true,
}: SettingItemProps) => {
  return (
    <div
      className={`flex justify-between items-center ${hasBorder ? 'border-b border-gray-200' : ''} mb-4`}
      style={{
        width: "516px",
        height: description ? "103px" : "auto",
        borderBottomWidth: hasBorder ? "0.5px" : "0",
      }}
    >
      <div className="w-3/4">
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
        {children}
      </div>
      {isToggle && onToggle ? (
        <ToggleSwitch isEnabled={isEnabled} onToggle={onToggle} />
      ) : onEdit ? (
        <button className="text-blue-600 flex items-center" onClick={onEdit}>
          <FiEdit2 className="mr-1" /> Edit
        </button>
      ) : null}
    </div>
  );
};

export default SettingItem;
