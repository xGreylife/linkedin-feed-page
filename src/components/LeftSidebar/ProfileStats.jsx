import React, {useContext} from 'react'
import TextElement from '../atoms/TextElement'
import { LoggedInUserContext } from '../../App'

export default function ProfileStats() {
    const loggedInUser = useContext(LoggedInUserContext);
    
    return (
        <div className='page-component profile-stats'>
            <div className='profile-views-wrapper'>
                <TextElement textContent='Profile viewers'/>
                <TextElement textContent={loggedInUser.profileViews}/>
            </div>
            <div>
                <TextElement textContent='View all analytics'/>
            </div>
        </div>
    )
}
