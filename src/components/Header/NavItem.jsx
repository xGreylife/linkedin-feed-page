import React from 'react'
import Icon from '../atoms/Icon'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavItem({icon, label, to}) {
  return (
    <li className="nav-item">
        <NavLink to={to} className={({isActive}) => isActive ? 'active-nav-item' : undefined} end>
            <Icon iconName={icon} size='24px' color={({isActive}) => isActive ? '#191919' : '#666666'}/>
            <span>{label}</span>
        </NavLink>
    </li>
  )
}

NavItem.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
