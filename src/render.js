'use strict';

import constants from './constants.js';
import stateModel from './model.js';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

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
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 8 * size, 8 * size);
  ctx.fillStyle = 'black';
  ctx.strokeRect(0, 0, 8 * size, 8 * size);
  ctx.fillStyle = 'grey';
  new Array(8).fill().forEach((val, idx) => drawRow(idx, size))
}

const drawPieces = model => {
  ctx.fillStyle = 'black';
  ctx.font = "25px Arial";
  model.board.forEach((row, rowIdx) => {
    row.forEach((piece, idx) => {
      if (!piece) return;
      ctx.fillText(piece.symbol, 0.3 * size + idx * size, 0.7 * size + rowIdx * size);
    })
  });
}

const render = model => {
  drawField();
  drawPieces(model);
}

const setUpEvents = () => {
  fromEvent(canvas, 'click').pipe(
    map(event => ([Math.floor(event.clientX / size), Math.floor(event.clientY / size)]))
  ).subscribe(val => console.log(val));
}

const start = () => {
  stateModel.subscribe(render);
  setUpEvents();
}

export {
  start
}

