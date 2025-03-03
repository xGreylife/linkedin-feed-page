import React from 'react';
import { loggedInUser } from '../../data/userData';
import UserAvatar from '../atoms/UserAvatar';
import UserInfo from '../molecules/UserInfo';

export default function ProfileCard() {
  return (
    <div className='profile-card'>
        <img className='profile-banner' src={loggedInUser.banner} alt="Profile Banner" />
        <div className='profile-info-wrapper'>
            <UserAvatar user={loggedInUser} className='avatar-medium profile-banner-photo'/>
            <UserInfo className={'user-info'} user={loggedInUser} />
            <p className='light-text'>{loggedInUser.location}</p>
            <div className='profile-user-organization'>
                <img src={loggedInUser.organizationLogo} alt="Organization Logo"/>
                <p>{loggedInUser.organization}</p>
            </div>
        </div>
    </div>
  );
}
