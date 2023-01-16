const licenses = require('../assets/licenses/license')

// generaters markdown file
function generateMarkdown(data) {
  // format string with desired output

  let testData = {
    'title': 'Generate ReadME.md',
    'description': 'Purpose of this project is to generate a well written README.md for professional use',
    'install': 'npm install',
    'usage': `node index.js`,
    'contribution': 'Please email me via my email below!',
    'test': '/assets/imgs/screenshot.mp4',
    'license': 'MIT',
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
    `To run tests, run following command:\n`,
    '- `npm run test`\n\n',
    `$[](${data.test})\n\n`,
    `## Questions?\n\n`,
    `Do you have questions?\n`,
    `- [Email](mailto:${data.email})\n`,
    `- [Github](https://github.com/${data.username})\n\n`,
    `## License\n\n`,
    `[${data.license}](${licenses[data.license].link})`
  ].join('')
  
  return strText

}

module.exports = generateMarkdown;
