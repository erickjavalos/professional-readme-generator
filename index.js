const inquirer = require('inquirer');
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
];




// TODO: Create an array of questions for user input
// fileName = "README.md"

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// ****************************************************************************
// MAIN
// ****************************************************************************

function main() {
    // prompt and process
    inquirer
        .prompt(questions)
        .then((response) =>
            console.log(response)
    );
}

// Function call to main app
main();
