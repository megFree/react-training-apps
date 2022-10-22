import React from 'react';
import './BaseTitles.scss';

export function BaseTitle({ className }) {
    return (
        <h1 className={`base-title ${className}`}>
            Online Experiences
        </h1>
    );
}
