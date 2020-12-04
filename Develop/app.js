const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const initQuestions = () => {
    inquirer
        .prompt ([
            {
                type: "list",
                message: "What would you like to do?",
                name: "todo",
                choices: ["Create Team", "Add Employee", "Add Manager", "Add Engineer", "Add Intern"] 
            },
        ])
        .then((data) => {
            switch (data.todo) {
                    case "Create Team": {
                        //will need more code, will return a string of the template, write to the file
                        
                        render(employees);
                    }
                    case "Add Employee": {
        
                    }
                    case "Add Manager": {
                        managerQuestions();
                        break;
                    }
                    case "Add Engineer": {
        
                    }
                    case "Add Intern": {
        
                    }
                }
        })
}

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

initQuestions();


// inquirer 
//     .prompt ([
//         {   
//             type: "input",
//             message: "Please enter the Employee name",
//             name: "name",
//         },
//         {
//             type: "input",
//             message: "Please enter the employee ID",
//             name: "id",
//         },
//         {
//             type: "input",
//             message: "Please enter the employee email",
//             name: "email", 
//         },
//         {
//             type: "list",
//             message: "Please choose the employee role",
//             name: "role",
//             choices: ["Manager", "Engineer", "Intern"],
//         },
//         {
//             type: "input",
//             message: "Please enter the manager's office number",
//             name: "officeNumber",
//         },
//         {
//             type: "input",
//             message: "Please enter the engineer's gitHub username",
//             name: "github",
//         },
//         {
//             type: "input",
//             message: "Please enter the intern's school",
//             name: "school",
//         },
//         {
//             type: "list",
//             message: "Would you like to add another employee?",
//             name: "add",
//             choices: ["Yes", "No",]
//         }
//     ])
    

        
    
//     fs.writeFile(
//         "team.html"

//     )
    









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
