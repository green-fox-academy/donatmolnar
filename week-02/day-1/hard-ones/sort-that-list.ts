'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

let array: number[] = [];

function bubble(input: number[]) {
    input.sort((a: number, b: number) => a - b);
    }

function advancedBubble(input: number[], input2: boolean) {
    if (input2 == true) {
        input.sort((a: number, b: number) => a - b);
    }
}  
//console.log(notSoCrypticMessage.sort((a, b) => a - b));


//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]

console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]