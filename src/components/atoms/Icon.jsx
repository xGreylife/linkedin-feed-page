import React from "react";
import PropTypes from 'prop-types';

export default function Icon({iconName, size='32px', color='#666666'}) {
    return (  
        <i className={`bi bi-${iconName} icon`}
        style={{fontSize: size, color: color}}
        ></i>
    );
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
};