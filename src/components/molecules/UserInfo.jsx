import React from 'react'

export default function UserInfo({user, size = ''}) {
  return (
    <div className='user-info'>
        <span> {user.name} </span>
        <p> {user.headline} </p>
    </div>
  )
}
