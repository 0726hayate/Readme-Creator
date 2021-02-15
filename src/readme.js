
function generatereadme(userinput) {
  return `

  ![badge](https://img.shields.io/badge/license-${userinput.license}-brightgreen)

#${userinput.projectname}

## Description
${userinput.description}


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)



## Installation
${userinput.installation}

## Usage
${userinput.usage}

## Questions
${userinput.questions}

You can also find my github profile at (https://github.com/${userinput.username} or contact me at ${userinput.email}


## License
![badge](https://img.shields.io/badge/license-${userinput.license}-brightgreen)

This application is covered by ${userinput.license}

## Credits
${userinput.credits}

  `;
};

module.exports = generatereadme;
