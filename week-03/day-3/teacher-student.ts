'use strict';

class Student {
  learn() {
    console.log('Student is learning something new.');
  }

  question(teacher: Teacher) {
    return teacher.answer();
  }
}

class Teacher {
  teach(student: Student) {
    return student.learn();
  }

  answer() {
    console.log('The teacher is answering a question.');
  }
}

let student1 = new Student();
let teacher1 = new Teacher();

student1.question(teacher1);
teacher1.teach(student1);
