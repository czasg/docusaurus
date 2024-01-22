import React from 'react';

const Highlight = ({children, bgColor = '#f1f0d8', color = '#000000'}) => {
    return (
        <span
            style={{
                backgroundColor: bgColor,
                borderRadius: '10px',
                color: color,
                padding: '0.3rem',
                fontWeight: 600,
            }}>
            {children}
        </span>
    );
};

export default Highlight;
