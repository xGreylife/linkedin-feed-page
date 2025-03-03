import React from 'react'
import { useState } from 'react'
import { loggedInUser } from '../../data/userData'
import Icon from '../atoms/Icon';
import UserAvatar from '../atoms/UserAvatar';
import UserInfo from '../molecules/UserInfo';

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleOnClick(){
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='profile-menu'>
            <button className='profile-button' onClick={handleOnClick}>
            <UserAvatar user={loggedInUser} className='avatar-small'/>
                <div className='avatar-text'>
                    <span>Me</span>
                    <Icon iconName={'caret-down-fill'} size={'12px'}/>
                </div>
            </button>

            {isMenuOpen && (
                <div className='dropdown-menu'>
                    <div className='user-profile-wrapper'>
                        <div className='user-profile'>
                            <UserAvatar user={loggedInUser} className='avatar-medium'/>
                            <UserInfo className={'user-info'} user={loggedInUser} />
                        </div>
                        <button>View Profile</button>
                    </div>
                </div>
            )}
        </div>
    )
}
