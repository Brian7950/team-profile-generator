const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require('fs');

function init(){
    inquirer.prompt([
        {
            type:"list",
            choices: ["add Manager", "add Intern", "add Engineer", "Exit application"],
            message: "What would you like to do?",
            name: "userChoice"
        }
    ]).then(({userChoice}) =>{
        switch(userChoice){
            case"add Manager":
                getManagerDetails();
                break;
            case"add Intern":
                getInternDetails();
                break;
            case"add Engineer":
                getEngineerDetails();
                break;
            default: 
                createPage();
        }
    })
}


function getManagerDetails(){
    inquirer.prompt()
}