import React from 'react';
import PropTypes from 'prop-types';

export default function TextElement( {textContent} ) {
  return (
    <span className='sidebar-text'> {textContent} </span>
  );
}

TextElement.propTypes = {
    textContent: PropTypes.string.isRequired,
};
