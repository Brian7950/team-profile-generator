const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require('fs');

const teamMemberArray = [];

//starts application and asks user to select a role to input info for
function init() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Add Manager", "Add Intern", "Add Engineer", "EXIT"],
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
            message: "Enter Manager ID #:",
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
        const managerObj = new Manager(name, id, email, officeNumber);
        //add this obj to team member array 
        teamMemberArray.push(managerObj)
        console.log(teamMemberArray);//test

        addAnotherMember()
    })
};

//create engineer object if user selects 'Add Engineer'
function getEngineerDetails() {
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
            type: "input",
            message: "Enter Engineer's ID #",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Engineer's Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Engineer's GitHub username",
            name: "github"
        }
    ])
        .then(({ name, id, email, github }) => {
            const engineerObj = new Engineer(name, id, email, github)
            //push Engineer object to team array 
            teamMemberArray.push(engineerObj);
            console.log(teamMemberArray); //test
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
            message: "Enter Intern ID #:",
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
        const internObj = new Intern(name, id, email, school);
        // add intern object to array 
        teamMemberArray.push(internObj);
        console.log(teamMemberArray);
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
                createHtmlPage();
            }
        })
};

function createHtmlPage() {
    //create html file to view apps output
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(teamMemberArray), "utf-8");
};


init();

