import React from "react";
import PropTypes from 'prop-types';

export default function Icon({iconName, size='32px', color='#666666', onClick=null}) {
    return (  
        <i className={`bi bi-${iconName} icon`}
        style={{fontSize: size, color: color}}
        onClick={onClick}></i>
    );
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
};