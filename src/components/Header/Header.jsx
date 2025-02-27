import React from "react";
import Icon from "../atoms/Icon";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";

export default function Header( {onTabChange} ) {
    return ( 
        <header className="header">
            <div className="header-left">
                <a href="">
                    <Icon iconName={'linkedin'} size={'32px'} color={'#0B66C2'}/>
                </a>
                <SearchBar/>
            </div>

            <nav className="navbar">
                <ul>
                    <NavItem iconName={'house-door-fill'} tabName={'Home'} />
                    <NavItem iconName={'people-fill'} tabName={'My Network'} />
                    <NavItem iconName={'briefcase-fill'} tabName={'Jobs'} />
                    <NavItem iconName={'chat-left-dots-fill'} tabName={'Messaging'} />                                                                                                            
                    <NavItem iconName={'bell-fill'} tabName={'Notifications'} />
                    <ProfileMenu/>
                </ul>
            </nav>

        </header>
    );
}