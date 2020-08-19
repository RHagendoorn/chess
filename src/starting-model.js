import { getRook } from './pieces/rook.js';
import { getKnight } from './pieces/knight.js';
import { getBishop } from './pieces/bishop.js';
import { getQueen } from './pieces/queen.js';
import { getKing } from './pieces/king.js';
import { getPawn } from './pieces/pawn.js';

const startingModel = {
    board: [
        [
            getRook(true),
            getKnight(true),
            getBishop(true),
            getQueen(true),
            getKing(true),
            getBishop(true),
            getKnight(true),
            getRook(true)
        ],
        [
            ...new Array(8).fill(getPawn(true))
        ],
        ...new Array(4).fill([]),
        [
            ...new Array(8).fill(getPawn(false))
        ],
        [
            getRook(false),
            getKnight(false),
            getBishop(false),
            getQueen(false),
            getKing(false),
            getBishop(false),
            getKnight(false),
            getRook(false)
        ]
    ]
}

export default startingModel;