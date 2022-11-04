import React from 'react';
import './Main.scss';

import { getRandomImageUrl } from '@/mock/api';

import { Input } from '~/base/Input/Input';
import { Button } from '~/base/Button/Button';
import { Meme } from '~/Meme/Meme';

export function Main() {
    const [state, setState] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: getRandomImageUrl(),
    });

    function getNewImage() {
        setState(prevState => ({ ...prevState, randomImage: getRandomImageUrl() }));
    }

    function handleTextInput(event) {
        const { name, value } = event.currentTarget;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className="main">
            <div className="main__inputs">
                <Input
                    className="main__input"
                    placeholder="Upper text"
                    name="topText"
                    value={state.topText}
                    onChange={handleTextInput}
                />
                <Input
                    className="main__input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={state.bottomText}
                    onChange={handleTextInput}
                />
            </div>
            <Button
                className="main__button"
                text={'Get a new meme image'}
                onClick={getNewImage}
            />
            <Meme
                className="main__meme"
                imageUrl={state.randomImage}
                bottomText={state.bottomText}
                topText={state.topText}
            />
        </div>
    );
}
