'use strict';

import { Aircraft } from './aircraft';

export class Carrier {
  private _aircraftStorage: Aircraft[];
  private _ammoStorage: number;
  private _hp: number;

  constructor(ammoStorage: number, hp: number) {
    this._ammoStorage = ammoStorage;
    this._hp = hp;
  }

  public add(aircraft: Aircraft): void {
    this._aircraftStorage.push(aircraft);
  }

  public fill(): void {
    for (let i: number = 0; i < this._aircraftStorage.length; i++) {
      if (this._aircraftStorage[i].isPriority) {
        this._ammoStorage = this._aircraftStorage[i].refill(this._ammoStorage);
      }
    }
  }

  public fight() {

  }

  public getStatus() {

  }
}

