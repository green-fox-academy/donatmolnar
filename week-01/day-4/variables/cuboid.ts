'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aSide: number = 10;
let bSide: number = 10;
let cSide: number = 10;

let surfaceArea: number = 2 * (aSide * bSide + aSide * cSide + cSide * bSide);
let volume: number = (aSide * bSide * cSide);

console.log("Surface Area: " + surfaceArea)
console.log("Volume: " + volume);
