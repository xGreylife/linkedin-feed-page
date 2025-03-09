import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileStats from './ProfileStats';
import TryPremium from './TryPremium';
import IconText from '../molecules/IconText';
import {contentTypes} from '../../data/navItemData';

export default function LeftSidebar() {
  return (
    <div className='left-sidebar'>
        <ProfileCard />
        <ProfileStats />
        <TryPremium/>
        <div className='page-component'>
            {contentTypes.map((item) => 
            <IconText key={item.key}
            iconName={item.iconName}
            size='14px' color='#191919' 
            textContent={item.textContent}>
            </IconText>)}
        </div>
    </div>
  );
}
