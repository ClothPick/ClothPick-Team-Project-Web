import React from 'react';
import './CSSRadio.css';

const Radio = ({ children, value, name, defaultChecked, disabled }) => {
    return (
        <label style={{ marginLeft: '20px' }}>
            <input
                style={{ marginBottom: '5px', marginRight: '5px' }}
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            {children}
        </label>
    );
};

export default Radio;