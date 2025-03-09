import React from "react";
import { useState } from "react";
import Icon from "../atoms/Icon";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    function handleChange(e){
        setSearchQuery(e.target.value);
    }

    return ( 
        <div className="search-bar">
            <div className="search-input">
                <Icon iconName='search' size='16px'/>
                <input type="text" placeholder="Search" value={searchQuery} onChange={handleChange}/>
            </div>
        </div>
     );
}