
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