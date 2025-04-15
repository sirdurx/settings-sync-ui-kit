
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import QRCode from 'react-qr-code';

interface TwoFactorAuthModalProps {
  verificationMethod: string | null;
  handleSelectMethod: (method: string) => void;
  handleBack: () => void;
  qrCodeKey: string;
  oneTimeCode: string;
  setOneTimeCode: (code: string) => void;
  phoneNumber: string;
  setPhoneNumber: (number: string | undefined) => void;
  password: string;
  setPassword: (password: string) => void;
}

const TwoFactorAuthModal = ({
  verificationMethod,
  handleSelectMethod,
  handleBack,
  qrCodeKey,
  oneTimeCode,
  setOneTimeCode,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword
}: TwoFactorAuthModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-md w-1/2 p-6"
        style={{ maxWidth: "600px" }}
      >
        {/* Back Button */}
        {verificationMethod && (
          <div className="mb-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L10 8.586l-4.293-4.293a1 1 0 00-1.414 1.414L8.586 10 4.293 14.707a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
          </div>
        )}

        {/* Main Content */}
        {verificationMethod === null ? (
          // Initial Step: Choose Verification Method
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Two-step Verification
            </h3>
            <p className="text-gray-500 mb-4">
              Secure your Grantsconsult account with two-step
              verification
            </p>
            <label className="block mb-2">
              <span className="text-gray-700">
                Choose your verification method
              </span>
            </label>
            <select
              value={verificationMethod}
              onChange={(e) => handleSelectMethod(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a method</option>
              <option value="authenticator">Authenticator App</option>
              <option value="sms">SMS Verification</option>
            </select>
            <button
              type="button"
              className="w-full bg-indigo-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={!verificationMethod}
            >
              Continue
            </button>
            <p className="text-sm mt-4 text-gray-500">
              Note: You will be signed out on all devices and remove all
              your remembered devices once this feature is turned on.
            </p>
          </div>
        ) : verificationMethod === "authenticator" ? (
          // Authenticator App Flow
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Add authenticator app
            </h3>
            <div className="mb-4">
              <h4 className="text-gray-700 mb-2">
                Step 1: Scan this QR code
              </h4>
              <p className="text-gray-500 mb-2">
                Scan the following QR code with your authenticator app,
                such as Google Authenticator, Duo Mobile, Authy, etc.
              </p>
              <div className="flex justify-center mb-2">
                <QRCode
                  value={qrCodeKey}
                  size={200}
                  level={"H"}
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 focus:outline-none"
                onClick={() => {
                  // Simulate not being able to scan QR code
                  alert("Simulating QR code scanning...");
                }}
              >
                Can't scan the QR code?
              </button>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-700 mb-2">
                Step 2: Enter the one-time code
              </h4>
              <p className="text-gray-500 mb-2">
                Enter the 6-digit verification code generated by the
                authenticator app.
              </p>
              <input
                type="text"
                placeholder="Enter one-time code"
                value={oneTimeCode}
                onChange={(e) => setOneTimeCode(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="button"
              className="w-full bg-indigo-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Verify
            </button>
          </div>
        ) : (
          // SMS Verification Flow
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Two-step Verification
            </h3>
            <p className="text-gray-500 mb-4">
              Add a phone number for SMS verification
            </p>
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Enter your phone number"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="password"
              placeholder="Enter your GrantsConsult Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              className="w-full bg-indigo-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoFactorAuthModal;
