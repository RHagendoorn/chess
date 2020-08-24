import imageWhite from '../assets/knight_white.png';
import imageBlack from '../assets/knight_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getKnight$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    );
}