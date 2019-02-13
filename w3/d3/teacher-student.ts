'use strict';

class Teacher {

  teach(student) {
    student.learn();
  };

  answer() {
    console.log('teacher answered');
  };

};


class Student {

  learn() {
    console.log('student learned')
  };

  question(teacher) {
    teacher.answer();
  };

};

const student = new Student;
const teacher = new Teacher;

student.question(teacher);
teacher.teach(student);
