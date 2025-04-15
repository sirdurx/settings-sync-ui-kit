
import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PrivacySection = () => {
  const [profileVisibility, setProfileVisibility] = useState("public");

  return (
    <SectionContainer title="Privacy Settings">
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-4">Manage Your Profile Visibility</h3>
        
        <RadioGroup 
          value={profileVisibility} 
          onValueChange={setProfileVisibility}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="public" className="h-3.5 w-3.5" />
            <Label htmlFor="public" className="text-sm font-normal">Public</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="registered" id="registered" className="h-3.5 w-3.5" />
            <Label htmlFor="registered" className="text-sm font-normal">Visible only to registered users</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" className="h-3.5 w-3.5" />
            <Label htmlFor="private" className="text-sm font-normal">Private</Label>
          </div>
        </RadioGroup>
      </div>
    </SectionContainer>
  );
};

export default PrivacySection;
