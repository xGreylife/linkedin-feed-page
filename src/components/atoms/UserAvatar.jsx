import React from 'react';
import PropTypes from 'prop-types';

export default function UserAvatar({user, className}) {
  return (
    <img src={user.avatar} alt={user.mame} className={className}/>
  )
}

UserAvatar.propTypes = {
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string, 
};
