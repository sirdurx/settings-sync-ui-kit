
import React, { useState } from "react";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AvailabilitySection from "@/components/settings/AvailabilitySection";
import SecuritySection from "@/components/settings/SecuritySection";
import PrivacySection from "@/components/settings/PrivacySection";
import EmailPreferencesSection from "@/components/settings/EmailPreferencesSection";
import AccessibilitySection from "@/components/settings/AccessibilitySection";
import DeactivateAccount from "@/components/settings/DeactivateAccount";
import SuccessNotification from "@/components/settings/SuccessNotification";

interface SettingsState {
  emailNotification: boolean;
  smsNotification: boolean;
  pushNotification: boolean;
  weeklySummary: boolean;
  twoFactor: boolean;
  generalUpdates: boolean;
  newGrantUpdates: boolean;
  platformAnnouncements: boolean;
  visuallyImpairedMode: boolean;
  cognitiveDisabilityMode: boolean;
  darkThemeMode: boolean;
}

export default function GrantorSetting() {
  // State for toggle switches
  const [settings, setSettings] = useState<SettingsState>({
    emailNotification: true,
    smsNotification: true,
    pushNotification: true,
    weeklySummary: true,
    twoFactor: false,
    generalUpdates: true,
    newGrantUpdates: true,
    platformAnnouncements: true,
    visuallyImpairedMode: false,
    cognitiveDisabilityMode: false,
    darkThemeMode: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Toggle handler with success notification
  const handleToggle = (setting: string) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

  // Function to toggle the modal
  const toggleAvailabilityModal = () => {
    setShowAvailabilityModal(!showAvailabilityModal);
  };

  // State for modal visibility
  const [show2FAModal, setShow2FAModal] = useState(false);

  // State for 2FA setup
  const [verificationMethod, setVerificationMethod] = useState<string | null>(null); // "authenticator" or "sms"
  const [qrCodeKey, setQrCodeKey] = useState(""); // Random 32-character key for Authenticator App
  const [oneTimeCode, setOneTimeCode] = useState(""); // One-time code entered by the user
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number for SMS verification
  const [password, setPassword] = useState(""); // Password for SMS verification

  // Function to toggle 2FA
  const handleToggle2FA = () => {
    const newTwoFactorState = !settings.twoFactor;
    setSettings({ ...settings, twoFactor: newTwoFactorState });
    if (!settings.twoFactor) {
      setShow2FAModal(true); // Show modal only when enabling 2FA
    }
  };

  // Function to generate a random 32-character key
  const generateRandomKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < 32; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setQrCodeKey(key);
  };

  // Handle selection of verification method
  const handleSelectMethod = (method: string) => {
    setVerificationMethod(method);
    if (method === "authenticator") {
      generateRandomKey(); // Generate a random key for Authenticator App
    }
  };

  // Handle back navigation
  const handleBack = () => {
    setVerificationMethod(null); // Reset to initial step
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Breadcrumb */}
      <div className="mx-auto mb-6 text-sm text-gray-500">
        <span className="hover:text-blue-600 cursor-pointer">Profile</span>
        &gt;&gt;
        <span className="hover:text-blue-600 cursor-pointer">Settings</span>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <SuccessNotification 
          message="Changes Saved Successfully" 
          onClose={() => setShowSuccess(false)} 
        />
      )}

      <div className="mx-auto">
        {/* Notification Settings Section */}
        <NotificationSettings 
          settings={settings} 
          onToggle={handleToggle} 
        />

        {/* Availability Section */}
        <AvailabilitySection 
          onToggleModal={toggleAvailabilityModal} 
          showModal={showAvailabilityModal} 
        />

        {/* Security Section */}
        <SecuritySection 
          settings={settings}
          showTwoFactorModal={show2FAModal}
          onToggle2FA={handleToggle2FA}
          verificationMethod={verificationMethod}
          setVerificationMethod={handleSelectMethod}
          handleBack={handleBack}
          qrCodeKey={qrCodeKey}
          setQrCodeKey={setQrCodeKey}
          oneTimeCode={oneTimeCode}
          setOneTimeCode={setOneTimeCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          password={password}
          setPassword={setPassword}
        />

        {/* Privacy Section */}
        <PrivacySection />

        {/* Email Preferences Section */}
        <EmailPreferencesSection 
          settings={settings} 
          onToggle={handleToggle} 
        />

        {/* Accessibility Section */}
        <AccessibilitySection 
          settings={settings} 
          onToggle={handleToggle} 
        />

        {/* Deactivate Account Section */}
        <DeactivateAccount />
      </div>
    </div>
  );
}
