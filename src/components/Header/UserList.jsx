import React from 'react'
import IconText from '../molecules/IconText'
import { connect } from 'react-redux';
import { setSelectedUserId } from '../../redux/actions';

function UserList( {userList, setSelectedUserId} ) {
    return (
        <div className='page-component user-list'>
            <ul>
                {userList.map((user) => {
                    return <li key={user.userId}>
                        <IconText iconName='person-fill' size='20px' color='#666666' textContent={user.name}
                        handleClick={()=> setSelectedUserId(user.userId)}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userList: state.user.userList,
});

const mapDispatchToProps = {
    setSelectedUserId,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);