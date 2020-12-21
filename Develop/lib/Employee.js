// Making Base /Parent class Employee and constructor

class Employee {
    /**  * Create a Employee.
     * @param {string} name - Name of the Employee
     * @param {number} id - ID of the Employee
     * @param {string} email - Email of the Employee */

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    // method to return employee
    getRole() {
        return "Employee";
    }

    getId() {
        return this.id;

    }
    getEmail() {
        return this.email;

    }

}

module.exports = Employee;