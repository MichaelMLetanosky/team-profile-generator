// Import the parent class
const Employee = require('./employee');

// `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };

  getGithub() {
    return this.github.value;
  };

  getRole() //overridden to return 'Engineer'
};

