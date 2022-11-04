import React from 'react';
import './Main.scss';

import { random } from 'lodash';

import { Input } from '~/base/Input/Input';
import { Button } from '~/base/Button/Button';
import { Meme } from '~/Meme/Meme';

export function Main() {
    const [state, setState] = React.useState({
        topText: '',
        bottomText: '',
        memes: [],
        currentImage: '',
    });

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => data.data)
            .then(data => {
                const { memes } = data;
                console.log('memes', memes);
                // устанавливаю стейт
                setState(prevState => {
                    return {
                        ...prevState,
                        memes,
                        currentImage: data.memes[random(0, data.memes.length - 1)],
                    };
                });
                // стейт не обновлён (??????)
                console.log('state', state);
            });
    }, []);

    function selectRandomImage() {
        setState(prevState => ({
            ...prevState,
            currentImage: state.memes[random(0, state.memes.length - 1)],
        }));
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
                onClick={selectRandomImage}
            />
            <Meme
                className="main__meme"
                // imageUrl={state.currentImage.url}
                bottomText={state.bottomText}
                topText={state.topText}
            />
        </div>
    );
}
