'use strict';

import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name?: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student): void {
    this._students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this._mentors.push(mentor);
  }

  public info(): void {
    console.log(`The ${this._name} cohort has size of ${this._students.length} students 
    and size of ${this._mentors.length} mentors.`);
  }
}