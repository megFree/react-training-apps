import React from 'react';
import './GameButtons.scss';

export function GameButtons({ className, buttons, onClickButton }) {
    const buttonsElements = buttons
        .map((button) => {
            const classes = [
                'game-buttons__button',
                button.fixed ? 'game-buttons__button--green' : '',
            ].join(' ');

            return (
                <button
                    key={`button-${button.id}`}
                    className={classes}
                    onClick={() => onClickButton(button.id)}
                >
                    {button.number}
                </button>
            );
        });

    return (
        <div className={`${className} game-buttons`}>
            {buttonsElements}
        </div>
    );
}
