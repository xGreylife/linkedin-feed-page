import React from 'react';

export default function UserAvatar({user, className}) {
  return (
    <img src={user.avatar} alt={user.name} className={className}/>
  )
}
