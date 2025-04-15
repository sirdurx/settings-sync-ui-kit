
import React from 'react';
import SectionContainer from './SectionContainer';
import ToggleSwitch from './ToggleSwitch';

interface EmailPreferencesSectionProps {
  settings: {
    generalUpdates: boolean;
    newGrantUpdates: boolean;
    platformAnnouncements: boolean;
  };
  onToggle: (setting: string) => void;
}

const EmailPreferencesSection = ({ settings, onToggle }: EmailPreferencesSectionProps) => {
  return (
    <SectionContainer title="Email Preferences" height="220px">
      {/* General updates */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">General updates</h3>
        <ToggleSwitch 
          isEnabled={settings.generalUpdates} 
          onToggle={() => onToggle("generalUpdates")} 
        />
      </div>

      {/* New grant updates */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800">New grant updates</h3>
        <ToggleSwitch 
          isEnabled={settings.newGrantUpdates} 
          onToggle={() => onToggle("newGrantUpdates")} 
        />
      </div>

      {/* Platform announcements */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-800">
          Platform announcements
        </h3>
        <ToggleSwitch 
          isEnabled={settings.platformAnnouncements} 
          onToggle={() => onToggle("platformAnnouncements")} 
        />
      </div>
    </SectionContainer>
  );
};

export default EmailPreferencesSection;
