import React from 'react';
import './Button.scss';

export function Button({
    className = '',
    text = 'button',
    onClick = () => {},
}) {
    return (
        <button
            className={`${className} button`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
