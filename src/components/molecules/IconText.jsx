import React from 'react'
import Icon from '../atoms/Icon'
import SidebarTextElement from '../atoms/SidebarTextElement'

export default function IconText( {iconName, size, color, textContent, handleOnClick=null} ) {
  return (
    <div className='flex-row' onClick={handleOnClick}>
        <Icon iconName={iconName} size={size} color={color}/>
        <SidebarTextElement textContent={textContent}/>
    </div>
  )
}
