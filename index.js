// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions =  inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your application.",
  },
  {
    type:"input",
    name: "installation",
    message: "Provide instructions for installing the application."
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Provide information of usage for the application.",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "what are guidelines for contribution to this application?",
  },
  {
    type: "input",
    name:"testInstructions",
    message: "provide instructions for testing teh application"
  }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
