import React from 'react';

const RadioGroup = ({ label, children }) => {
    return (
        <div>
            <legend>{label}</legend>
            {children}
        </div>
    );
};

export default RadioGroup;