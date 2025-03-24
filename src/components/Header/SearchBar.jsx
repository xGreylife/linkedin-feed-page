import React, { useEffect } from "react";
import Icon from "../atoms/Icon";
import UserList from "./UserList";
import { connect } from "react-redux";
import { setSearchQuery, toggleUserList } from "../../redux/actions";

function SearchBar( {searchQuery, showUserList, setSearchQuery, toggleUserList} ) {
    function handleBlur(){
        // clicking on IconText in UserList fires onBlur for Input element when Searching post by user name/id. 
        // On onBlur the UserList is lost and handleSearchByUserName is not propogated. 
        setTimeout(() => {
            toggleUserList(false);
        }, 200);
    }

    return ( 
        <div className="search-bar">
            <div className="search-input">
                <Icon iconName='search' size='16px'/>
                <input type="text" placeholder="Search" value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                onFocus={() => toggleUserList(true)}
                onBlur={handleBlur}/> 
            </div>

            {showUserList && (
                <UserList />
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    searchQuery: state.search.searchQuery,
    showUserList: state.user.showUserList,
});

const mapDispatchToProps = {
    setSearchQuery,
    toggleUserList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);