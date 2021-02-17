//node modules
const inquirer = require('inquirer');
const fs = require('fs');
//const { message } = require('statuses');

//inquirer to generate questions
inquirer.prompt(
	[	
		{
	type: 'input',
	message:'What is the title of the project?',
	name: 'title',
	validate: (value)=>{ if(value){return true} else {return 'title is required and needs to be provided'}}
		},
						{
	type: 'input',
	message:'What is the purpose of the app?',
	name: 'description',
	validate: (value)=>{ if(value){return true} else {return 'purpose required and needs to be provided'}}
		},
				{
	type: 'input',
	message:'How do you install the application?',
	name: 'installation',
	validate: (value)=>{ if(value){return true} else {return 'installation instructions are required and need to be provided'}}
		},
										{
	type: 'input',
	message:'What are the steps needed to use the app?',
	name: 'usage',
	validate: (value)=>{ if(value){return true} else {return 'please provide instructions for how to use the app'}}
		},
								{
	type: 'checkbox',
	message:'What license is being used for the app?',
	name: 'license',
	choices: ['Apache','ISC','MIT','GNU',],
	validate: (value)=>{ if(value){return true} else {return 'contact information needs to be provided'}}
		},
										{
	type: 'input',
	message:'how can users contribute to the app?',
	name: 'contributing',
	validate: (value)=>{ if(value){return true} else {return 'contact information needs to be provided'}}
		},
		{
	type: 'input',
	message:'how can users reach out for questions and support?',
	name: 'questions',
	validate: (value)=>{ if(value){return true} else {return 'contact information needs to be provided'}}
				},
												{
	type: 'input',
	message:'What is your GitHub username?',
	name: 'username',
	validate: (value)=>{ if(value){return true} else {return 'user name needs to be provided'}}
		},
												{
	type: 'input',
	message:'What is your email address?',
	name: 'email',
	validate: (value)=>{ if(value){return true} else {return 'email address needs to be provided'}}
		}
	]
).then(({
	title,
	description,
	installation,
	usage,
	license,
	contributing,
	questions,
	username,
	email
})=>{
	//template to be used
	const template =`# ${title};
	
	## Table of Contents:
	* [Description](#description)
	* [Installation](#installation)
	* [Usage](#usage)
	* [Questions](#questions)
	* [Contributing](#contributing)
	* [License](#license)
	
	### Description
	${description}
	### Installation
	${installation}
	### Instructions
	${usage}
	### Questions
	${questions}
	${username}
	${email}
	### Contributing
	${contributing}
	### License
	${license}`;

//Function to create the readme using fs
createNewFile('README',template);
}
);
//creating our createNewFile function
function createNewFile(fileName, data){
	//fs
	fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
		if(err){
			console.log(err)
		}
		console.log('Your README file has been generated');
		})
}

//NOW LETS INSTALL OUR PACKAGES :

//in the terminal in your project location type: npm init -y
//press enter then type: npm i inquirer
//press enter then type ls and press enter
//then type clear and enter node generator.js
//respond to the prompts

//Your read me should have generated