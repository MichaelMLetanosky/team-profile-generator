class Employee {
    constructor(role, name, id, email) {
      this.role = role;
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name.value;
    }

    getId() {
      return this.id.value;
    }

    getEmail() {
      return this.email.value;
    }

    getRole() {
        return this.role;
  }
}

module.exports = Employee;