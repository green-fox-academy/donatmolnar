'use strict';

import { StringedInstrument } from './stringed-instrument';

export class ElectricGuitar extends StringedInstrument {
  protected _numberOfStrings: number;
  private _sound: string;

  constructor(numOfString?: number) {
    super();
    this._numberOfStrings = numOfString ?? 6;
    this._sound = 'Twang';
  }

  play(): void {
    console.log(
      `Electric Guitar, a ${this._numberOfStrings}-stringed instrument that goes ${this._sound}.`
    );
  }
}
