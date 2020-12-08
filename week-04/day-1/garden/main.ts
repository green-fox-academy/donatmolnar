'use strict';

import { Flower} from './flower';
import { Tree } from './tree';
import { Garden } from './garden';

let yellowFlower = new Flower ('yellow');
let blueFlower = new Flower ('blue');
let purpleTree = new Tree ('purple');
let orangeTree = new Tree ('orange');

let myGarden = new Garden ();

myGarden.addFlower(yellowFlower);
myGarden.addFlower(blueFlower);
myGarden.addTree(purpleTree);
myGarden.addTree(orangeTree);


