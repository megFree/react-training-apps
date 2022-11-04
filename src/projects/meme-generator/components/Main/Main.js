import React from 'react';
import './Main.scss';

import { getRandomImageUrl } from '@/mock/api';

import { Input } from '~/base/Input/Input';
import { Button } from '~/base/Button/Button';
import { Meme } from '~/Meme/Meme';

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

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
        console.log(event);
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
                    onChange={ev => handleTextInput(ev)}
                />
                <Input
                    className="main__input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={state.bottomText}
                    onChange={ev => handleTextInput(ev)}
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
