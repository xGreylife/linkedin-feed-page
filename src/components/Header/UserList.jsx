import React from 'react'
import IconText from '../molecules/IconText'

export default function UserList( {userList, onSearchPostsByUserId} ) {
    return (
        <div className='page-component user-list'>
            <ul>
                {userList.map((user) => {
                    return <li key={user.userId}>
                        <IconText iconName='person-fill' size='20px' color='#666666' textContent={user.name}
                        handleOnClick={()=> onSearchPostsByUserId(user.userId)}/>
                    </li>
                })}
            </ul>
        </div>
    )
}
