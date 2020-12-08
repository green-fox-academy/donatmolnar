'use strict';

export class Vehicle {
  private _brand: string;
  private _runsOn: string;
  private _speed: number;

  constructor(brand: string, runsOn: string, speed: number) {
    this._brand = brand ?? 'noname';
    this._runsOn = runsOn ?? 'gas';
    this._speed = speed ?? 100;
  }
}
