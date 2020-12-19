// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, id, email) {

        // if(typeof id !== "number" || isNaN(id)||id<0){
        //     console.log("erroooorrrrr");
        //     return this.id;
        // }
        // if (!name || !name.trim().length) {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        // }
    //     if (typeof id !== "number" || isNaN(id) || id < 0) {
    //         throw new Error("Expected parameter 'id' to be a non-negative number");
    //     }
    //     if (!email || !email.trim().length) {
    //         throw new Error("Expected parameter 'name' to be a non-empty string");
    //     }
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
getName() {
    return this.name;
}
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


// id array

// if name is not a string throw error
// if role is empty or not string , throw error
// if id is empty , throw error
// if email is not string or empty, throw error

// if(name.trim().length===0||!name === "string"){
//     throw new Error("Name should be non-empty String");
// }
// else if(role.trim().length===0){
//     throw new Error("Role can't be Empty");
// }
// else if(isNaN(id)||!id==="number"){
//     throw new Error("Id should be a non-negative number");
// }
// else if(email.trim().length===0||!email== "string")
// {
//     throw new Error("Email should be a non-empty string");
// }


module.exports = Employee;