
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from '../ui/button';

const DeactivateAccount = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  return (
    <div className="bg-white rounded-md shadow-sm p-8">
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-red-500 font-medium hover:text-red-600 hover:bg-red-50">
            Deactivate Account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold text-gray-900">Deactivate Account</DialogTitle>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-4">
                Are you sure you want to deactivate your account? This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowConfirmation(false)}
                  className="w-1/3"
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-1/3"
                  onClick={() => {
                    // Handle deactivation logic here
                    setShowConfirmation(false);
                  }}
                >
                  Deactivate
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeactivateAccount;
