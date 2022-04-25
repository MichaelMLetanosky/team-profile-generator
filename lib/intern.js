// Import the parent class
const Employee = require('./employee');

// `Intern` class that extends the `Employee` class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  };

  getSchool() {

  }

  //overridden to return 'Intern'
  getRole() {
      
  }
}