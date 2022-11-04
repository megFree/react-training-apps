import React from 'react';
import './TravelList.scss';

import { data } from '@/mock/mock.data';

import { TravelItem } from '~/TravelItem/TravelItem';

export function TravelList({ className }) {
    const travels = data.map(item =>
        (
            <li className="travel-list__item" key={item.title}>
                <TravelItem item={item} />
            </li>
        ),
    );

    return (
        <ul className={`${className} travel-list`}>
            {travels}
        </ul>
    );
}
