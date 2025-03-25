import React, { useState } from 'react'
import UserAvatar from '../atoms/UserAvatar'
import UserInfo from '../molecules/UserInfo'
import Icon from '../atoms/Icon'
import IconText from '../molecules/IconText'
import Comment from './Comment'
import { MINUTE, HOUR, DAY, WEEK } from '../../constants/timeConstants'
import floor from 'lodash/floor'
import map from 'lodash/map'

export default function Post( {post} ) {
    const [likes, setLikes] = useState(post.likes);
    const [showComments, setShowComments] = useState(false);

    function handleShowComments(){
        setShowComments(!showComments);
    }

    function handleSetLikes(){
        setLikes(likes + 1);
    }

    function getElapsedTime(postTime){
        const currentTime = Date.now();
        const differnce = currentTime - postTime;
        const timeStamp = (differnce >= WEEK) ? `${floor(differnce / WEEK)}w`:
                            (differnce >= DAY) ? `${floor(differnce / DAY)}d`:
                            (differnce >= HOUR) ? `${floor(differnce / HOUR)}h`:
                            (differnce >= 2 * MINUTE) ? `${floor(differnce / MINUTE)}m`:
                            `Just Now`;

        return timeStamp;
    }

    return (
        <div className='page-component post' data-timestamp={post.timestamp}>
            <div className='post-header'>
                <div className='flex-row author-info-wrapper'>
                    <UserAvatar user={post.author} className='avatar-medium'/>
                    <div className='flex-col'>
                        <UserInfo className={'flex-col author-info'} user={post.author} />
                        <div className='time-stamp-container'>
                            <span className='light-text'> {getElapsedTime(post.timestamp)} </span>
                            <Icon iconName={'globe-americas'} size='14px' color='#666666' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='post-content'>
                <p> {post.content} </p>
                {post.image && (
                    <img src={post.image} alt="Post Media" className='post-image'/>
                )}
            </div>

            <div className='flex-row post-stats'>
                <IconText iconName={'hand-thumbs-up'} size='14px' color={'#378FE9'} textContent={`${likes} Likes`}/>
                <span className='light-text'> {post.comments? post.comments.length : 0} Comments </span>
            </div>

            <div className='flex-row post-add-ons'>
                <IconText iconName='hand-thumbs-up' size='18px' color='#404040' textContent='Like' handleClick={() => handleSetLikes()}/>
                <IconText iconName='chat-right-text' size='18px' color='#404040' textContent='Comment' handleClick={() => handleShowComments()}/>
                <IconText iconName='arrow-left-right' size='18px' color='#404040' textContent='Repost'/>
                <IconText iconName='send' size='18px' color='#404040' textContent='Share'/>
            </div>
            
            {(post.comments && showComments) && (
                <div className='comment-list'>
                    {map(post.comments, (comment) => {
                        return <Comment key={comment.id} comment={comment}/>
                    })}
                </div>
            )}
        </div>
    )
}
