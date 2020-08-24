import imageWhite from '../assets/rook_white.png';
import imageBlack from '../assets/rook_black.png';
import { loadImage } from '../util.js';
import { map } from 'rxjs/operators';

export const getRook$ = (isWhite, y, x) => {
    return loadImage(isWhite ? imageWhite : imageBlack).pipe(
        map(img => ({ 
            img,
            isWhite,
            y,
            x
        }))
    );
}
