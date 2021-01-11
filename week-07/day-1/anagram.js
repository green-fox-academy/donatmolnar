'use strict';

function checkAnagram(string1, string2) {
  if (string1 === undefined || string2 === undefined) {
    console.log('Missing parameter');
  } else if (string1.length !== string2.length) {
    return false;
  } else {

    
    let lowerCaseString1 = string1.toLowerCase();
    let lowerCaseString2 = string2.toLowerCase();
    
    if (lowerCaseString1 === lowerCaseString2) {
      return false;
    }
    
    let sortedString1 = lowerCaseString1.split('').sort().join('');
    let sortedString2 = lowerCaseString2.split('').sort().join('');
    
    return sortedString1 === sortedString2;
  }
}

module.exports = checkAnagram;
