import React, { useEffect } from "react";
import Icon from "../atoms/Icon";
import UserList from "./UserList";

export default function SearchBar( {searchQuery, showUserList, userList, onSearchQueryChange, onShowUserListChange, onSearchPostsByUserId} ) {
    function handleBlur(){
        // clicking on IconText in UserList fires onBlur for Input element when Searching post by user name/id. 
        // On onBlur the UserList is lost and handleSearchByUserName is not propogated. 
        setTimeout(() => {
            onShowUserListChange(false);
        }, 200);
    }

    return ( 
        <div className="search-bar">
            <div className="search-input">
                <Icon iconName='search' size='16px'/>
                <input type="text" placeholder="Search" value={searchQuery} 
                onChange={(e) => onSearchQueryChange(e.target.value)} 
                onFocus={() => onShowUserListChange(true)}
                onBlur={handleBlur}/> 
            </div>

            {showUserList && (
                <UserList userList={userList}
                onSearchPostsByUserId={onSearchPostsByUserId}/>
            )}
        </div>
     );
}