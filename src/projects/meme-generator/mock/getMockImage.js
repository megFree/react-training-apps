import meme from './img/meme.jpg';

export function getMockImage(name) {
    switch (name) {
    case 'meme.jpg':
        return meme;
    default:
        return new Error('Image not found!');
    }
}
