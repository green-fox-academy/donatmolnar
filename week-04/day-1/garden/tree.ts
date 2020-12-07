'use strict';

export class Tree {
  public _color: string;
  public _waterAmount: number;
  public _needsWater: boolean;

  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
  }

  getWater(amount: number): void {
    this._waterAmount += amount * 0.4;
  }

  needWater(): boolean {
    if (this._waterAmount < 10) {
       return true;
    } else {
        return false;
    }
  }
}