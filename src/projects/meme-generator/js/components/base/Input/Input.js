import React from 'react';
import './Input.scss';

export function Input({
    className = '',
    placeholder = '',
    type = 'text',
}) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder}
            type={type}
        />
    );
}
