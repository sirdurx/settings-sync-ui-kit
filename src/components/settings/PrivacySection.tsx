
import React from 'react';
import SectionContainer from './SectionContainer';
import SettingItem from './SettingItem';

const PrivacySection = () => {
  return (
    <SectionContainer title="Privacy" height="267px">
      <SettingItem
        title="Data Sharing Preferences"
        description="Control how your data is shared with third parties"
        onEdit={() => console.log("Data sharing preferences clicked")}
        hasBorder={false}
      />
    </SectionContainer>
  );
};

export default PrivacySection;
