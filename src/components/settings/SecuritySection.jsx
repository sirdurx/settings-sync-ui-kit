
import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import SettingItem from './SettingItem';
import TwoFactorAuthModal from './TwoFactorAuthModal';
import ChangePasswordModal from './ChangePasswordModal';
import TransactionPinModal from './TransactionPinModal';
import { FiEdit2 } from 'react-icons/fi';

const SecuritySection = ({ 
  settings,
  showTwoFactorModal,
  onToggle2FA,
  verificationMethod,
  setVerificationMethod,
  qrCodeKey,
  setQrCodeKey,
  oneTimeCode,
  setOneTimeCode,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword
}) => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);
  const [showResetPinModal, setShowResetPinModal] = useState(false);

  const handleChangePasswordClick = () => {
    console.log("Change password clicked");
    setShowChangePasswordModal(true);
  };

  const handleTransactionPinClick = () => {
    console.log("Set transaction pin clicked");
    setShowTransactionPinModal(true);
  };

  const handleResetPinClick = () => {
    console.log("Forgot transaction pin clicked");
    setShowResetPinModal(true);
  };

  return (
    <SectionContainer title="Security">
      <SettingItem
        title="Two-Factor Authentication (2FA)"
        description="Setup with options for Authenticator App or SMS verification"
        isToggle
        isEnabled={settings.twoFactor}
        onToggle={onToggle2FA}
      />
      
      <div className="flex justify-between items-center mb-4 py-4 border-b border-gray-200">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">Change Password</h3>
          <p className="text-gray-500 text-sm">Security settings</p>
        </div>
        <button 
          className="text-blue-600 flex items-center"
          onClick={handleChangePasswordClick}
        >
          <FiEdit2 className="mr-1" /> Edit
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-4 py-4 border-b border-gray-200">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">Set Transaction Pin</h3>
          <p className="text-gray-500 text-sm">Necessary for funds withdrawal</p>
        </div>
        <button 
          className="text-blue-600 flex items-center"
          onClick={handleTransactionPinClick}
        >
          <FiEdit2 className="mr-1" /> Edit
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-4 py-4">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">Forgot Transaction Pin?</h3>
          <p className="text-gray-500 text-sm">Reset PIN here</p>
        </div>
        <button 
          className="text-blue-600 flex items-center"
          onClick={handleResetPinClick}
        >
          <FiEdit2 className="mr-1" /> Edit
        </button>
      </div>
      
      {/* Modals */}
      {showTwoFactorModal && (
        <TwoFactorAuthModal
          verificationMethod={verificationMethod}
          handleSelectMethod={setVerificationMethod}
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
      
      <ChangePasswordModal 
        isOpen={showChangePasswordModal} 
        onClose={() => setShowChangePasswordModal(false)} 
      />
      
      <TransactionPinModal 
        isOpen={showTransactionPinModal || showResetPinModal} 
        onClose={() => {
          setShowTransactionPinModal(false);
          setShowResetPinModal(false);
        }} 
        isReset={showResetPinModal}
      />
    </SectionContainer>
  );
};

export default SecuritySection;
