// Import the parent class
const Employee = require('./employee');

// `Engineer` class that extends the `Employee` class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber()

  getRole() //overridden to return 'Manager'
}