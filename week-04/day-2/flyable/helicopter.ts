'use strict';

import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {
  public land(): void {
    console.log('Rapidly decreasing altitude.');
  }

  public fly(): void {
    console.log('I believe I can.');
  }

  public takeOff() {
    console.log('Fasten your seatbelts.');
  }
}
