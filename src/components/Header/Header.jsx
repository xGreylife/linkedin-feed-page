import React from "react";
import './Header.css'
import Icon from "../atoms/Icon";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import { navItemData } from "../../data/navItemData";
import { Link } from "react-router-dom";

export default function Header({searchQuery, showUserList, userList, onSearchQueryChange, onShowUserListChange, onSearchPostsByUserId}) {
    return ( 
        <header className="header">
            <div className="left-header">
                <Link to="/">
                    <Icon iconName='linkedin' size='32px' color='#0B66C2'/>
                </Link>
                <SearchBar searchQuery={searchQuery}
                    showUserList = {showUserList}
                    userList = {userList}
                    onSearchQueryChange = {onSearchQueryChange}
                    onShowUserListChange = {onShowUserListChange}
                    onSearchPostsByUserId = {onSearchPostsByUserId}
                />
            </div>

            <nav className="navbar">
                <ul>
                    { navItemData.map((navItem) => <NavItem 
                    icon={navItem.icon}
                    label={navItem.label}
                    key={navItem.key}
                    to={navItem.to}/>) }
                    <ProfileMenu/>
                </ul>
            </nav>
        </header>
    );
}