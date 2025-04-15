
import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import QRCode from 'react-qr-code';
import { ArrowLeft, X } from 'lucide-react';
import 'react-phone-number-input/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TwoFactorAuthModal = ({
  verificationMethod,
  handleSelectMethod,
  qrCodeKey,
  oneTimeCode,
  setOneTimeCode,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState("select");
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [showQRCode, setShowQRCode] = useState(false);
  const inputRefs = useRef([]);

  const handleContinue = () => {
    if (verificationMethod === "authenticator") {
      setCurrentStep("authenticatorSetup");
      setShowQRCode(false); // Start with key view
    } else if (verificationMethod === "sms") {
      setCurrentStep("smsSetup");
    }
  };

  const handleBack = () => {
    setCurrentStep("select");
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(qrCodeKey);
  };

  const handleToggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const handleCodeChange = (index, value) => {
    if (value === '' || /^\d$/.test(value)) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      
      // Auto-focus next input
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }
      
      // Update the combined code
      setOneTimeCode(newVerificationCode.join(''));
    }
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const renderMethodSelection = () => (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-semibold text-[#1F4E79]">Two-step Verification</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="text-gray-600 mb-6 text-sm">
        Secure your GrantsConsult account with two-step verification
      </p>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Choose your verification method
        </label>
        <select
          value={verificationMethod || ""}
          onChange={(e) => handleSelectMethod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
        >
          <option value="">Select a method</option>
          <option value="authenticator">Authenticator App</option>
          <option value="sms">SMS Verification</option>
        </select>
      </div>
      
      <Button
        onClick={handleContinue}
        disabled={!verificationMethod}
        className="w-full bg-[#1F4E79] hover:bg-[#1F4E79]/90 text-white mt-4"
      >
        CONTINUE
      </Button>
      
      <p className="text-xs text-gray-500 mt-4">
        Note: You will be signed out on all devices and remove all your remembered devices once this feature is turned on.
      </p>
    </div>
  );

  const renderAuthenticatorSetup = () => (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <button 
            onClick={handleBack}
            className="text-[#1F4E79] hover:text-[#1F4E79]/80 mr-2 focus:outline-none"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-[#1F4E79]">Back</span>
        </div>
        
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <h3 className="text-xl font-semibold text-[#1F4E79] mt-4 mb-6">Add authenticator app</h3>
      
      {!showQRCode ? (
        <>
          <div className="mb-6">
            <h4 className="text-base font-medium text-gray-700 mb-2">Step 1: Copy and paste the key</h4>
            <p className="text-gray-600 text-sm mb-4">
              Copy and paste the following key into your authenticator app, such as Google Authenticator, Duo Mobile, Authy, etc.
            </p>
            
            <div className="bg-gray-100 p-4 text-center rounded-md mb-3 break-all">
              {qrCodeKey}
            </div>
            
            <Button 
              onClick={handleCopyKey}
              variant="outline" 
              className="w-full border-[#1F4E79] text-[#1F4E79] hover:bg-[#1F4E79]/10"
            >
              Copy
            </Button>
            
            <button 
              onClick={handleToggleQRCode}
              className="text-blue-500 hover:text-blue-700 text-sm mt-4 text-center w-full"
            >
              Want to scan QR code?
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-6">
            <h4 className="text-base font-medium text-gray-700 mb-2">Step 1: Scan this QR code</h4>
            <p className="text-gray-600 text-sm mb-4">
              Scan the following QR code with your authenticator app, such as Google Authenticator, Duo Mobile, Authy, etc.
            </p>
            
            <div className="flex justify-center mb-4">
              <QRCode
                value={qrCodeKey}
                size={200}
                level={"H"}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            
            <button 
              onClick={handleToggleQRCode}
              className="text-blue-500 hover:text-blue-700 text-sm text-center w-full"
            >
              Can't scan the QR code?
            </button>
          </div>
        </>
      )}
      
      <div className="mb-4">
        <h4 className="text-base font-medium text-gray-700 mb-2">Step 2: Enter the one-time code</h4>
        <p className="text-gray-600 text-sm mb-4">
          Enter the 6-digit verification code generated by the authenticator app.
        </p>
        
        <div className="flex justify-between gap-2 mb-4">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleInputKeyDown(index, e)}
            />
          ))}
        </div>
      </div>
      
      <Button
        onClick={() => {/* Handle verification */}}
        disabled={verificationCode.join('').length !== 6}
        className="w-full bg-[#1F4E79] hover:bg-[#1F4E79]/90 text-white"
      >
        Verify
      </Button>
    </div>
  );

  const renderSMSSetup = () => (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <button 
            onClick={handleBack}
            className="text-[#1F4E79] hover:text-[#1F4E79]/80 mr-2 focus:outline-none"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-[#1F4E79]">Back</span>
        </div>
        
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <h3 className="text-xl font-semibold text-[#1F4E79] mt-4 mb-3">Two-step Verification</h3>
      
      <p className="text-gray-600 mb-4">
        Add a phone number for SMS verification
      </p>
      
      <p className="text-sm text-blue-600 mb-2">
        A verification code will be sent to this number.
      </p>
      
      <div className="mb-4">
        <PhoneInput
          international
          defaultCountry="US"
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          countrySelectComponent={CountrySelect}
        />
        
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter your GrantsConsult Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2"
        />
      </div>
      
      <p className="text-xs text-gray-500 mb-4">
        Your phone number helps us keep your account secure by adding an additional layer of verification.
      </p>
      
      <Button
        onClick={() => {/* Handle send code */}}
        disabled={!phoneNumber || !password}
        className="bg-[#1F4E79] hover:bg-[#1F4E79]/90 text-white px-6"
      >
        Send Code
      </Button>
    </div>
  );

  // Custom country select that shows only the country code
  const CountrySelect = ({ value, onChange, options }) => {
    return (
      <select 
        value={value} 
        onChange={(event) => onChange(event.target.value)}
        className="border-0 bg-transparent text-gray-700 pr-1 focus:ring-0 focus:outline-none"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {value.toUpperCase()}
          </option>
        ))}
      </select>
    );
  };

  // Render the appropriate step
  const renderContent = () => {
    switch (currentStep) {
      case "select":
        return renderMethodSelection();
      case "authenticatorSetup":
        return renderAuthenticatorSetup();
      case "smsSetup":
        return renderSMSSetup();
      default:
        return renderMethodSelection();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default TwoFactorAuthModal;
