import React from 'react';
import './GameDescription.scss';

export function GameDescription({ className }) {
    return (
        <div className={`${className} game-description`}>
            <h1 className="game-description__title">
                Tenzies
            </h1>
            <p className="game-description__description">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
        </div>
    );
}
