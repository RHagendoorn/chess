import imageWhite from '../assets/pawn_white.png';
import imageBlack from '../assets/pawn_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getPawn$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    );
}