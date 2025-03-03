import React, { useState } from 'react'
import './Feed.css'
import CreatePost from './CreatePost'
import PostList from './PostList';
import { postList } from '../../data/postData'

export default function Feed({posts, onNewPostCreated}) {
    return (
        <div className='flex-col feed'>
            <CreatePost onNewPostCreated={onNewPostCreated}/>
            <PostList posts={posts}/>
        </div>
    )
} 
