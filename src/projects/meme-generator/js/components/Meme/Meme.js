import React from 'react';
import './Meme.scss';

export function Meme({
    className = '',
}) {
    return (
        <div className={`${className} meme`}>
            {/* <img src={getMockImage('meme.jpg')} alt="meme"/> */}
        </div>
    );
}
