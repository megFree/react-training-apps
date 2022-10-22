import React from 'react';
import './ExperiencesList.scss';

import { BaseTitle } from '~/base/BaseTitle/BaseTitle';
import { ExperiencesCardsList } from '~/ExperiencesCardsList/ExperiencesCardsList';

export function ExperiencesList() {
    return (
        <div className="experiences-list">
            <BaseTitle className="experiences-list__title" />
            <p className="experiences-list__text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <ExperiencesCardsList />
        </div>
    );
}
