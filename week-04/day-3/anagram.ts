'use strict';

export function checkAnagram(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  let lowerCaseString1 = string1.toLowerCase();
  let lowerCaseString2 = string2.toLowerCase();

  if (lowerCaseString1 === lowerCaseString2) {
    return false;
  }

  let sortedString1 = lowerCaseString1.split('').sort().join('');
  let sortedString2 = lowerCaseString2.split('').sort().join('');

  return sortedString1 === sortedString2;
}

console.log(checkAnagram('ami', 'ami'));
console.log(checkAnagram('vmi', 'ami'));
