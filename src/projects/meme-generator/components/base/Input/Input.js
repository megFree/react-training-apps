import React from 'react';
import './Input.scss';

export function Input({
    className = '',
    placeholder = '',
    type = 'text',
    onChange = () => {},
    name = '',
    value = '',
}) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            name={name}
            value={value}
        />
    );
}
