'use strict';

// Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  const steven = Object.create(PersonProto);
  const StudentProto = Object.create(PersonProto);
  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };
  StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  const jay = Object.create(StudentProto);
  jay.init('Jay', 2010, 'Computer Science');
  jay.introduce();
  jay.calcAge();