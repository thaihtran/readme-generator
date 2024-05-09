// Requires needed for application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');
// Questions that will ask user for README
const questions = [
    { // Name of project
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    { //Description of project
        type: "input",
        name: "description",
        message: "What is the purpose of your project?",
    }
    { //Installation of project
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    }
    {//Usage of project
        type: "input",
        name: "usage",
        message: "How do you use your project?",
    }
    { // License for yor project
        type: "checkbox",
        name: "license",
        message: "Please choose a license that is best suitable for your project.",
        choices: ["MIT", "APACHE 2.0", "Boos1.0", "MPL2.0", "none"],
    }
    { //Contributors to your project
        type: "input",
        name: "contributors",
        message: "Please provide names of any contributors",
    }
    { //Test to run the project
        test: "input",
        name: "test",
        message: "Please provide a walkthrough of required tests for your project if applicable",
    },
];

//Writing README.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(, fileName), data);
}

//Initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating a professional README.md file");
        writeToFile("./utils")
    }
}