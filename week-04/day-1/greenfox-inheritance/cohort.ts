'use strict';

import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
  protected _name: string;
  protected _students: string[];
  protected _mentors: string[];

  constructor(name?: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student): void {
    this._students.push();
  }

  public addMentor(mentor: Mentor): void {
    this._mentors.push();
  }

  info(): void {
    console.log(`The ${this._name} cohort has size of ${this._students} students 
    and size of ${this._mentors} mentors.`);
  }
/*
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints out 'The name cohort has size of students students and size of mentors mentors.'*/

}