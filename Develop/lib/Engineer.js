// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    
    //constructor function with parameters to be passed to Engineer
    constructor(name, id, email, github) {

        //parameters passed from parent Employee object to be included in Engineer child object
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return("Engineer");
    }
}

//exports Engineer to be used in other files
module.exports = Engineer;