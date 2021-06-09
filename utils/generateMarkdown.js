// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None')
{
  return `[!GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

}
return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}


  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  <br />
  ## Description

  ${data.description}

  <br />
  ## Installation

  ${data.dependencies}

  <br />
  ## Usage

  ${data.repo}

  <br />
  ## Contributing

  ${data.contribute}

  <br />
  ## Testing

  ${data.test}

  <br />
  ## Questions

  You can find me on Github at https://github.com/${data.username}/

  You can email me at ${data.email}

  <br />
  ## License
  
  ${data.license}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;