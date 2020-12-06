// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    
    //constructor function with parameters to be passed to Employee
    constructor(name, id, email, school) {

        //parameters passed from parent Employee object to be included in Intern child object
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole () {
        return("Intern");
    }
}

//exports Intern to be used in other files
module.exports = Intern;