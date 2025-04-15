
import React from 'react';
import SectionContainer from './SectionContainer';
import SettingItem from './SettingItem';
import TwoFactorAuthModal from './TwoFactorAuthModal';

const SecuritySection = ({ 
  settings,
  showTwoFactorModal,
  onToggle2FA,
  verificationMethod,
  setVerificationMethod,
  handleBack,
  qrCodeKey,
  setQrCodeKey,
  oneTimeCode,
  setOneTimeCode,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword
}) => {
  return (
    <SectionContainer title="Security" height="475px">
      <SettingItem
        title="Two-Factor Authentication (2FA)"
        description="Setup with options for Authenticator App or SMS verification"
        isToggle
        isEnabled={settings.twoFactor}
        onToggle={onToggle2FA}
      />
      
      <SettingItem
        title="Change Password"
        description="Security settings"
        onEdit={() => console.log("Change password clicked")}
      />
      
      <SettingItem
        title="Set Transaction Pin"
        description="Necessary for funds withdrawal"
        onEdit={() => console.log("Set transaction pin clicked")}
      />
      
      <SettingItem
        title="Forgot Transaction Pin?"
        description="Reset PIN here"
        onEdit={() => console.log("Forgot transaction pin clicked")}
        hasBorder={false}
      />
      
      {showTwoFactorModal && (
        <TwoFactorAuthModal
          verificationMethod={verificationMethod}
          handleSelectMethod={setVerificationMethod}
          handleBack={handleBack}
          qrCodeKey={qrCodeKey}
          oneTimeCode={oneTimeCode}
          setOneTimeCode={setOneTimeCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          password={password}
          setPassword={setPassword}
          onClose={() => {
            // Reset 2FA modal state when closing
            setVerificationMethod(null);
            if (!settings.twoFactor) {
              onToggle2FA(); // Toggle back if 2FA wasn't completed
            }
          }}
        />
      )}
    </SectionContainer>
  );
};

export default SecuritySection;
