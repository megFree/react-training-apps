import React from 'react';
import './Header.scss';

import airbnbLogo from 'img/airbnb-logo.svg';

export function Header() {
    return (
        <div className="header">
            <a href="#">
                <img src={airbnbLogo} alt="logo"/>
            </a>
        </div>
    );
}
