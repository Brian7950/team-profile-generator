const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemp = "";

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
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Manager name:",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Manager ID:",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Manager Email:",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Office number:",
            name:"officeNumber"
        }
    ]).then(({name,id,email,officeNumber}) => {
        const managerObj = new Manager(name, id, email, officeNumber) 
        htmlTemp += ` <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${managerObj.name} title</h5>
            <p class="card-text">${managerObj.email}</p>
            <p class="card-text">${managerObj.id}</p>
            <p class="card-text">${managerObj.officeNumber}</p>
          </div>
        </div>
      </div>`
    })
}

function getInternDetails(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Intern name:",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Intern ID:",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Intern Email:",
            name:"email"
        },
        {
            type:"input",
            message:"Enter School name:",
            name:"school"
        }
    ]).then(({name,id,email,school}) => {
        const internObj = new Intern(name, id, email, school) 
        htmlTemp += ` <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${internObj.name} title</h5>
            <p class="card-text">${internObj.email}</p>
            <p class="card-text">${internObj.id}</p>
            <p class="card-text">${internObj.school}</p>
          </div>
        </div>
      </div>`
    })
}

