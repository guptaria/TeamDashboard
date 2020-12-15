// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,role,id,email)
    {
        this.name=name;
        this.role=role;
        this.id=id;
        this.email=email;

    }
    getName(){

    }
    getRole(){
        return "Employee";
    }
}




module.exports = Employee;

// 

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