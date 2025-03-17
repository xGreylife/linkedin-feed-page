import React from 'react'
import Icon from '../atoms/Icon'
import TextElement from '../atoms/TextElement'
import PropTypes from 'prop-types'

export default function IconText( {iconName, size='14px', color='#191919', textContent} ) {
  return (
    <div className='flex-row'>
        <Icon iconName={iconName} size={size} color={color}/>
        <TextElement textContent={textContent}/>
    </div>
  )
}


IconText.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    textContent: PropTypes.string.isRequired,
};