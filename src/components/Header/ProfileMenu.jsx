import React, { useState, useContext } from 'react'
import Icon from '../atoms/Icon';
import UserAvatar from '../atoms/UserAvatar';
import UserInfo from '../molecules/UserInfo';
import { LoggedInUserContext } from '../../App'
import { NavLink } from 'react-router-dom';

export default function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const loggedInUser = useContext(LoggedInUserContext);

    function handleClick(){
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='profile-menu'>
            <button className='profile-button' onClick={handleClick}>
            <UserAvatar user={loggedInUser} className='avatar-small'/>
                <div className='avatar-text'>
                    <span>Me</span>
                    <Icon iconName='caret-down-fill' size='12px'/>
                </div>
            </button>

            {isMenuOpen && (
                <div className='dropdown-menu'>
                    <div className='user-profile-wrapper'>
                        <div className='user-profile'>
                            <UserAvatar user={loggedInUser} className='avatar-medium'/>
                            <UserInfo user={loggedInUser} className='user-info profile-menu-user-info'/>
                        </div>
                        <NavLink to='/myprofile' onClick={handleClick}><button>View Profile</button></NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}
