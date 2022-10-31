import React from 'react';
import './Main.scss';

import { getRandomImageUrl } from '@/mock/api';

import { Input } from '~/base/Input/Input';
import { Button } from '~/base/Button/Button';
import { Meme } from '~/Meme/Meme';

export function Main() {
    function clickHandler() {
        console.log(getRandomImageUrl());
    }

    return (
        <div className="main">
            <div className="main__inputs">
                <Input
                    className="main__input"
                    placeholder="Upper text"
                />
                <Input
                    className="main__input"
                    placeholder="Bottom text"
                />
            </div>
            <Button onClick={clickHandler} text={'Get a new meme image'} className="main__button" />
            <Meme className="main__meme" />
        </div>
    );
}
