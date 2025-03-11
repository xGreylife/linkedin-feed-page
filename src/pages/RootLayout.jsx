import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios';
import Header from '../components/Header/Header'
import { getPostsURL, getUsersURL } from '../constants/api';
import { useDebounce } from '../hooks/useDebounce';

export default function RootLayout() {
    // uplifted states from Header
    const [searchQuery, setSearchQuery] = useState('');
    const [userList, setUserList] = useState([]);
    const [showUserList, setShowUserList] = useState(false);
    // uplifted states from Feed
    const [posts, setPosts] = useState([]);
    // debounce state for search query
    const debouncedSearchQuery = useDebounce(searchQuery);

    function handleSearchQueryChange(newSearchQuery){
        setSearchQuery(newSearchQuery);
    }
    function handleShowUserListChange(newShowUserList){
        setShowUserList(newShowUserList);
    }
    function handleNewPostCreated(newPost){
        setPosts([newPost, ...posts]);
    }
    function handleSearchPostsByUserId(userId){
        axios.get(getPostsURL)
        .then((response) => {
            const filteredPosts = response.data.filter(post => post.author.userId === userId)
            setPosts(filteredPosts);
        })
        .catch((err) => {
            console.log('Failed to get posts for searching')
        });
    }

    useEffect(() => {
        axios.get(getPostsURL)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log('Failed to get posts')
        });
    }, []);

    useEffect(() => {
        axios.get(getUsersURL)
        .then((response) => {
            setUserList(response.data);
        })
        .catch((err) => {
            console.log('Failed to get users ', err);
        })
    }, []);

    useEffect(() => {
        axios.get(getPostsURL)
        .then((response) => {
            const filteredPosts = response.data.filter((post) => {
                return (post.author.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || 
                    post.content.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
            })
            setPosts(filteredPosts);
        })
        .catch((err) => {
            console.log('Failed to get posts for searching')
        });

        axios.get(getUsersURL)
        .then((response) => {
            const filterdUsers = response.data.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setUserList(filterdUsers);
        })
        .catch((err) => {
            console.log('Failed to get users ', err);
        });
    }, [debouncedSearchQuery]);

    return (
        <>
            <Header searchQuery={searchQuery}
            showUserList={showUserList}
            userList = {userList}
            onSearchQueryChange={handleSearchQueryChange}
            onShowUserListChange={handleShowUserListChange}
            onSearchPostsByUserId={handleSearchPostsByUserId}/>
            <main>
                <Outlet context={{
                    posts, 
                    handleNewPostCreated,
                }}/>
            </main>
        </>
    )
}
