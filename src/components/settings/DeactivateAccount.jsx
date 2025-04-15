
import React, { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from '../ui/button';
import { X } from 'lucide-react';

const DeactivateAccount = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [accountDeactivated, setAccountDeactivated] = useState(false);
  
  const handleDeactivate = () => {
    setShowConfirmation(false);
    setAccountDeactivated(true);
    // In a real application, you would call an API to deactivate the account here
    
    // Auto-close success message after 5 seconds
    setTimeout(() => {
      setAccountDeactivated(false);
    }, 5000);
  };
  
  return (
    <div className="bg-white rounded-md shadow-sm p-8 mb-6">
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className="text-red-500 font-medium hover:text-red-600 hover:bg-red-50 px-0 justify-start">
            Deactivate Account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="p-6 max-w-md">
          <div className="flex justify-between items-start">
            <p className="text-red-500 font-medium text-lg">Are you sure you want to deactivate this account? You can reactivate again by signing up</p>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex gap-4 mt-8">
            <Button 
              variant="destructive" 
              className="w-36 rounded px-4 py-2 bg-red-600 hover:bg-red-700 text-white"
              onClick={handleDeactivate}
            >
              Yes, Deactivate
            </Button>
            <Button 
              variant="outline" 
              className="w-36 rounded px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 border-0"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Success Message */}
      <AlertDialog open={accountDeactivated} onOpenChange={setAccountDeactivated}>
        <AlertDialogContent className="p-6 max-w-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h2 className="text-[#1F4E79] text-2xl font-medium">Your account is successfully Deactivated</h2>
              <div className="rounded-full bg-green-500 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <button 
              onClick={() => setAccountDeactivated(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeactivateAccount;
