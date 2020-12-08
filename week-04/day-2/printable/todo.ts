'use strict';

export class ToDo {
  public _task: string;
  public _priority: string;
  public _done: boolean;

  constructor(task: string, priority: string, done: boolean) {
    this._task = task ?? 'you are free';
    this._priority = priority ?? 'moderate';
    this._done = done ?? false;
  }

  public printAllFields(): void {
    console.log(
      `Task: ${this._task} | Priority: ${this._priority} | Done: ${this._done}`
    );
  }
}
