import katieZaferesImage from '@/mock/img/katie-zaferes.png';
import mountainBikeImage from '@/mock/img/mountain-bike.png';
import weddingPhotography from '@/mock/img/wedding-photography.png';

export function getMockImage(name) {
    switch (name) {
    case 'katie-zaferes.png':
        return katieZaferesImage;
    case 'mountain-bike.png':
        return mountainBikeImage;
    case 'wedding-photography.png':
        return weddingPhotography;
    }

    return new Error('Image not found!');
}
