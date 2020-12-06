// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    
    //constructor function with parameters to be passed to Manager
    constructor(name, id, email, officeNumber) {

        //parameters passed from parent Employee object to be included in Manager child object
        super(name, id, email)
        this.officeNumber = officeNumber;
        }
    getOfficeNumber() {
        return this.officeNumber;
    }    
    getRole() {
        return("Manager");
    }
}

//exports Manager to be used in other files
module.exports = Manager;