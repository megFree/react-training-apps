import React from 'react';
import './Header.scss';

import trollFace from 'img/troll-face.svg';

export function Header() {
    return (
        <div className="header">
            <div className="header__title">
                <img className="header__logo" src={trollFace} alt="trolololo"/>
                <h1 className="header__title-text">Meme Generator</h1>
            </div>
            <div className="header__sub-title">
                React Course - Project 3
            </div>
        </div>
    );
}
