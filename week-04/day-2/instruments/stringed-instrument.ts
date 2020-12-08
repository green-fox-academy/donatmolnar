'use strict';

import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  /*constructor(name?: string) {
    super(name);
  }
*/
  sound(): void {
    this.play();
  }
}
