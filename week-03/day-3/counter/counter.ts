'use strict';

export class Counter {
  private _number: number;

  constructor(integer?: number) {
    if (integer !== undefined) {
      this._number = integer;
    } else {
      this._number = 0;
    }
  }

  add(number?: number): number {
    return (this._number += number);
  }

  get(): number {
    return this._number;
  }

  reset(): void {
    this._number = 0;
  }
}
