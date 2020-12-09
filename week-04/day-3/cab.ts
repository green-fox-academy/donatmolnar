'use strict';

export class CAB {
  private _counter: number;
  private _state: boolean;

  constructor(guess: number) {

  }
}

function playCAB(playerGuess: string) {
  let bull: number = 0;
  let cow: number = 0;

  let getNum: string = (Math.floor(Math.random() * 10000)).toString();
    console.log(`The secrect number was: ${getNum}.`);
    
  for (let i = 0; i < getNum.length; i++) {
    for (let j = 0; j < playerGuess.length; j++) {
      if ((getNum[i] == playerGuess[j]) && (i == j)) {
        bull++;
      } else if ((getNum[i] == playerGuess[j]) && (i != j)) {
        cow++;
      }
    }
  }

  if (bull == 0 && cow == 0) {
    console.log("try again\n");
  } else if (bull == playerGuess.length) {
    console.log(`${bull} bulls! you won the game!!!\n`); 
  } else {
    console.log(`${bull} bull(s), ${cow} cow(s)!\n`);
  }
}

playCAB('1234');
