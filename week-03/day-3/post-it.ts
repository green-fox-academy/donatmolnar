'use strict';

class PostIt {
  private _backgroundColor: string;
  private _text: string;
  private _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this._backgroundColor = backgroundColor;
    this._text = text;
    this._textColor = textColor;
  }
}

let postIt1 = new PostIt('orange', 'idea1', 'blue');
console.log(postIt1);

let postIt2 = new PostIt('pink', 'Awesome', 'black');
console.log(postIt2);

let postIt3 = new PostIt('yellow', 'Superb!', 'green');
console.log(postIt3);
