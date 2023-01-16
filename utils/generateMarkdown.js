const licenses = require('../assets/licenses/license')

function renderLicenseBadge(license){
  return (license == '' || license=='None') ? '' : `${licenses[license].badge}\n\n`
}
function renderLicenseSection(license) {
  return (license == '' || license=='None') ? '' : `[${license}](${licenses[license].link})`
}
// generaters markdown file
function generateMarkdown(data) {
  // build text of readme
  let strText = [
    `# ${data.title}\n\n`,
    `${renderLicenseBadge(data.license)}`,
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
    `${data.install}\n\n`,
    `## Usage\n\n`,
    `${data.usage}\n\n`,
    `## Contributing\n\n`,
    `${data.contribution}\n\n`,
    `## Tests\n\n`,
    `${data.test}\n\n`,
    `## Questions?\n\n`,
    `Do you have questions?\n`,
    `- [Email](mailto:${data.email})\n`,
    `- [Github](https://github.com/${data.username})\n\n`,
    `## License\n\n`,
    `${renderLicenseSection(data.license)}`
  ].join('')
  
  return strText

}

module.exports = generateMarkdown;
