import React from 'react';
import './ExperiencesCardsList.scss';

import { data } from '@/mock/mock.data';

import { ExperiencesCard } from '~/ExperiencesCard/ExperiencesCard';

export function ExperiencesCardsList() {
    const cards = data.map(dataItem => {
        return (
            <ExperiencesCard
                className="experiences-card-list__item"
                experience={dataItem}
                key={dataItem.id}
            />
        );
    });

    return (
        <div className="experiences-card-list">
            {cards}
        </div>
    );
}
