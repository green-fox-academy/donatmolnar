'use strict';

import { Person } from "./person";

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

constructor (name: string, age: number, gender: string, previousOrganization: string, skippedDays?: number) { 
  super(name, age, gender);
  if (name === undefined && age === undefined && gender === undefined) {
    this._name = 'Jane Doe';
    this._age = 30;
    this._gender = 'female';
    this._previousOrganization = 'The School of Life'
  } else {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._previousOrganization = previousOrganization;
    this._skippedDays = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }

  public getGoal(): void {
    console.log(`My goal is: Be a junior software developer.`);
  }

  public skipDays(numberOfDays: number): void {
    this._skippedDays += numberOfDays;
  }
}



}
