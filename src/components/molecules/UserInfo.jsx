import React from 'react'

export default function UserInfo({user, className, size = ''}) {
  return (
    <div className={className}>
        <span> {user.name} </span>
        <p> {user.headline} </p>
    </div>
  )
}
