import imageWhite from '../assets/queen_white.png';
import imageBlack from '../assets/queen_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getQueen$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    );
}