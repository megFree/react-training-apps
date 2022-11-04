import React from 'react';
import './Header.scss';

import logo from 'img/logo.svg';

export function Header({ className }) {
    return (
        <div className={`${className} header`}>
            <img className="header__logo" src={logo} alt="logo"/>
            <h1 className="header__title">my travel journal.</h1>
        </div>
    );
}
