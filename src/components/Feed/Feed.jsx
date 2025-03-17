import './Feed.css'
import React from 'react';
import CreatePost from './CreatePost'
import PostList from './PostList';
import DateFilter from './DateFilter';

export default function Feed({posts, onNewPostCreated, startDate, endDate, handleStartDateChange, handleEndDateChange, 
    isLoading, loaderRef}) {
    return (
        <div className='flex-col feed'>
            <CreatePost onNewPostCreated={onNewPostCreated}/>
            <DateFilter startDate={startDate} 
            endDate={endDate}
            handleStartDateChange = {handleStartDateChange} 
            handleEndDateChange = {handleEndDateChange}/>
            <PostList posts={posts} isLoading = {isLoading} loaderRef = {loaderRef}/>
        </div>
    )
} 
