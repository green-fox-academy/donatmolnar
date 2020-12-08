'use strict';

import { Flower } from './flower';
import { Tree } from './tree';
import { Garden } from './garden';

let myGarden = new Garden();

let yellow = new Flower('yellow');
let blue = new Flower('blue');
let purple = new Tree('purple');
let orange = new Tree('orange');

myGarden.addPlant(yellow);
myGarden.addPlant(blue);
myGarden.addPlant(purple);
myGarden.addPlant(orange);

myGarden.printAll();
myGarden.waterAll(40);
myGarden.printAll();
myGarden.waterAll(70);
myGarden.printAll();
