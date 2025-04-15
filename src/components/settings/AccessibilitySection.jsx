
import React from 'react';
import SectionContainer from './SectionContainer';
import ToggleSwitch from './ToggleSwitch';

const AccessibilitySection = ({ settings, onToggle }) => {
  return (
    <SectionContainer title="Accessibility">
      <div className="mb-6">
        <p className="text-gray-500">Choose the right accessibility profile for you</p>
      </div>

      <div className="space-y-4">
        {/* Visually impaired mode */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Visually impaired mode</h3>
          <ToggleSwitch 
            isEnabled={settings.visuallyImpairedMode} 
            onToggle={() => onToggle("visuallyImpairedMode")} 
          />
        </div>

        {/* Cognitive Disability Mode */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Cognitive Disability Mode</h3>
          <ToggleSwitch 
            isEnabled={settings.cognitiveDisabilityMode} 
            onToggle={() => onToggle("cognitiveDisabilityMode")} 
          />
        </div>

        {/* Dark Theme Mode */}
        <div className="flex justify-between items-center py-2">
          <h3 className="font-medium text-gray-800">Dark Theme Mode</h3>
          <ToggleSwitch 
            isEnabled={settings.darkThemeMode} 
            onToggle={() => onToggle("darkThemeMode")} 
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AccessibilitySection;
