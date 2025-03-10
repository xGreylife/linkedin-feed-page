import React, {useContext} from 'react';
import UserAvatar from '../atoms/UserAvatar';
import UserInfo from '../molecules/UserInfo';
import { LoggedInUserContext } from '../../App'

export default function ProfileCard() {
    const loggedInUser = useContext(LoggedInUserContext);
    
    return (
        <div className='profile-card'>
            <img className='profile-banner' src={loggedInUser.banner} alt="Profile Banner" />
            <div className='profile-info-wrapper'>
                <UserAvatar user={loggedInUser} className='avatar-medium profile-banner-photo'/>
                <UserInfo user={loggedInUser} className='user-info' />
                <p className='light-text'>{loggedInUser.location}</p>
                <div className='profile-user-organization'>
                    <img src={loggedInUser.organizationLogo} alt="Organization Logo"/>
                    <p>{loggedInUser.organization}</p>
                </div>
            </div>
        </div>
    );
}
