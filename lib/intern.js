// Import the parent class
const Employee = require('./employee');

// `Intern` class that extends the `Employee` class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(`Intern`, name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school.value;
  }
}

module.exports = Intern;