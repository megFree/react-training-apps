import { data } from './mock.data';
import { random } from 'lodash';

export function getRandomImage() {
    return data.data.memes[random(0, data.data.memes.length - 1)];
}

export function getRandomImageUrl() {
    return getRandomImage().url;
}
