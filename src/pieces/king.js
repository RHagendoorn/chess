import imageWhite from '../assets/king_white.png';
import imageBlack from '../assets/king_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getKing$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    );
}