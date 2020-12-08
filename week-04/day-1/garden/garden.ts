'use strict';

import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  protected _numberOfPlants: number;
  protected _flowers: Flower[];
  protected _trees: Tree[];

  constructor() {
    this._flowers = [];
    this._trees = [];
  }
 
  public addFlower(flower: Flower): void {
    this._flowers.push(flower);
  }

  public addTree(tree: Tree): void {
    this._trees.push(tree);
  }
}