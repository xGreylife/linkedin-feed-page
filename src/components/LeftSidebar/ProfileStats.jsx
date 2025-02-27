import React from 'react'
import { loggedInUser } from '../../data/userData'
import SidebarTextElement from '../atoms/SidebarTextElement'

export default function ProfileStats() {
  return (
    <div className='page-component profile-stats'>
        <div className='profile-views-wrapper'>
            <SidebarTextElement textContent={'Profile viewers'}/>
            <SidebarTextElement textContent={loggedInUser.profileViews}/>
        </div>
        <div>
            <SidebarTextElement textContent={'View all analytics'}/>
        </div>
    </div>
  )
}
