import React from 'react';
import './Radio.css';

const Radio = ({ children, value, name, defaultChecked, disabled, setter }) => {
    return (
        <label style={{ marginLeft: '20px' }}>
            <input
                style={{ marginBottom: '5px', marginRight: '5px' }}
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={() => setter(value)}
            />
            {children}
        </label>
    );
};

export default Radio;