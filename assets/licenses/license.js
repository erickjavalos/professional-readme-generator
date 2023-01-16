// grab full year
const year = new Date().getFullYear() 

let licenses = {
    "MIT" : {
        "link" : "/assets/licenses/MIT.txt",
        "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    "GNU GPLv3" :  {
        "link" : "/assets/licenses/GNU.txt",
        "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    },
    "Apache_2.0" : {
        "link" : "https://www.apache.org/licenses/LICENSE-2.0.txt",
        "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
}

module.exports = licenses;