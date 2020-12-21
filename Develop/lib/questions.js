
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
    validate: answer => {
      const containsNumsSpecial = /[^a-zA-Z]/g; // Only allow letters
      const temp = answer.match(containsNumsSpecial);   //using regex

      // return false if user input is empty
      if (answer.length === 0) {
        return "Name should be a string and cannot be empty";

      };

      // return false if name contains any special characters or numbers
      if (temp !== null) {
        return "Name should not contain special characters or numbers";
      }

      return true;
    }
  },

  {
    type: 'input',
    name: 'id',
    message: "What is your manager's id?",

    validate: answer => {
      if (isNaN(answer)) {
        return "Invalid number";


      }
      return true;

    }


  },
  {
    type: 'input',
    name: 'email',
    message: "What is your manager's email?",
    validate: answer => {
      // return false if user input is empty
      if (answer.length === 0) {
        return "Email cannot be empty";
      }
      return true;
    }

  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is your manager's officeNumber?",
    validate: answer => {
      if (isNaN(answer)) {
        return "Invalid number";
      }
      return true;

    }

  },

  //getting addPeople object using spread
  { ...addPeople }
];


const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your engineer's name?",
    validate: answer => {
      const containsNumsSpecial = /[^a-zA-Z]/g; // Only allow letters
      const temp = answer.match(containsNumsSpecial);   //using regex

      // return false if user input is empty
      if (answer.length === 0) {
        return "Name should be a string and cannot be empty";

      };

      // return false if name contains any special characters or numbers
      if (temp !== null) {
        return "Name should not contain special characters or numbers";

      }

      return true;
    }
  },

  {
    type: 'input',
    name: 'id',
    message: "What is your engineer's id?",
    validate: answer => {
      if (isNaN(answer)) {
        return "Invalid number";

      }
      return true;

    }

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your engineer's email?",
    validate: answer => {
      // return false if user input is empty
      if (answer.length === 0) {
        return "Email cannot be empty";
      }
      return true;
    }
  },
  
  {
    type: 'input',
    name: 'github',
    message: "What is your engineer's github?",
    validate: answer => {
      // return false if user input is empty
      if (answer.length === 0) {
        return "Github cannot be empty";
      }
      return true;
    }

  },
  //getting addPeople object using spread
  { ...addPeople }
];


const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your intern's name?",
    validate: answer => {
      const containsNumsSpecial = /[^a-zA-Z]/g; // Only allow letters
      const temp = answer.match(containsNumsSpecial);   //using regex

      // return false if user input is empty
      if (answer.length === 0) {
        return "Name should be a string and cannot be empty";

      };

      // return false if name contains any special characters or numbers
      if (temp !== null) {
        return "Name should not contain special characters or numbers";
      }

      return true;
    }
  },


  {
    type: 'input',
    name: 'id',
    message: "What is your intern's id?",
    validate: answer => {
      if (isNaN(answer)) {
        return "Invalid number";
      }
      return true;

    }

  },
  {
    type: 'input',
    name: 'email',
    message: "What is your intern's email?",
    validate: answer => {
      // return false if user input is empty
      if (answer.length === 0) {
        return "Email cannot be empty";
      }
      return true;
    }

  },
  {
    type: 'input',
    name: 'school',
    message: "What is your intern's school?",
    validate: answer => {
      // return false if user input is empty
      if (answer.length === 0) {
        return "School cannot be empty";
      }
      return true;
    }

  },
  //getting addPeople object using spread
  { ...addPeople }
];

module.exports = {
  engineerQuestions,
  managerQuestions,
  internQuestions
}