// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
// const username = process.argv[2]
// const email = process.argv[3]
// const title = process.argv[4]
// const description = process.argv[5]
// const license = process.argv[6]
// const dependencies = process.argv[7]
// const test = process.argv[8]
// const repo = process.argv[9]
// const contribute = process.argv[10]

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
    // {
    //   type: 'password',
    //   message: 'What is your password?',
    //   name: 'password',
    // },
    // {
    //   type: 'password',
    //   message: 'Re-enter password to confirm:',
    //   name: 'confirm',
    // },
  ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// from 13-Ins_Read-Write-File
.then((data) => {
const readMeContent = generateMarkdown(data);

fs.writeFile('README1.md', readMeContent, (err) =>
  err ? console.error(err) : console.log('Success!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

