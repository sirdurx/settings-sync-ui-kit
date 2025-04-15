
import React from 'react';
import SectionContainer from './SectionContainer';
import ToggleSwitch from './ToggleSwitch';

const EmailPreferencesSection = ({ settings, onToggle }) => {
  return (
    <SectionContainer title="Email Preferences">
      <div className="space-y-4">
        {/* General updates */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">General updates</h3>
          <ToggleSwitch 
            isEnabled={settings.generalUpdates} 
            onToggle={() => onToggle("generalUpdates")} 
          />
        </div>

        {/* New grant updates */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">New grant assignments</h3>
          <ToggleSwitch 
            isEnabled={settings.newGrantUpdates} 
            onToggle={() => onToggle("newGrantUpdates")} 
          />
        </div>

        {/* Platform announcements */}
        <div className="flex justify-between items-center py-2">
          <h3 className="font-medium text-gray-800">Platform announcements</h3>
          <ToggleSwitch 
            isEnabled={settings.platformAnnouncements} 
            onToggle={() => onToggle("platformAnnouncements")} 
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default EmailPreferencesSection;
