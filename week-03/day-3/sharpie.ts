'use strict';

export class Sharpie {
  private _color: string;
  private _width: number;
  private _inkAmount: number;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }

  use() {
    this._inkAmount--;
  }

  public getInkAmount(): number {
    return this._inkAmount;
  }
}

let blackSharpie = new Sharpie('black', 0.5);
blackSharpie.use();
blackSharpie.use();
console.log(blackSharpie);
