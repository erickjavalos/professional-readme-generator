const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
// ****************************************************************************
// GLOBAL VARIABLES
// ****************************************************************************

// Questions to prompt user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter test instruction:',
        name: 'test',
      },
      {
          type: 'list',
          name: 'license',
          message: 'Choose a license:',
          choices: ['MIT', 'Apache_2.0', 'GNU GPLv3', 'None']
      },
      {
        type: 'input',
        message: 'Enter Github username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
      },
];

const fileName = "README.md"

// ****************************************************************************
// Helper Functions
// ****************************************************************************

// writes prompted answers to filename
function writeToFile(fileName, data) {
    
    // write to filename 
    fs.writeFile(fileName, data, 
        (err) => err ? console.log(err) : console.log("Successfully wrote to README.md")
    ) 
                
                    
}



// ****************************************************************************
// initialize
// ****************************************************************************

function init() {
    // prompt and process
    // return inquirer.prompt(questions)
    return inquirer.prompt(questions)
}

// Function call to main app
init()
    .then((responses) => generateMarkdown(responses))
    .then((strTxt) => writeToFile(fileName, strTxt))
    .catch((err) => console.log(err));
