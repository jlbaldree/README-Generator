function generateMarkdown(userResponses) {

// Generate Table of Contents if applicable
    
let toc = `## Table of Contents
`;
    
if (userResponses.tableofcontents = true) {

if (userResponses.instructions !== '') { toc += `
* [Instructions](#instructions)` };
  
if (userResponses.usage !== '') { toc += `
* [Usage](#usage)` };
  
if (userResponses.contributing !== '') { toc += `
* [Contributing](#contributing)` };
  
if (userResponses.tests !== '') { toc += `
* [License](#license)` };
} else {''}
  
// Generate markdown for required sections
let createMarkdown = 
`# ${userResponses.title}

![badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)<br>

## Description 

${userResponses.description}

`
  
// Add Table of Contents if any
createMarkdown += toc;
   
    
// Installation section
if (userResponses.instructions !== '') {
    
createMarkdown +=
`
    
## Installation
    
*Here are the steps to install the necessary components to run the program*
    
${userResponses.instructions}`
};
    
  
// Usage section
if (userResponses.usage !== '') {
    
createMarkdown +=
    
`
    
## Usage 
    
*Instructions on how to run and use the program*
    
${userResponses.usage}`
};
    
if (userResponses.usageAid !== '') {
    
createMarkdown +=
`

![image](assets/${userResponses.usageAid})
`
};

// Contributing section
if (userResponses.contributing !== '') {
createMarkdown +=
    `
    
## Contributing
    
*To make contributions to the app, please reach out to the below admin(s) for approval:
${userResponses.contributing}`
};
    
 
// License section is required

let licenseURL = "";

if (userResponses.license == "Apache") {licenseURL = "assets/licenses/Apache.txt"};

if (userResponses.license == "Boost") {licenseURL = "assets/licenses/Boost.txt"};

if (userResponses.license == "GNU_AGPLv3") {licenseURL = "assets/licenses/GNU_AGPLv3.txt"};

if (userResponses.license == "GNU_GPLv3") {licenseURL = "assets/licenses/GNU_GPLv3.txt"};

if (userResponses.license == "GNU_LGPLv3") {licenseURL = "assets/licenses/GNU_LGPLv3.txt"};

if (userResponses.license == "MIT") {licenseURL = "assets/licenses/MIT.txt"};

if (userResponses.license == "Mozilla") {licenseURL = "assets/licenses/Mozilla.txt"};

if (userResponses.license == "Unlicense") {licenseURL = "assets/licenses/Unlicense.txt"};

createMarkdown +=`

## License
    
Licensed under the ![${userResponses.license}](${licenseURL}) License.
`;
  
  
// Questions 
let createcontact = 
`
---
    
## Questions?
    
If you have any questions, you can reach out to me through the below GitHub site or send an email to me at: ${userResponses.email}
   
GitHub: https://github.com/${userResponses.username}
`;
   
// Add developer section to markdown
createMarkdown += createcontact;
  
// Return markdown
return createMarkdown;
    
}
  
module.exports = generateMarkdown;













