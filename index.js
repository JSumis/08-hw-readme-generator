// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies? (npm i)',
        name: 'dependencies',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute',
      },
  ])


// TODO: Create a function to write README file

.then((data) => {
const readMeContent = generateMarkdown(data);

fs.writeFile('README1.md', readMeContent, (err) =>
  err ? console.error(err) : console.log('You successfully created a README file!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

