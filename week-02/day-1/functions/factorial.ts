'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial


let input: number = 5;

function factorio(input: number): number {
	let facto: number = 1;
	for (let i: number = 1; i <= input; i++) {
		facto *= i;
	}
	return facto;
}

console.log(factorio(input));