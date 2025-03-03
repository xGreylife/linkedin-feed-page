import React from 'react'
import Post from './Post'

export default function PostList( {posts} ) {
    return (
        <div className='post-list flex-col'>
            <>
                {posts.length && (
                    posts.map((post) => {
                        return <Post key={post.id} post = {post}/>
                    })
                )}
                {!posts.length && (
                    <p> No posts to display !</p>
                )}
            </>
        </div>
    )
}
