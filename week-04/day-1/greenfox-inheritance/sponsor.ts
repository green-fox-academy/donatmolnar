'use strict';

import { Person } from './person';

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string, hiredStudents?: number) {
    super(name, age, gender);
    this._company = company;
    this._hiredStudents = hiredStudents ?? 0;
  }

  public introduce() {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} 
    who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }

  public hire() {
    this._hiredStudents++;
  }

  public getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
}