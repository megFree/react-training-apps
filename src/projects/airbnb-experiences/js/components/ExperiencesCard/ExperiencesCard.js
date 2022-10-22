import React from 'react';
import './ExperiencesCard.scss';

import cardImage from 'img/card-image-1.png';
import star from 'img/star.svg';

export function ExperiencesCard({ className }) {
    return (
        <div className={ `experiences-card ${className}` }>
            <div className="experiences-card__status">
                sold out
            </div>
            <div className="experiences-card__image-container">
                <img className="experiences-card__image" src={cardImage} alt="card image"/>
            </div>
            <div className="experiences-card__info">
                <div className="experiences-card__info-rating">
                    <img className="experiences-card__info-rating-ico" src={star} alt="stars"/>
                    <div className="experiences-card__info-rating-exact">5.0</div>
                    <span className="experiences-card__info-rated-by">(6)</span>
                    <span className="mid-dot experiences-card__info-dot">&middot;</span>
                    <span className="experiences-card__info-rating-country">USA</span>
                </div>
                <div className="experiences-card__info-title">
                    Life lessons with Katie Zaferes
                </div>
                <div className="experiences-card__info-price">
                    <span className="experiences-card__info-price-exact">From $136 / </span>
                    <span className="experiences-card__info-price-add">person</span>
                </div>
            </div>
        </div>
    );
}
