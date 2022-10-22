import React from 'react';
import './AboutBlock.scss';

export function AboutBlock ({ className }) {
    return (
        <div className={ `about-block ${className}` }>
            <div className="about-block__title">
                About
            </div>
            <div className="about-block__text">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                I try to keep up with security and best practices, and am always looking for new things to learn.
            </div>
        </div>
    );
}
