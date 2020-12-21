// Making class Intern and inheriting the class Employee

const Employee = require("./Employee");


class Intern extends Employee {
    /**
   * Create a Intern.
   * @param {string} name - Name of the Intern
   * @param {number} id - ID of the Intern
   * @param {string} email - Email of the Intern
   * @param {string} school - School of the Intern
   */
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;