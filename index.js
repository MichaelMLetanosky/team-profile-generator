// Packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const { exit } = require("process");
const gm = require(`./lib/generateMarkdown`);
// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
let gatheredData = [];


// An array of roles
const roleQuestion = [{
    name: `role`, type: `list`,
    message: `I would like to add a...`,
    choices: [`Engineer`, `Intern`, `No, I'm finished`],
}]

// Questions to gather data based on role
const employeeQuestions = [{
    name: `employeeName`, type: `input`,
    message: `What is their name?`,
    },{
    name: `id`, type: `input`,
    message: `What is their Employee ID?`,
    },{
    name: `email`, type: `input`,
    message: `What is their email?`,
    },{
    name: `officeNumber`, type: `input`,
    message: `What is their officeNumber?`,
    when: (answers) => {
        if (answers.role === `Manager`) {
            return true;
        };
    }
    },{
    name: `github`, type: `input`,
    message: `What is their gitHub username?`,
    when: (answers) => {
        if (answers.role === `Engineer`) {
            return true;
        };
    }
    },{
    name: `school`, type: `input`,
    message: `What is their school?`,
    when: (answers) => {
        if (answers.role === `Intern`) {
            return true;
        };
    }
}]

// Initial function that starts gathering info about the project manager
function init() {
    //reset gatheredData
    gatheredData = [];
    console.log(`Let's start with a manager!`)
    // Sets the first input team members role to be the only Manager
    gatherData({ role: 'Manager' })
}

// Function that gathers info about the chosen employee
function gatherData(role) {
  inquirer
    .prompt(employeeQuestions, role)
    .then((answers) =>{
        // Gets an object for the employee and adds to an array
        gatheredData = gatheredData.concat([answers]);
        addEmployee();
    })
    .catch((e) => {if (e) throw e;});
};

// Allows the user to either select they are done or to add additional employees
function addEmployee() {
  console.log (`How about another employee?`)
  inquirer
    .prompt(roleQuestion)
    .then((answers) => {
        if (answers.role === `No, I'm finished`) {
            buildPage(`index.html`, gatheredData);
            return;
        };
        gatherData(answers);
    })
    .catch((e) => {if (e) throw e;});
};


// // TODO: Create a function to write index.html
function buildPage(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, gm.generateMarkdown(data), (e) => e ? console.log(e) : console.log(`Success! File is in Output Folder`))
}

// function generateMarkdown (data) {
//     console.log(data);
// }

// TODO: Create a function to initialize app
// Function call to initialize app
init();