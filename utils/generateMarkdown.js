const licenses = require('../assets/licenses/license')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  console.log(license)
  console.log(`\n![${license}](https://img.shields.io/badge/License-${license}-green.svg)`)
  return (license || license == 'None') ? '' :  `\n![${license}](https://img.shields.io/badge/License-${license}-green.svg)`; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseTxt = [
    `${license}`
  ].join('')

  return licenseTxt;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // testData
  let testData = {
    'title': 'Generate ReadME.md',
    'description': 'Purpose of this project is to generate a well written README.md for professional use',
    'install': 'npm install',
    'usage': `node index.js`,
    'contribution': 'Please email me via my email below!',
    'test': '/assets/imgs/screenshot.mp4',
    'license': 'Apache_2.0',
    'username': 'erickjavalos',
    'email': 'avaloserick97@gmail.com'
  }
  data = testData

  let strText = [
    `# ${data.title}\n\n`,
    `${licenses[data.license].badge}\n\n`,
    `## Description\n\n`,
    `${data.description}\n\n`,
    `## Table of Contents\n\n`,
    `- [Installation](#Installation)\n`,
    `- [Usage](#Usage)\n`,
    `- [Contribute](#Contribute)\n`,
    `- [Tests](#Tests)\n`,
    `- [Questions](#Questions)\n`,
    `- [License](#License)\n\n`,
    `## Installation\n\n`,
    `To install, please follow steps below:\n`,
    `- ${data.install}\n\n`,
    `## Usage\n\n`,
    `To run, please follow steps below:\n`,
    `- ${data.usage}\n\n`,
    `## Contributing\n\n`,
    `${data.contribution}\n\n`,
    `## Tests\n\n`,
    `${data.test}\n\n`,
    `## Questions?\n\n`,
    `Do you have questions?\n`,
    `- [Email](mailto:${data.email})\n`,
    `- [Github](https://github.com/${data.email})\n\n`,
    `## License\n\n`,
    `[${data.license}](${licenses[data.license].link})`
  ].join('')
  
  return strText

}

module.exports = generateMarkdown;
