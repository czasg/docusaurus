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
export const PASS = () => (<Highlight color="#fff" bgColor="green">PASS</Highlight>);
export const FAIL = () => (<Highlight color="#fff" bgColor="red">FAIL</Highlight>);
export const ORDER = () => (<Highlight color="#fff" bgColor="gray">ORDER</Highlight>);
export const OFFER = () => (<Highlight color="#000" bgColor="yellow">OFFER</Highlight>);
export const WAIT = () => (<Highlight color="#fff" bgColor="#4FC3F7">WAIT</Highlight>);
export const REFUSE = () => (<Highlight color="#fff" bgColor="#FF9800">REFUSE</Highlight>);
