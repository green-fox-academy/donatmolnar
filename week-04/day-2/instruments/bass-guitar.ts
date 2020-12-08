'use strict';

import { StringedInstrument } from './stringed-instrument';

export class BassGuitar extends StringedInstrument {
  protected _numberOfStrings: number;
  private _sound: string;

  constructor(numOfString?: number) {
    super();
    this._numberOfStrings = numOfString ?? 4;
    this._sound = 'Duum-duum-duum';
  }

  play(): void {
    console.log(
      `Bass Guitar, a ${this._numberOfStrings}-stringed instrument that goes ${this._sound}.`
    );
  }
}
