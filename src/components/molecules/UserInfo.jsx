import React from 'react'
import PropTypes from 'prop-types'

export default function UserInfo({user, className}) {
  return (
    <div className={className}>
        <span> {user.name} </span>
        <p> {user.headline} </p>
    </div>
  )
}

UserInfo.propTypes = {
    user:PropTypes.shape({
        name: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string, 
};