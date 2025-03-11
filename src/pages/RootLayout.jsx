import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios';
import Header from '../components/Header/Header'
import { getPostsURL, getUsersURL } from '../constants/api';
import { useDebounce } from '../hooks/useDebounce';
import { YEAR_4000 } from '../constants/timeConstants';

export default function RootLayout() {
    // uplifted states from Header
    const [searchQuery, setSearchQuery] = useState('');
    const [userList, setUserList] = useState([]);
    const [showUserList, setShowUserList] = useState(false);
    // uplifted states from Feed
    const [posts, setPosts] = useState([]);
    // debounce state for search query
    const debouncedSearchQuery = useDebounce(searchQuery);
    // uplifted state from filter date
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSearchQueryChange(newSearchQuery){
        setSearchQuery(newSearchQuery);
    }
    function handleNewPostCreated(newPost){
        setPosts([newPost, ...posts]);
    }
    function handleShowUserListChange(value){
        setShowUserList(!showUserList);
    }
    function handleSearchPostsByUserId(userId){
        axios.get(getPostsURL)
        .then((response) => {
            const filteredPosts = response.data.filter(post => post.author.userId === userId)
            setPosts(filteredPosts);
        })
        .catch((err) => {
            console.log('Failed to get posts for searching ', err);
        });
    }
    function handleStartDateChange(value){
        setStartDate(value);
    }
    function handleEndDateChange(value){
        setEndDate(value);
    }

    // function filterPostsByDateRange(){
    //     axios.get(getPostsURL)
    //     .then((response) => {
    //         const startDateTimestamp = startDate === '' ? 0 : Date.parse(startDate);
    //         const endDateTimestamp = endDate === '' ? YEAR_4000 : Date.parse(endDate);
    //         const filteredPosts = response.data.filter(post => post.timestamp >= startDateTimestamp && post.timestamp <= endDateTimestamp);
    //         setPosts(filteredPosts);
    //     })
    //     .catch((err) => {
    //         console.log('Failed to get posts for date filter ', err);
    //     })
    // }

    useEffect(() => {
        axios.get(getPostsURL)
        .then((response) => {
            const startDateTimestamp = startDate === '' ? 0 : Date.parse(startDate);
            const endDateTimestamp = endDate === '' ? YEAR_4000 : Date.parse(endDate);
            const filteredPosts = response.data.filter(post => post.timestamp >= startDateTimestamp && post.timestamp <= endDateTimestamp);
            setPosts(filteredPosts);
        })
        .catch((err) => {
            console.log('Failed to get posts for date filter ', err);
        })
    }, [startDate, endDate]);

    useEffect(() => {
        axios.get(getPostsURL)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log('Failed to get posts ', err);
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
    }, [])

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
        })
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
                    startDate,
                    endDate,
                    handleStartDateChange,
                    handleEndDateChange,
                }}/>
            </main>
        </>
    )
}
