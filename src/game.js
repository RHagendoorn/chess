import { render, getMouse$ } from './render.js';
import { getStartingModel$ } from './starting-model.js'
import { findPieceByCoordinates } from './util';
import { scan, map, mergeMap } from 'rxjs/operators';
import constants from './constants.js';

const getSquare = (y, x) => ([Math.floor(y / constants.FIELD_SIZE), Math.floor(x / constants.FIELD_SIZE)]);

const getModel$ = startingModel => getMouse$().pipe(
    map(event => getSquare(event.clientY, event.clientX)),
    scan(performAction, startingModel)
);

export const start = () => {
    getStartingModel$().pipe(
        mergeMap(getModel$)
    ).subscribe(render);
}

const updatePiecesWithMove = (pieces, oldY, oldX, newY, newX) => 
    pieces.map(piece => piece.x === oldX && piece.y === oldY ? {...piece, y: newY, x: newX } : piece);

const performAction = (model, selection) => {
    if (model.selection.length > 0) {
        const capturedPiece = findPieceByCoordinates(model.pieces, ...selection);
        const pieces = capturedPiece ?  model.pieces.filter(piece => piece !== capturedPiece) : model.pieces;
        const updatedPieces = updatePiecesWithMove(pieces, ...model.selection, ...selection);
        return {...model, pieces: updatedPieces, selection: []};
    }
    return {...model, pieces: [...model.pieces], selection};
}
