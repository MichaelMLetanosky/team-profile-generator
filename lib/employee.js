class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email
    }
  
    getName() {
      return this.name.value
    }

    getId() {
      return this.id.value
    }

    getEmail() {
      return this.email.value
    }

    getRole() {
        return 'Employee';
  };
};

module.exports = Employee;