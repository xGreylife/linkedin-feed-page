// import React, {useState, useEffect, useRef, useCallback} from 'react'
// import { Outlet } from 'react-router-dom'
// import axios from 'axios';
// import Header from '../components/Header/Header'
// // import { getPostsURL, getUsersURL } from '../constants/api';
// import { useDebounce } from '../hooks/useDebounce';

// export default function RootLayout() {
//     // uplifted states from Header
//     const [searchQuery, setSearchQuery] = useState('');
//     const [userList, setUserList] = useState([]);
//     const [showUserList, setShowUserList] = useState(false);
//     const [selectedUserId, setSelectedUserId] = useState(null);

//     // uplifted states from Feed and infinite scroll
//     const [posts, setPosts] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [page, setPage] = useState(1);
//     const loaderRef = useRef(null);
//     const [hasMore, setHasMore] = useState(true);
    
//     // Track if we need to ignore the current page value
//     const shouldResetPage = useRef(false);
    
//     // debounce state for search query with 300ms delay
//     const debouncedSearchQuery = useDebounce(searchQuery, 300);

//     // uplifted state from filter date
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');

//     function handleSearchQueryChange(newSearchQuery){
//         setSearchQuery(newSearchQuery);
//         resetSearch();
//     }

//     function handleNewPostCreated(newPost){
//         setPosts(prevPosts => [newPost, ...prevPosts]);
//     }

//     function handleShowUserListChange(){
//         setShowUserList(prevState => !prevState);
//     }

//     function handleSearchPostsByUserId(userId){
//         setSelectedUserId(userId);
//         resetSearch();
//     }

//     function handleStartDateChange(value){
//         setStartDate(value);
//         resetSearch();
//     }

//     function handleEndDateChange(value){
//         setEndDate(value);
//         resetSearch();
//     }

//     function resetSearch() {
//         setPosts([]);
//         shouldResetPage.current = true; 
//         setHasMore(true);
//     }

//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/users?search=${debouncedSearchQuery}`)
//         .then((response) => {
//             setUserList(response.data);
//         })
//         .catch((err) => {
//             console.log('Failed to get filtered user list : ', err);
//         })
//     }, [debouncedSearchQuery]);

//     useEffect(() => {
//         setIsLoading(false);
        
//         setPosts([]);
//         setPage(1); 
//         setHasMore(true);
//         shouldResetPage.current = true;
        
//         // ensure state updates before calling fetch posts
//         const timer = setTimeout(() => {
//             fetchPosts();  
//         }, 0);
        
//         return () => clearTimeout(timer);
//     }, [debouncedSearchQuery, selectedUserId, startDate, endDate]);

//     const fetchPosts = useCallback(async () => {
//         if(isLoading || !hasMore) return;
//         setIsLoading(true);

//         // page to fetch
//         const pageToFetch = shouldResetPage.current ? 1 : page;
//         // console.log(`Fetching page ${pageToFetch} for query: ${debouncedSearchQuery}`);
        
//         // Reset the flag
//         shouldResetPage.current = false;

//         const startDateTimestamp = startDate === '' ? 0 : Date.parse(startDate);
//         const endDateTimestamp = endDate === '' ? Number.MAX_SAFE_INTEGER : Date.parse(endDate);

//         try {
//             const response = await axios.get('http://localhost:5000/api/posts', {
//                 params: {
//                     page: pageToFetch, // Use our determined page
//                     search: debouncedSearchQuery,
//                     userId: selectedUserId,
//                     startDate: startDateTimestamp,
//                     endDate: endDateTimestamp,
//                 }
//             });
            
//             const filteredPosts = response.data.posts || [];

//             if (filteredPosts.length === 0) {
//                 if (pageToFetch === 1) {
//                     setPosts([]);
//                 }
//                 setHasMore(false);
//             } else {
//                 setPosts(prevPosts => pageToFetch === 1 ? filteredPosts : [...prevPosts, ...filteredPosts]);
//                 setPage(pageToFetch + 1);
//             }
//         } catch(err) {
//             console.log('Failed to fetch posts : ', err);
//             setHasMore(false);
//         } finally {
//             setIsLoading(false);
//         }
//     }, [isLoading, debouncedSearchQuery, selectedUserId, startDate, endDate, hasMore, page]);

//     // Infinite scroll observer
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             const target = entries[0];
//             if (target.isIntersecting && !isLoading && hasMore) {
//                 fetchPosts();
//             }
//         }, { threshold: 0.1 });

//         const currentLoaderRef = loaderRef.current;
//         if (currentLoaderRef) {
//             observer.observe(currentLoaderRef);
//         }

//         return () => {
//             if (currentLoaderRef) {
//                 observer.unobserve(currentLoaderRef);
//             }
//         }
//     }, [fetchPosts, isLoading, hasMore]);

//     return (
//         <>
//             <Header searchQuery={searchQuery}
//                 showUserList={showUserList}
//                 userList={userList}
//                 onSearchQueryChange={handleSearchQueryChange}
//                 onShowUserListChange={handleShowUserListChange}
//                 onSearchPostsByUserId={handleSearchPostsByUserId}/>
//             <main>
//                 <Outlet context={{
//                     posts, 
//                     handleNewPostCreated,
//                     startDate,
//                     endDate,
//                     handleStartDateChange,
//                     handleEndDateChange,
//                     isLoading,
//                     loaderRef,
//                     hasMore
//                 }}/>
//             </main>
//         </>
//     )
// }

import React, { useEffect, useRef, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { useDebounce } from '../hooks/useDebounce';
import {
    setPosts,
    addPosts,
    setLoading,
    setPage,
    setHasMore,
    setUserList,
    setDebouncedSearchQuery,
}   from '../redux/actions';

function RootLayout(props) {
    const {
        // Redux state
        isLoading,
        page,
        hasMore,
        selectedUserId,
        searchQuery,
        startDate,
        endDate,
        
        // Redux actions
        setPosts,
        addPosts,
        setLoading,
        setPage,
        setHasMore,
        setUserList,
        setDebouncedSearchQuery,
    } = props;

    const loaderRef = useRef(null);
    const shouldResetPage = useRef(false);
    
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    
    useEffect(() => {
        setDebouncedSearchQuery(debouncedSearchQuery);
    }, [debouncedSearchQuery, setDebouncedSearchQuery]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users?search=${debouncedSearchQuery}`)
        .then((response) => {
            setUserList(response.data);
        })
        .catch((err) => {
            console.log('Failed to get filtered user list : ', err);
        });
    }, [debouncedSearchQuery, setUserList]);

    useEffect(() => {
        setLoading(false);
        setPosts([]);
        setPage(1);
        setHasMore(true);
        shouldResetPage.current = true;
        
        // ensure state updates before calling fetch posts
        const timer = setTimeout(() => {
            fetchPosts();
        }, 0);
        
        return () => clearTimeout(timer);
    }, [debouncedSearchQuery, selectedUserId, startDate, endDate]);

    const fetchPosts = useCallback(async () => {
        if (isLoading || !hasMore) return;
        setLoading(true);

        // page to fetch
        const pageToFetch = shouldResetPage.current ? 1 : page;
        
        // Reset the flag
        shouldResetPage.current = false;

        const startDateTimestamp = startDate === '' ? 0 : Date.parse(startDate);
        const endDateTimestamp = endDate === '' ? Number.MAX_SAFE_INTEGER : Date.parse(endDate);

        try {
            const response = await axios.get('http://localhost:5000/api/posts', {
                params: {
                    page: pageToFetch,
                    search: debouncedSearchQuery,
                    userId: selectedUserId,
                    startDate: startDateTimestamp,
                    endDate: endDateTimestamp,
                }
            });
            
            const filteredPosts = response.data.posts || [];

            if (filteredPosts.length === 0) {
                if (pageToFetch === 1) {
                    setPosts([]);
                }
                setHasMore(false);
            } else {
                if (pageToFetch === 1) {
                    setPosts(filteredPosts);
                } else {
                    addPosts(filteredPosts);
                }
                setPage(pageToFetch + 1);
            }
        } catch(err) {
            console.log('Failed to fetch posts : ', err);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, [isLoading, debouncedSearchQuery, selectedUserId, startDate, endDate, hasMore, page, setPosts, addPosts, setPage, setHasMore, setLoading]);

    // Infinite scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && hasMore) {
            fetchPosts();
        }
        }, { threshold: 0.1 });

        const currentLoaderRef = loaderRef.current;
        if (currentLoaderRef) {
            observer.observe(currentLoaderRef);
        }

        return () => {
            if (currentLoaderRef) {
                observer.unobserve(currentLoaderRef);
            }
        };
    }, [fetchPosts, isLoading, hasMore]);

    return (
        <>
            <Header />
            <main>
                <Outlet context={{
                loaderRef,
                }}/>
            </main>
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.posts.isLoading,
    page: state.posts.page,
    hasMore: state.posts.hasMore,
    selectedUserId: state.user.selectedUserId,
    searchQuery: state.search.searchQuery,
    startDate: state.search.startDate,
    endDate: state.search.endDate
});

const mapDispatchToProps = {
    setPosts,
    addPosts,
    setLoading,
    setPage,
    setHasMore,
    setUserList,
    setDebouncedSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootLayout);