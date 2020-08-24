import { Observable } from 'rxjs';

export const findPieceByCoordinates = (pieces, y, x) => pieces.find(piece => piece.x === x && piece.y === y);

export const loadImage = src => {
    return Observable.create(obs => {
        const img = new Image();
        img.onload = () => {
            obs.next(img);
            obs.complete();
        }
        img.src = src;
    });
}