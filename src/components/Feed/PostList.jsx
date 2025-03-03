import React from 'react'
import Post from './Post'

export default function PostList( {posts} ) {
    return (
        <div className='post-list flex-col'>
            <>
                {posts.length === 0 ? (
                    <div className="page-component no-posts">
                        <p> No posts to display !</p>
                    </div>
                ):(
                    posts.map((post) => {
                        return <Post key={post.id} post = {post}/>
                    })
                )}
            </>
        </div>
    )
}
