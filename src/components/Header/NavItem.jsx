import React from 'react'
import Icon from '../atoms/Icon'

export default function NavItem({iconName, tabName}) {
  return (
    <li className="nav-item">
        <a href="">
            <Icon iconName={iconName} size='24px'/>
            <span>{tabName}</span>
        </a>
    </li>
  )
}
