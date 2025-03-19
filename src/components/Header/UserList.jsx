import React from 'react'
import IconText from '../molecules/IconText'
import map from 'lodash/map'


export default function UserList( {userList, onSearchPostsByUserId} ) {
    return (
        <div className='page-component user-list'>
            <ul>
                {map(userList, (user) => {
                    return <li key={user.userId}>
                        <IconText iconName='person-fill' size='20px' color='#666666' textContent={user.name}
                        handleClick={()=> onSearchPostsByUserId(user.userId)}/>
                    </li>
                })}
            </ul>
        </div>
    )
}
