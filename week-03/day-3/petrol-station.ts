'use strict';

class Station {
  _gasAmount: number;

  constructor() {
    this._gasAmount = 1000;
  }

  refill(car: Car) {
    this._gasAmount -= car._capacity;
    car._gasAmount += car._capacity;
  }
}

class Car {
  _gasAmount: number;
  _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }
}

let station = new Station();
let car = new Car();

station.refill(car);

console.log('Station gas amount: ' + station._gasAmount);
console.log('Car gas amount: ' + car._gasAmount);
