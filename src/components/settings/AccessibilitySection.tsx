
import React from 'react';
import SectionContainer from './SectionContainer';
import ToggleSwitch from './ToggleSwitch';

interface AccessibilitySectionProps {
  settings: {
    visuallyImpairedMode: boolean;
    cognitiveDisabilityMode: boolean;
    darkThemeMode: boolean;
  };
  onToggle: (setting: string) => void;
}

const AccessibilitySection = ({ settings, onToggle }: AccessibilitySectionProps) => {
  return (
    <SectionContainer title="Accessibility" height="267px">
      <div className="mb-6">
        <p className="text-gray-500">
          Choose the right accessibility profile for you
        </p>
      </div>

      {/* Visually impaired mode */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">
          Visually impaired mode
        </h3>
        <ToggleSwitch 
          isEnabled={settings.visuallyImpairedMode} 
          onToggle={() => onToggle("visuallyImpairedMode")} 
        />
      </div>

      {/* Cognitive Disability Mode */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">
          Cognitive Disability Mode
        </h3>
        <ToggleSwitch 
          isEnabled={settings.cognitiveDisabilityMode} 
          onToggle={() => onToggle("cognitiveDisabilityMode")} 
        />
      </div>

      {/* Dark Theme Mode */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-800">Dark Theme Mode</h3>
        <ToggleSwitch 
          isEnabled={settings.darkThemeMode} 
          onToggle={() => onToggle("darkThemeMode")} 
        />
      </div>
    </SectionContainer>
  );
};

export default AccessibilitySection;
