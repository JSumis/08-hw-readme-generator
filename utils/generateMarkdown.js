// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  - Description
  - Installation
  - Usage
  - License
  - Contributing
  - Testing
  - Questions

  ## Description

  ${data.description}

  ## Installation

  ${data.dependencies}

  ## Usage

  ${data.dependencies}

  ## License

  ${data.license}

  ## Contributing

  ${data.dependencies}

  ## Testing

  ${data.test}

  ## Questions

  ${data.dependencies}

  ## Contact

  You can find me on Github at https//github.com/${data.username}

  You can email me at ${data.email}


`;
}

module.exports = generateMarkdown;
