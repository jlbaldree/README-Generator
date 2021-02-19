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
    
*Steps required to install project and how to get the development environment running:*
    
${userResponses.instructions}`
};
    
  
// Usage section
if (userResponses.usage !== '') {
    
createMarkdown +=
    
`
    
## Usage 
    
*Instructions and examples for use:*
    
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
`
    
## Contributing
    
*If you would like to contribute it, you can follow these guidelines for how to do so.*
    
${userResponses.contributing}`
};
    
// Optional Tests section
if (userResponses.tests !== '') {
    
createMarkdown +=
`
## Tests
    
*Tests for application and how to run them:*
    
${userResponses.tests}`
};
  
  
// License section is required

let licenseURL = "";
    
if (userResponses.license == "Apache") { licenseURL == "assets/licenses/Apache.txt"};

if (userResponses.license == "Boost") { licenseURL == "assets/licenses/Boost.txt"};

if (userResponses.license == "GNU AGPLv3") { licenseURL == "assets/licenses/GNU_AGPLv3.txt"};

if (userResponses.license == "GNU GPLv3") { licenseURL == "assets/licenses/GNU_GPLv3.txt"};

if (userResponses.license == "GNU LGPLv3") { licenseURL == "assets/licenses/GNU_LGPLv3.txt"};

if (userResponses.license == "MIT") { licenseURL == "assets/licenses/MIT.txt"};

if (userResponses.license == "Mozilla") { licenseURL == "assets/licenses/Mozilla.txt"};

if (userResponses.license == "Unlicense") { licenseURL == "assets/licenses/Unlicense.txt"};

createMarkdown +=`

## License
    
Licensed under the ${userResponses.license} License.
`;
  
  
// Questions 
let createcontact = 
`
---
    
## Questions?
    
For any questions, please contact me with the information below:
   
GitHub: https://github.com/${userResponses.username}
`;
  
// If GitHub email is not null, add to Developer section
if (userResponses.email !== null) {
    
createcontact +=
`
Email: ${userResponses.email}
`};
  
// Add developer section to markdown
createMarkdown += createcontact;
  
// Return markdown
return createMarkdown;
    
}
  
module.exports = generateMarkdown;













