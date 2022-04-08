const Employee = require('./Employee');
class Engineer extends Employee{
    constructor(name, id, email,github){
        super(name,id,email)
        this.github = github;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Engineer"
    }
}
    

module.exports = Engineer;