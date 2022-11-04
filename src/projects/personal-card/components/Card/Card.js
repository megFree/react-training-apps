import React from 'react';
import './Card.scss';

import { EmailButton } from '~/EmailButton/EmailButton';
import { AboutBlock } from '~/AboutBlock/AboutBlock';
import { InterestsBlock } from '~/InterestsBlock/InterestsBlock';
import { SocialFooter } from '~/SocialFooter/SocialFooter';

import avatarImg from '@/assets/img/avatar.jpg';

export function Card({ className }) {
    return (
        <div className={ `card ${className}` }>
            <img className="card__avatar" src={avatarImg} alt="avatar" />
            <div className="card__content">
                <div className="card__name">Sergey Grechishkin</div>
                <div className="card__job-title">Frontend Developer</div>
                <div className="card__site">github.com/megFree</div>
                <EmailButton className="card__email-button" />
                <AboutBlock className="card__about-block" />
                <InterestsBlock className="card__interests-block" />
            </div>
            <SocialFooter className="card__social-footer" />
        </div>
    );
}
