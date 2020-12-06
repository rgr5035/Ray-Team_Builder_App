//Variable declarations to link other files for use in functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//variable declaration of employees with empty array (where the user's answers will be pushed to)
const employees = [];

//initial questions for user to begin application functionality
const initQuestions = () => {
    inquirer
        .prompt ([
            {
                type: "list",
                message: "What would you like to do?",
                name: "todo",
                choices: ["Add Manager", "Add Engineer", "Add Intern", "Create Team"] 
            },
        ])
        .then((data) => {
            switch (data.todo) {
                    case "Add Manager": {
                        managerQuestions();
                        break;
                    }
                    case "Add Engineer": {
                        engineerQuestions();
                        break;
                    }
                    case "Add Intern": {
                        internQuestions();
                        break;
                    }
                    case "Create Team": {
                        createTeam();
                    }
                }
        })
}

//questions generated when user chooses to add a manager
const managerQuestions = () => {
    inquirer
        .prompt([
            {   
                type: "input",
                message: "Please enter the manager's name",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the manager's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the manager's email",
                name: "email", 
            },
            {
                type: "input",
                message: "Please enter the manager's office number",
                name: "officeNumber",
            },
        ])
        .then ((data) => {
            const newManager = new Manager (data.name, data.id, data.email, data.officeNumber);
            employees.push(newManager);
            initQuestions();
        })
}

//questions generated when user chooses to add an engineer
const engineerQuestions = () => {
    inquirer
        .prompt([
            {   
                type: "input",
                message: "Please enter the engineer's name",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the engineer's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the engineer's email",
                name: "email", 
            },
            {
                type: "input",
                message: "Please enter the engineer's GitHub username",
                name: "github",
            },
        ])
        .then ((data) => {
            const newEngineer = new Engineer (data.name, data.id, data.email, data.github);
            employees.push(newEngineer);
            initQuestions();
        })
}

//questions generated when user chooses to add an intern
const internQuestions = () => {
    inquirer
        .prompt([
            {   
                type: "input",
                message: "Please enter the intern's name",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the intern's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the intern's email",
                name: "email", 
            },
            {
                type: "input",
                message: "Please enter the intern's school",
                name: "school",
            },
        ])
        .then ((data) => {
            const newIntern = new Intern (data.name, data.id, data.email, data.school);
            employees.push(newIntern);
            initQuestions();
        })
}

//function that checks for team.html file and output directory existence, and overwrites with new information once the user chooses to create team
const createTeam = () => {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR);
        }
        return fs.writeFileSync(outputPath, render(employees));
}

//call function to begin the application's question prompts
initQuestions();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
