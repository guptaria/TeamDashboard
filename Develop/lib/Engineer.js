// Making class Engineer and inheriting the class Employee

const Employee = require("./Employee");

class Engineer extends Employee {
    /**
  * Create a Engineer.
  * @param {string} name - Name of the Engineer
  * @param {number} id - ID of the Engineer
  * @param {string} email - Email of the Engineer
  * @param {string} github - Github username of the Engineer
  */
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}
// Exporting Engineer 
module.exports = Engineer;