import { getRook$ } from './pieces/rook.js';
import { getKnight$ } from './pieces/knight.js';
import { getBishop$ } from './pieces/bishop.js';
import { getQueen$ } from './pieces/queen.js';
import { getKing$ } from './pieces/king.js';
import { getPawn$ } from './pieces/pawn.js';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const getStartingModel$ = () => {
    return forkJoin(
        getRook$(false, 0, 0),
        getKnight$(false, 0, 1),
        getBishop$(false, 0, 2),
        getQueen$(false, 0, 3),
        getKing$(false, 0, 4),
        getBishop$(false, 0, 5),
        getKnight$(false, 0, 6),
        getRook$(false, 0, 7),
        getPawn$(false, 1, 0),
        getPawn$(false, 1, 1),
        getPawn$(false, 1, 2),
        getPawn$(false, 1, 3),
        getPawn$(false, 1, 4),
        getPawn$(false, 1, 5),
        getPawn$(false, 1, 6),
        getPawn$(false, 1, 7),
        getPawn$(true, 6, 0),
        getPawn$(true, 6, 1),
        getPawn$(true, 6, 2),
        getPawn$(true, 6, 3),
        getPawn$(true, 6, 4),
        getPawn$(true, 6, 5),
        getPawn$(true, 6, 6),
        getPawn$(true, 6, 7),
        getRook$(true, 7, 0),
        getKnight$(true, 7, 1),
        getBishop$(true, 7, 2),
        getQueen$(true, 7, 3),
        getKing$(true, 7, 4),
        getBishop$(true, 7, 5),
        getKnight$(true, 7, 6),
        getRook$(true, 7, 7)
    ).pipe(
        map(pieces => ({
            pieces,
            isWhiteTurn: true,
            selection: []
        }))
    )
};
