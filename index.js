// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
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
    type: "input",
    name: "installation",
    message: "Provide instructions for installing the application.",
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
    name: "testInstructions",
    message: "provide instructions for testing the application",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    const readmePageContent = generateMarkdown(response);

    fs.writeFile("./generated-readmes/readme.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("sucessfuly created readme!")
    );
  });
}

// Function call to initialize app
init();
