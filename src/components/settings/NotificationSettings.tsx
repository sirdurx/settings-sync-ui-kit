
import React from 'react';
import SectionContainer from './SectionContainer';
import SettingItem from './SettingItem';

interface NotificationSettingsProps {
  settings: {
    emailNotification: boolean;
    smsNotification: boolean;
    pushNotification: boolean;
    weeklySummary: boolean;
  };
  onToggle: (setting: string) => void;
}

const NotificationSettings = ({ settings, onToggle }: NotificationSettingsProps) => {
  return (
    <SectionContainer title="Notification Settings">
      <SettingItem
        title="Email Notification"
        description="Receive updates and reminders via Email"
        isToggle
        isEnabled={settings.emailNotification}
        onToggle={() => onToggle("emailNotification")}
      />
      
      <SettingItem
        title="SMS Notification"
        description="Receive updates and reminders via text messages"
        isToggle
        isEnabled={settings.smsNotification}
        onToggle={() => onToggle("smsNotification")}
      />
      
      <SettingItem
        title="Push Notification"
        description="Get real-time notifications on the app."
        isToggle
        isEnabled={settings.pushNotification}
        onToggle={() => onToggle("pushNotification")}
      />
      
      <SettingItem
        title="Weekly Summary Emails"
        description="Get a weekly activity summary."
        isToggle
        isEnabled={settings.weeklySummary}
        onToggle={() => onToggle("weeklySummary")}
        hasBorder={false}
      />
    </SectionContainer>
  );
};

export default NotificationSettings;
