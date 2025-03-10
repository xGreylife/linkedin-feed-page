import React, { useEffect } from "react";
import axios from "axios";
import Icon from "../atoms/Icon";
import UserList from "./UserList";
import {getUsersURL} from '../../constants/api';

export default function SearchBar( {searchQuery, showUserList, onSearchQueryChange, onShowUserListChange, onSearchPostsByUserId} ) {
    let userList;
    useEffect(() => {
        axios.get(getUsersURL)
        .then((reponse) => {
            userList = reponse.data.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        })
        .catch((err) => {
            console.log('Failed to get all users')
        })
    }, []);

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