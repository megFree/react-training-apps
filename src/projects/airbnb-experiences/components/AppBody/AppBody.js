import React from 'react';
import './AppBody.scss';

import { ExperiencesList } from '~/ExperiencesList/ExperiencesList';

import gridImage from 'img/grid-images.png';

export function AppBody() {
    return (
        <div className="app-body">
            <div className="app-body__grid-image-container">
                <img className="app-body__grid-image" src={gridImage} alt="placeholder images"/>
            </div>
            <ExperiencesList />
        </div>
    );
}
