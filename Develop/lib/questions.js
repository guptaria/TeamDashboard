
const addPeople = {


  type: "list",
  name: "addmore",
  message: "Select team member to add",
  choices: [

    "Engineer",
    "Intern",
    "I dont want to add more people"

  ]

}

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your manager's name?",
    // validate : answer => {
    //   const containsNumsSpecial = /\W/g;
    //   const temp  = answer.match(containsNumsSpecial);   //using regex
    //   console.log(temp);
    //   if(answer !== '' && temp === '')    // \W return all special characters ,\d will return all digits from [0-9]
    //   {
    //     return true;
    //   }
    //     return "Name should be a string and cannot be empty";
    // }
    },

  {
    type: 'input',
    name: 'role',
    message: "What is your manager's role?",

  },

  {
    type: 'input',
    name: 'id',
    message: "What is your manager's id?",

    validate: answer =>{
      // console.log(isNaN);
      if (isNaN(answer)) {
        console.log("  invalid number");
        return false;
       
      }
      return true;
     
    }

    // validate : function answer() {
    //   const containsNums = answer.match(/\d\W+/);   //using regex
    //   console.log(containsNums);
    //   if(answer !== '' && containsNums === '')
    //   {
    //     // console.log("its working");
    //     return true;
    //   }
    //     return "Name cannot be empty";
    // }
    

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your manager's email?",

  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is your manager's officeNumber?",

  },
  

  { ...addPeople }
];


const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your engineer's name?",
  },
  {
    type: 'input',
    name: 'role',
    message: "What is your engineer's role?",

  },

  {
    type: 'input',
    name: 'id',
    message: "What is your engineer's id?",

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your engineer's email?",

  },
  {
    type: 'input',
    name: 'github',
    message: "What is your engineer's github?",

  },
  { ...addPeople }
];


const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your intern's name?",
  },
  {
    type: 'input',
    name: 'role',
    message: "What is your intern's role?",

  },

  {
    type: 'input',
    name: 'id',
    message: "What is your intern's id?",

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your intern's email?",

  },
  {
    type: 'input',
    name: 'school',
    message: "What is your intern's school?",

  },
  { ...addPeople }
];

module.exports = {
  engineerQuestions,
  managerQuestions,
  internQuestions
}