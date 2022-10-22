import React from 'react';
import './ExperiencesCardsList.scss';

import { ExperiencesCard } from '~/ExperiencesCard/ExperiencesCard';

export function ExperiencesCardsList() {
    return (
        <div className="experiences-card-list">
            <ExperiencesCard className="experiences-card-list__item" />
            <ExperiencesCard className="experiences-card-list__item" />
            <ExperiencesCard className="experiences-card-list__item" />
        </div>
    );
}
