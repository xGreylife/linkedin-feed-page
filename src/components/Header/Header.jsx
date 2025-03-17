import React from "react";
import Icon from "../atoms/Icon";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import { navItemData } from "../../data/navItemData";

export default function Header() {
    return ( 
        <header className="header">
            <div className="left-header">
                <a href="">
                    <Icon iconName='linkedin' size='32px' color='#0B66C2'/>
                </a>
                <SearchBar/>
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