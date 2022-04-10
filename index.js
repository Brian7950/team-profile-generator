const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require('fs');
let htmlTemp = "";

//starts application and asks user to select a role to input info for
function init() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Add Manager", "Add Intern", "Add Engineer", "I don't want to add any more members"],
            message: "What would you like to do?",
            name: "userChoice"
        }
    ]).then(({ userChoice }) => {
        switch (userChoice) {
            case "Add Manager":
                getManagerDetails();
                break;
            case "Add Intern":
                getInternDetails();
                break;
            case "Add Engineer":
                getEngineerDetails();
                break;
            default:
            // createPage();    <-work on this 
        }
    })
}

//create Manager object if user selects 'Add Manager' 
function getManagerDetails() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager's name:",
            name: "name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            message: "Enter Manager ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Office number:",
            name: "officeNumber"
        }
    ]).then(({ name, id, email, officeNumber }) => {
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
        addAnotherMember()
    })
};

//create engineer object if user selects 'Add Engineer'
function getEngineerDetails(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's name:",
            name: "name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type:"input",
            message:"Enter Engineer's ID #",
            name:"id"
        },
        {
            type: "input",
            message: "Enter Engineer's Email:",
            name: "email"
        },
        {
            type:"input",
            message:"Enter Engineer's GitHub username",
            name:"github"
        }
    ])
    .then(({ name, id, email, github }) => {
        const engineerObj = new Engineer(name, id, email, github)
        htmlTemp += ` <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${engineerObj.name} title</h5>
            <p class="card-text">${engineerObj.email}</p>
            <p class="card-text">${engineerObj.id}</p>
            <p class="card-text">${engineerObj.github}</p>
          </div>
        </div>
      </div>`
        addAnotherMember();
    })
};

//creete Intern Object if user selects 'Add Intern'
function getInternDetails() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's name:",
            name: "name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            message: "Enter Intern ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Intern Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter School name:",
            name: "school"
        }
    ]).then(({ name, id, email, school }) => {
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
      console.log(internObj);
        addAnotherMember();
    })
};

//function to add additional members
function addAnotherMember() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Do you want to add another Team member?',
            default: true,
            name: 'continue'
        }
    ])
        .then(confirmation => {
            console.log(confirmation);
            if (confirmation.continue === true) {
                return init()
            } else {
                if (confirmation.continue === false)
                    return console.log("Creating Team Page");
            }
        })
};

init();

