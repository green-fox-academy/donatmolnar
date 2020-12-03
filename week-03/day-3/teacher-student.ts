'use strict';

class Student {
  _teacher;

  constructor() {
    this._teacher = new Teacher();
  }

  learn() {
    console.log('Student is learning something new.');
  }

  question(_teacher) {
    return this._teacher.answer();
  }
}

class Teacher {
  _student;

  constructor() {
    this._student = new Student();
  }

  teach(student) {
    return this._student.learn();
  }

  answer() {
    console.log('The teacher is answering a question.');
  }
}

let student1 = new Student();
let teacher1 = new Teacher();

student1.question(teacher1);
teacher1.teach(student1);
