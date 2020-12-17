// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}


// if school is empty string, throw error
// check school.length===0


module.exports = Intern;