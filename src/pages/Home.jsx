import React from 'react'
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import Feed from '../components/Feed/Feed'

export default function Home() {
    return (
        <div className='page-content'>
                <LeftSidebar/>
                <Feed/>
        </div>
    )
}
