// TODO: Write code to define and export the Employee class
class Employee {
    
    //constructor function with parameters to be passed to Employee
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole() {
        return("Employee");
    }
}

//exports Employee to use in other files
module.exports = Employee;