import './Feed.css'
import React from 'react';
import CreatePost from './CreatePost'
import PostList from './PostList';
import DateFilter from './DateFilter';

export default function Feed({ loaderRef }) {
    return (
        <div className='flex-col feed'>
            <CreatePost />
            <DateFilter />
            <PostList loaderRef = {loaderRef}/>
        </div>
    )
} 
