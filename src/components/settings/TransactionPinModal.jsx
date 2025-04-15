
import React, { useState } from 'react';
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

const TransactionPinModal = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState(1); // 1 = set pin, 2 = confirm pin
  
  const handleContinue = () => {
    if (pin.length === 4) {
      setStep(2);
    }
  };
  
  const handleConfirm = () => {
    if (confirmPin.length === 6) {
      console.log('PIN set successfully');
      onClose();
      // Reset state for next time
      setPin('');
      setConfirmPin('');
      setStep(1);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={() => {
      onClose();
      // Reset state when modal is closed
      setPin('');
      setConfirmPin('');
      setStep(1);
    }}>
      <DialogContent className="p-6 max-w-md">
        {step === 1 ? (
          <>
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-[#1F4E79] text-xl font-medium">Set Transaction PIN</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Please enter the four digit pin that will be used for all your financial transactions
              </p>
              
              <InputOTP 
                maxLength={4} 
                value={pin} 
                onChange={setPin}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2 justify-center">
                    {slots.map((slot, index) => (
                      <InputOTPSlot 
                        key={index} 
                        {...slot} 
                        index={index}
                        className="w-14 h-14 text-xl border border-gray-300 rounded-md"
                      />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={handleContinue}
                disabled={pin.length !== 4}
                className="bg-[#1F4E79] hover:bg-[#1a3c5e] text-white font-medium py-2 px-8 rounded w-32"
              >
                CONTINUE
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-[#1F4E79] text-xl font-medium">Confirm Transaction PIN</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Please enter the six digit pin that will be used for all your financial transactions
              </p>
              
              <InputOTP 
                maxLength={6} 
                value={confirmPin} 
                onChange={setConfirmPin}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2 justify-center">
                    {slots.map((slot, index) => (
                      <InputOTPSlot 
                        key={index} 
                        {...slot} 
                        index={index}
                        className="w-14 h-14 text-xl border border-gray-300 rounded-md"
                      />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={handleConfirm}
                disabled={confirmPin.length !== 6}
                className="bg-[#1F4E79] hover:bg-[#1a3c5e] text-white font-medium py-2 px-8 rounded w-32"
              >
                CONFIRM
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TransactionPinModal;
