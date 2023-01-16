const generateMD = require("../utils/generateMarkdown")

describe("Generate README.md with usage being MIT", ()=>{
    it("MIT links should match", () => {
        // test data to run project
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
        // generate string output
        let generatedMD = generateMD(testData)
        // known output of solution
        let solution = [
            `# Generate ReadME.md\n\n`,
            `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`,
            `## Description\n\n`,
            `Purpose of this project is to generate a well written README.md for professional use\n\n`,
            `## Table of Contents\n\n`,
            `- [Installation](#Installation)\n`,
            `- [Usage](#Usage)\n`,
            `- [Contribute](#Contribute)\n`,
            `- [Tests](#Tests)\n`,
            `- [Questions](#Questions)\n`,
            `- [License](#License)\n\n`,
            `## Installation\n\n`,
            `To install, please follow steps below:\n`,
            `- npm install\n\n`,
            `## Usage\n\n`,
            `To run, please follow steps below:\n`,
            `- node index.js\n\n`,
            `## Contributing\n\n`,
            `Please email me via my email below!\n\n`,
            `## Tests\n\n`,
            `$[TODO TESTS](/assets/imgs/screenshot.mp4)\n\n`,
            `## Questions?\n\n`,
            `Do you have questions?\n`,
            `- [Email](mailto:avaloserick97@gmail.com)\n`,
            `- [Github](https://github.com/erickjavalos)\n\n`,
            `## License\n\n`,
            `[MIT](/assets/licenses/MIT.txt)`
        ].join('')
        // make comparison
        expect(generatedMD).toEqual(solution);
    })
})