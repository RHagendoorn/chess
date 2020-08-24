import { forkJoin } from 'rxjs';
import whiteBishop from './assets/bishop_white.png';
import blackBishop from './assets/bishop_black.png';
import whiteKing from './assets/king_white.png';
import blackKing from './assets/king_black.png';
import whitePawn from './assets/pawn_white.png';
import blackPawn from './assets/pawn_black.png';
import whiteKnight from './assets/knight_white.png';
import blackKnight from './assets/knight_black.png';
import whiteQueen from './assets/queen_white.png';
import blackQueen from './assets/queen_black.png';
import whiteRook from './assets/rook_white.png';
import blackRook from './assets/rook_black.png';



export const getLoadAssets$ = () => forkJoin(
    loadImage(whiteBishop),
    loadImage(blackBishop),
    loadImage(whiteKing),
    loadImage(blackKing),
    loadImage(whitePawn),
    loadImage(blackPawn),
    loadImage(whiteKnight),
    loadImage(blackKnight),
    loadImage(whiteQueen),
    loadImage(blackQueen),
    loadImage(whiteRook),
    loadImage(blackRook)
);