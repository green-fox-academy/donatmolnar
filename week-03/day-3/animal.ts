'use strict';

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat() {
    this._hunger--;
  }

  public drink() {
    this._thirst--;
  }

  public play() {
    this._hunger++;
    this._thirst++;
  }
}

let dog = new Animal();
dog.eat();
dog.drink();
dog.play();
dog.play();
console.log(dog);
