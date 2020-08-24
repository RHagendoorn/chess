import imageWhite from '../assets/bishop_white.png';
import imageBlack from '../assets/bishop_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getBishop$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    )
}