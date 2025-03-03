import { useEffect, useState, useRef } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header/Header'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import Feed from './components/Feed/Feed';

import { postList } from './data/postData';
import { useDebounce } from './hooks/useDebounce';

function App() {
    // uplifted states from Header
    const [searchQuery, setSearchQuery] = useState('');
    const [showUserList, setShowUserList] = useState(false);

    // uplifted states from Feed
    const [posts, setPosts] = useState(postList);

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
        const filteredPosts = postList.filter(post => post.author.userId === userId);
        setPosts(filteredPosts);
    }

    useEffect(()=>{
        console.log('in useEffect : debouncedSearchQuery : ', debouncedSearchQuery);
        const filteredPosts = postList.filter((post) => {
            return (post.author.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || 
                post.content.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
        })
        setPosts(filteredPosts);
    }, [debouncedSearchQuery]);

    return (
        <>
        <Header searchQuery={searchQuery} 
        showUserList={showUserList} 
        onSearchQueryChange={handleSearchQueryChange} 
        onShowUserListChange={handleShowUserListChange}
        onSearchPostsByUserId={handleSearchPostsByUserId}/>

        <div className='page-content'>
            <LeftSidebar/>
            <Feed posts={posts} 
            onNewPostCreated={handleNewPostCreated}/>
        </div>
        </>
    )
}

export default App
