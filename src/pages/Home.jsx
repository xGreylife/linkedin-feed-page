import React from 'react'
import { useOutletContext } from 'react-router-dom';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import Feed from '../components/Feed/Feed'

export default function Home() {
    const {posts, handleNewPostCreated, starDate, endDate,
        handleStartDateChange, handleEndDateChange, 
        isLoading, loaderRef} = useOutletContext();
    return (
        <div className='page-content'>
                <LeftSidebar/>
                <Feed  
                    posts={posts}    
                    onNewPostCreated={handleNewPostCreated}
                    starDate={starDate}
                    endDate={endDate}
                    handleStartDateChange={handleStartDateChange}
                    handleEndDateChange={handleEndDateChange}
                    isLoading = {isLoading}
                    loaderRef = {loaderRef}
                />
        </div>
    )
}
