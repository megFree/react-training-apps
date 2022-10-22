import React from 'react';
import './SocialFooter.scss';

import github from 'img/social/github.svg';

export function SocialFooter ({ className }) {
    return (
        <div className={ `social-footer ${className}` }>
            <a className="social-footer__link" href="https://github.com/megFree" target="_blank" rel="noreferrer">
                <img className="social-footer__icon" src={github} alt="github icon"/>
            </a>
        </div>
    );
}
