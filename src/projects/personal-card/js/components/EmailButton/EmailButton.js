import React from 'react';
import './EmailButton.scss';

import emailIcon from '@/assets/img/email.svg';

export function EmailButton({ className }) {
    return (
        <a href="mailto:meg.work.996@gmail.com" className={`email-button ${className}`}>
            <img className="email-button__icon" src={emailIcon} alt="email icon"/>
            <span className="email-button__text">E-mail</span>
        </a>
    );
}
