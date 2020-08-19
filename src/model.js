'use strict';

import { BehaviorSubject } from 'rxjs';
import { reduce } from 'rxjs/operators';
import startingModel from './starting-model.js';

const reducer = (acc, action) => {
    switch(action.type) {
        case 'SELECT_FIELD':

    }
    return acc;
}

const model = new BehaviorSubject(startingModel);

export default model;
