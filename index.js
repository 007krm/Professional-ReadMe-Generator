const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = (answers) => {
  // readme template
  return `
    # ${answers.projectTitle}
    ---
    [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

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

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description explaining your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Explain how to use the app.",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Are there any contributors",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide examples on how to run them here.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license do you wish to use?",
      choices: ["MIT", "ISC"],
    },
  ])
  .then((answers) => {
    console.log(answers.license);
    const htmlPageContent = generateReadMe(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md...")
    );
  });
