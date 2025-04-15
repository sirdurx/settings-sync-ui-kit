
import React, { useState } from 'react';
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { X } from 'lucide-react';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [requireAllDevices, setRequireAllDevices] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Changing password...');
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6 max-w-lg">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-[#1F4E79] text-2xl font-medium">Change Password</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Type Your Current Password<span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Password must be at least 8 characters"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Type Your New Password<span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password must be at least 8 characters"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Your New Password<span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="requireSignIn" 
                checked={requireAllDevices}
                onCheckedChange={setRequireAllDevices}
                className="h-5 w-5 border-blue-500 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="requireSignIn" className="text-gray-700">
                Require all devices to sign in with new password
              </label>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                type="submit"
                className="bg-[#1F4E79] hover:bg-[#1a3c5e] text-white py-2 px-10 rounded"
              >
                SAVE
              </Button>
              
              <button 
                type="button"
                className="text-blue-500 hover:text-blue-700"
                onClick={() => {/* Handle forgot password */}}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
