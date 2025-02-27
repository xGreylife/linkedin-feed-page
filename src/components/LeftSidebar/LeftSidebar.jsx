import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileStats from './ProfileStats';
import TryPremium from './TryPremium';
import IconText from '../molecules/IconText';

export default function LeftSidebar() {
  return (
    <div className='left-sidebar'>
        <ProfileCard />
        <ProfileStats />
        <TryPremium/>
        <div className='page-component'>
            <IconText iconName='bookmark-fill' size='14px' color='#191919' textContent='Saved items'></IconText>
            <IconText iconName='people-fill' size='14px' color='#191919' textContent='Groups'></IconText>
            <IconText iconName='newspaper' size='14px' color='#191919' textContent='Newsletters'></IconText>
            <IconText iconName='calendar-event' size='14px' color='#191919' textContent='Events'></IconText>
        </div>
    </div>
  );
}
