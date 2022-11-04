import React from 'react';
import './Meme.scss';

export function Meme({
    className = '',
    imageUrl,
}) {
    return (
        <div className={`${className} meme`}>
            <img className="meme__image" src={imageUrl} alt="meme"/>
        </div>
    );
}
