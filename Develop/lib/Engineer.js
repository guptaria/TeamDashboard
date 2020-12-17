// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");



class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}

//if github is not string or empty, throw error

module.exports = Engineer;