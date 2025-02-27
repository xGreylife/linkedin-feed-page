import React from "react";

export default function Icon({iconName, size='32px', color='#666666'}) {
    return (  
        <i className={`bi bi-${iconName} icon`}
        style={{fontSize: size, color: color}}
        ></i>
    );
}