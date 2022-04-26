// Packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const { exit } = require("process");
// const generateMarkdown = require(`./utils/generateMarkdown`);

// An array of questions for user input
const employeeQuestions = [{
    name: `role`, type: `list`,
    message: `I would like to add a...`,
    choices: [`Manager`, `Engineer`, `Intern`, `None, I'm finished`],
    },{
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

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(`./output/${fileName}`, generateMarkdown(data), (e) => e ? console.log(e) : console.log(`Success! File is in Output Folder`))
// }


// TODO: Create a function to initialize app
// Starts the inquirer to prompt answers to feed to the writeToFile function

function addEmployee() {
  inquirer
    .prompt(employeeQuestions)
    .then((answers) => {
        console.log(answers)
    })
    .catch((e) => {if (e) throw e;});
}

// Function call to initialize app
addEmployee();