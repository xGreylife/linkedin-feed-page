import React, { useState } from 'react'
import './Feed.css'
import CreatePost from './CreatePost'
import PostList from './PostList';
import { postList } from '../../data/postData'

export default function Feed() {
    const [posts, setPosts] = useState(postList);

    function handleNewPost(newPost){
        setPosts([newPost, ...posts]);
    }

    return (
        <div className='flex-col feed'>
            <CreatePost onPostCreated={handleNewPost}/>
            <PostList posts={posts}/>
        </div>
    )
} 
