
import React from 'react';
import SectionContainer from './SectionContainer';
import ToggleSwitch from './ToggleSwitch';

const NotificationSettings = ({ settings, onToggle }) => {
  return (
    <SectionContainer title="Notification Settings">
      <div className="space-y-4">
        {/* Email Notification */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">Email Notification</h3>
            <p className="text-gray-500 text-sm">Receive updates and reminders via Email</p>
          </div>
          <ToggleSwitch 
            isEnabled={settings.emailNotification} 
            onToggle={() => onToggle("emailNotification")} 
          />
        </div>
        
        {/* SMS Notification */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">SMS Notification</h3>
            <p className="text-gray-500 text-sm">Receive updates and reminders via text messages</p>
          </div>
          <ToggleSwitch 
            isEnabled={settings.smsNotification} 
            onToggle={() => onToggle("smsNotification")} 
          />
        </div>
        
        {/* Push Notification */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">Push Notification</h3>
            <p className="text-gray-500 text-sm">Get real-time notifications on the app.</p>
          </div>
          <ToggleSwitch 
            isEnabled={settings.pushNotification} 
            onToggle={() => onToggle("pushNotification")} 
          />
        </div>
        
        {/* Weekly Summary Emails */}
        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">Weekly Summary Emails</h3>
            <p className="text-gray-500 text-sm">Get a weekly performance summary.</p>
          </div>
          <ToggleSwitch 
            isEnabled={settings.weeklySummary} 
            onToggle={() => onToggle("weeklySummary")} 
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default NotificationSettings;
