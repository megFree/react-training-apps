import React from 'react';
import './TravelItem.scss';

import geoMark from 'img/geo-mark.svg';

export function TravelItem({ item }) {
    return (
        <div className="travel-item">
            <div className="travel-item__img-container">
                <img className="travel-item__img" src={item.imageUrl} alt={item.location}/>
            </div>
            <div className="travel-item__content">
                <div className="travel-item__content-location">
                    <img className="travel-item__content-location-mark" src={geoMark} alt="geo"/>
                    <div className="travel-item__content-location-name">
                        {item.location}
                    </div>
                    <a className="travel-item__content-location-link" href={item.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className="travel-item__title">
                    {item.title}
                </h2>
                <div className="travel-item__date">
                    {item.startDate} - {item.endDate}
                </div>
                <div className="travel-item__description">
                    {item.description}
                </div>
            </div>
        </div>
    );
}
