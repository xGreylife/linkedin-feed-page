import React from 'react'
import Icon from '../atoms/Icon'
import SidebarTextElement from '../atoms/SidebarTextElement'

export default function IconText( {iconName, size, color, textContent} ) {
  return (
    <div className='flex-row'>
        <Icon iconName={iconName} size={size} color={color}/>
        <SidebarTextElement textContent={textContent}/>
    </div>
  )
}
