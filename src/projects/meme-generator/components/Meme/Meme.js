import React from 'react';
import './Meme.scss';

export function Meme({
    className = '',
    imageUrl,
    topText = '',
    bottomText = '',
}) {
    return (
        <div className={`${className} meme`}>
            <div className="meme__text meme__text--top">{topText}</div>
            <div className="meme__text meme__text--bottom">{bottomText}</div>
            <img className="meme__image" src={imageUrl} alt="meme"/>
        </div>
    );
}
