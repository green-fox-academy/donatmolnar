'use strict';

import { Domino } from './domino';
import { ToDo } from './todo';

let domino = new Domino(3, 2);
let todo = new ToDo('Buy milk', 'high', true);

domino.printAllFields();
todo.printAllFields();
