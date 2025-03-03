import React from 'react'
import UserAvatar from '../atoms/UserAvatar'
import UserInfo from '../molecules/UserInfo'

export default function Comment({ comment }) {
  return (
    <div className='comment'>
        <div className='comment-header'>
            <div className='flex-row author-info-wrapper flex-start'>
                <UserAvatar user={comment.author} className='avatar-small'/>
                <div className='comment-content'>
                    <UserInfo className={'flex-col author-info'} user={comment.author} />
                    <p> {comment.content} </p>
                </div>
            </div>
        </div>
    </div>
  )
}
