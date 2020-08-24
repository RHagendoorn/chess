'use strict';

import constants from './constants.js';
import { fromEvent } from 'rxjs';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const size = constants.FIELD_SIZE;

const drawRow = (nr, size) => {
  const start = nr % 2 === 1 ? 0 : size;
  new Array(4).fill().forEach((val, idx) => ctx.fillRect(
    start + idx * 2 * size, nr * size, size, size
  ));
}

const drawField = () => {
  ctx.clearRect(0, 0, 8 * size, 8 * size);
  ctx.fillStyle = constants.WHITE_COLOUR;
  ctx.fillRect(0, 0, 8 * size, 8 * size);
  ctx.fillStyle = constants.BORDER_COLOUR;
  ctx.strokeRect(0, 0, 8 * size, 8 * size);
  ctx.fillStyle = constants.BLACK_COLOUR;
  new Array(8).fill().forEach((val, idx) => drawRow(idx, size))
}

const drawPieces = model => {
  model.pieces.forEach(piece => ctx.drawImage(piece.img, piece.x * size, piece.y * size, size, size));
}

const render = model => {
  drawField();
  drawPieces(model);
}

const getMouse$ = () => {
  return fromEvent(canvas, 'click')}


export {
  render,
  getMouse$
}

