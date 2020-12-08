'use strict';

import { StringedInstrument } from './stringed-instrument';

export class Violin extends StringedInstrument {
  protected _numberOfStrings: number;
  private _sound: string;

  constructor(numOfString?: number) {
    super();
    this._numberOfStrings = numOfString ?? 4;
    this._sound = 'Screech';
  }

  play(): void {
    console.log(
      `Violin Guitar, a ${this._numberOfStrings}-stringed instrument that goes ${this._sound}.`
    );
  }
}
