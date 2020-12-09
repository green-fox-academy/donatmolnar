'use strict';

export class Sum {
  sum(num: number[]): number {
    let counter = 0;
    num.forEach((num) => (counter += num));
    return counter;
  }
}
