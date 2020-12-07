'use strict';

export class Flower {
  public _color: string;
  public _waterAmount: number;
  public _needsWater: boolean;

  constructor(color: string) {
    this._color = color;
    this._waterAmount = 0;
  }

  public getWater(amount: number): void {
    this._waterAmount += amount * 0.75;
  }

  public needWater(): boolean {
    if (this._waterAmount < 5) {
       return true;
    } else {
        return false;
    }
  }
}