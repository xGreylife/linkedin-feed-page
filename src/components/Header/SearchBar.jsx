import React, { useEffect } from "react";
import { useState } from "react";
import Icon from "../atoms/Icon";
import UserList from "./UserList";
import { users } from "../../data/userData";

export default function SearchBar( {searchQuery, showUserList, onSearchQueryChange, onShowUserListChange, onSearchPostsByUserId} ) {
    const userList = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

    function handleOnSubmit(e){
        e.preventDefault();
        console.log('Search for query : ', searchQuery);
        // implement search and filter here
    }

    function handleBlur(){
        // clicking on IconText in UserList fires onBlur for Input element when Searching post by user name/id. 
        // On onBlur the UserList is lost and handleSearchByUserName is not propogated. 
        setTimeout(() => {
            onShowUserListChange(false);
        }, 200);
    }

    return ( 
        <div className="search-bar">
            <form onSubmit={handleOnSubmit}>
                <div className="search-input">
                    <Icon iconName='search' size='16px'/>
                    <input type="text" placeholder="Search" value={searchQuery} 
                    onChange={(e) => onSearchQueryChange(e.target.value)} 
                    onFocus={() => onShowUserListChange(true)}
                    onBlur={handleBlur}/> 
                </div>
            </form>

            {showUserList && (
                <UserList userList={userList}
                onSearchPostsByUserId={onSearchPostsByUserId}/>
            )}
        </div>
     );
}