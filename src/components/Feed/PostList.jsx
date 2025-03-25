import React from 'react'
import Post from './Post'
import BeatLoader from "react-spinners/BeatLoader";
import { connect } from 'react-redux';
import map from 'lodash/map'

function PostList( {posts, isLoading, loaderRef} ) {
    return (
        <>
            <div className='post-list flex-col'>
                <>
                    {!isLoading && posts.length === 0 ? (
                        <div className="page-component no-posts">
                            <p> No posts to display !</p>
                        </div>
                    ):(
                        map(posts, (post) => {
                            return <Post key={post.id} post = {post}/>
                        })
                    )}
                </>
            </div>
            <div className='align-self-center' ref={loaderRef}>{isLoading && (
                <BeatLoader
                    color='#378FE9'
                    loading={true}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}</div>
        </>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
});

export default connect(mapStateToProps)(PostList);