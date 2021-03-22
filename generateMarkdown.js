const generateReadMe = (answers) => { 
  // readme template
  return `
    # ${answers.projectTitle}
    ---
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    // [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

    ## Description
    ---
    ${answers.description}

    ## Table of Contents
    ---
    There are many ways in which you can participate in the project, for example:
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)

    ## Installation
    ---
    ${answers.instillation}

    ## Usage
    ---
    ${answers.usage}

    ## Contributing
    ---
    There are many ways in which you can participate in the project, for example:
    ${answers.contributing}

    ## Tests
    ---
    ${answers.tests}

    ## License
    ---
    Licensed under the ${answers.license} license.

    ## Questions
    ---
    My github is [${answers.github}](http://github.com/${answers.github}).
    If you have additional quesitions you can send me an email at ${answers.email}.
  `;
};

module.exports = generateMarkdown;
