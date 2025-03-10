import React from 'react'
import { useOutletContext } from 'react-router-dom';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import Feed from '../components/Feed/Feed'

export default function Home() {
    const {posts, handleNewPostCreated} = useOutletContext();
    return (
        <div className='page-content'>
                <LeftSidebar/>
                <Feed  
                    posts={posts}    
                    onNewPostCreated={handleNewPostCreated}
                />
        </div>
    )
}
