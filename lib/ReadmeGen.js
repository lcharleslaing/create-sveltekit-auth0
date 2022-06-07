class MarkDown {

    static renderLicenseBadge(license) {
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)',
            isc: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://choosealicense.com/licenses/isc/)',
        }
        return badges[license]
    }

    static renderLicenseLink(license) {
        const licenseLinks = {
            mit: 'https://choosealicense.com/licenses/mit/',
            isc: 'https://choosealicense.com/licenses/isc/',
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if (license) {
            return `Licensed under ${license.toUpperCase()} @ (${this.renderLicenseLink(license)})`
        } else {
            return "No License Provided"
        }
    }

    static generateReadme(answers) {
        return `
<h1 align="center"></h1>👋 Welcome 👋</h1>
<h1 align="center">${answers.title}</h1>

###Description

${answers.description}


${this.renderLicenseBadge(answers.license)}

#### 🏠 [Homepage](https://www.iambig2tiny.com)

#### ✨ [Demo](https://www.iambig2tiny.com)

## Author

👤 **[${answers.firstname} ${answers.middlename} ${answers.lastname}](${answers.email})**

* [Website](${answers.website})
* [Twitter](https://twitter.com/${answers.twitter})
* [Github](https://github.com/${answers.github})
* [LinkedIn](https://linkedin.com/in/${answers.linkedin})

## Show your support

Give a ⭐️ if this project helped you!

<div align="center">
  <a href="https://www.patreon.com/${answers.patreon}">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
  </a>
  <br/>
</div>


### Table of Contents
- [Project Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)

###Installation

    ${answers.installation}

###Usage

    ${answers.usage}

###Contribution

${answers.contribution}

###Questions

[Email me](mailto:${answers.email})
[Github](https://github.com/${answers.github})

###License

Copy-Right/Copy-Claim 2022 [:${answers.firstname}-${answers.middlename} :${answers.lastname}:](${answers.github})<br />


${this.renderLicenseBadge(answers.license)}

_This README was inspired by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

`
    }
}

module.exports = MarkDown
