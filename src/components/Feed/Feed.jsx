import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreatePost from './CreatePost'
import PostList from './PostList';
import axios from 'axios';
import { getPostsURL } from '../../constants/api';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(getPostsURL)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log('Failed to get posts');
        });
    }, []);

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
