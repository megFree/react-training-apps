import React from 'react';
import './ExperiencesCard.scss';

import star from 'img/star.svg';

import { getMockImage } from '@/mock/getMockImage';

export function ExperiencesCard({ className, experience }) {
    const { coverImg, stats, location, title, price, openSpots } = experience;
    const { rating, reviewCount } = stats;

    let badgeText;
    if (openSpots === 0) {
        badgeText = 'Sold out';
    } else if (location === 'Online') {
        badgeText = 'Online';
    }

    return (
        <div className={ `experiences-card ${className}` }>
            { badgeText && <div className="experiences-card__status">{badgeText}</div>}
            <div className="experiences-card__image-container">
                <img className="experiences-card__image" src={getMockImage(coverImg)} alt="card image"/>
            </div>
            <div className="experiences-card__info">
                <div className="experiences-card__info-rating">
                    <img className="experiences-card__info-rating-ico" src={star} alt="stars"/>
                    <div className="experiences-card__info-rating-exact">{rating}</div>
                    <span className="experiences-card__info-rated-by">({reviewCount})</span>
                    <span className="mid-dot experiences-card__info-dot">&middot;</span>
                    <span className="experiences-card__info-rating-country">{location}</span>
                </div>
                <div className="experiences-card__info-title">
                    {title}
                </div>
                <div className="experiences-card__info-price">
                    <span className="experiences-card__info-price-exact">From ${price} / </span>
                    <span className="experiences-card__info-price-add">person</span>
                </div>
            </div>
        </div>
    );
}
