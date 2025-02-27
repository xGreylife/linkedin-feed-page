import React from "react";
import { useState } from "react";
import Icon from "../atoms/Icon";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    function handleOnSubmit(e){
        e.preventDefault();
        console.log('Search for query : ', searchQuery);
        // imeplent search and filter here
    }

    function handleOnChange(e){
        setSearchQuery(e.target.value);
    }

    return ( 
        <div className="search-bar">
            <form onSubmit={handleOnSubmit}>
                <div className="search-input">
                    <Icon iconName='search' size='16px'/>
                    <input type="text" placeholder="Search" value={searchQuery} onChange={handleOnChange}/>
                </div>
            </form>
        </div>
     );
}