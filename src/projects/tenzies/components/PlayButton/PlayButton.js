import React from 'react';
import './PlayButton.scss';

export function PlayButton({ className, action = () => {}, text }) {
    return (
        <button
            className={`${className} play-button`}
            onClick={() => action()}
        >
            {text}
        </button>
    );
}
