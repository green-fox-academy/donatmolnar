'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCodingHours: number = 6;
let numberOfWeeks: number = 17;
let workingDays: number = 5;
let weeklyWorkHours: number = 52;

let weeklyCodingHours: number = dailyCodingHours * workingDays;

// Coding hours in a semester
console.log('Coding hours in a semester: ' + numberOfWeeks * weeklyCodingHours);

//Percentage of coding hours
console.log('Percentage of coding hours: ' + weeklyCodingHours / weeklyWorkHours * 100 + '%');

