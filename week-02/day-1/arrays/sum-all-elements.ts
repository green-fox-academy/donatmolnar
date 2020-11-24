'use strict';

// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console

let numbers = [3, 4, 5, 6, 7];

function calculateSum2(input: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i <= input.length; i++) {
		sum += input[i];
	}
	return sum;
}

console.log(calculateSum2(numbers[]));
