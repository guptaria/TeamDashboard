// Making class Manager and inheriting the class Employee

const Employee = require("./Employee");


class Manager extends Employee {
    /**
   * Create a Manager.
   * @param {string} name - Name of the Manager
   * @param {number} id - ID of the Manager
   * @param {string} email - Email of the Manager
   * @param {number} officeNumber - Office Number of the Manager
   */

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;