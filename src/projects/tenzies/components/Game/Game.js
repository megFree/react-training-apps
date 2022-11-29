import React from 'react';
import './Game.scss';

import { GameButtons } from '~/GameButtons/GameButtons';
import { GameDescription } from '~/GameDescription/GameDescription';
import { PlayButton } from '~/PlayButton/PlayButton';

import { random, range } from 'lodash';

export function Game() {
    const [buttons, setButtons] = React.useState(initButtons());
    const [isGameOver, setIsGameOver] = React.useState(false);

    function initButtons() {
        return range(10)
            .map((elem, index) => {
                return {
                    id: index,
                    number: random(1, 9),
                    fixed: false,
                };
            });
    }

    function generateUnfixedButtons() {
        setButtons((oldButtons) => {
            return oldButtons.map(button => {
                if (!button.fixed) {
                    button.number = random(1, 9);
                }

                return button;
            });
        });
    }

    function toggleButton(id) {
        setButtons((oldButtons) => {
            return oldButtons.map(button => {
                if (button.id === id) {
                    button.fixed = !button.fixed;
                }
                return button;
            });
        });

        checkGameOver();
    }

    function checkGameOver() {
        const isOver = buttons.every(button => button.number === buttons[0].number);
        setIsGameOver(isOver);
    }

    function startNewGame() {
        setButtons(initButtons());
        setIsGameOver(false);
    }

    return (
        <div className="game">
            <GameDescription className="game__description" />
            <GameButtons
                className="game__field"
                buttons={buttons}
                onClickButton={toggleButton}
            />
            <PlayButton
                text={isGameOver ? 'Start again' : 'Roll'}
                action={isGameOver ? startNewGame : generateUnfixedButtons }
            />
        </div>
    );
}
