// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// if office no is negative  number or string, throw error


module.exports = Manager;