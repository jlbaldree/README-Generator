//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const { message } = require("statuses");
const generateMarkdown = require('./utils/generateMarkdown.js');


//inquirer to generate questions
const prompts = [	
	{
		type: "input",
		message:"What is your project title?",
		name: "title",
		validate: (value)=>{ if(value){return true} else {return "Project title is required"}}
	},
	{
		type: "confirm",
		message:"Will the README include a Table of Contents?",
		name: "tableofcontents",
		
	},
	{
		type: "input",
		message:"Write a brief description of your project's application:",
		name: "description",
		validate: (value)=>{ if(value){return true} else {return "An application description is required"}}
	},
	{
		type: "input",
		message:"If applicable, please provide installation instructions:",
		name: "instructions",
	},
	{
		type: "input",
		message:"If an image or video is to be included for usage aid the file needs to be saved in an assets folder in your project directory before responding to this question."+ "\n" +"Please provide the name, including the extension, of the file:",
		name: "usageAid",
	},
	{
		type: "input",
		message:"What are the steps needed to use the app?",
		name: "usage",
		validate: (value)=>{ if(value){return true} else {return "Please provide instructions for how to use the app"}}
	},
	{
		type: "checkbox",
		message:"What license is being used for the app?",
		name: "license",
		choices: ["Apache","Boost","GNU AGPLv3","GNU GPLv3","GNU LGPLv3","MIT","Mozilla","Unlicense"],
		validate: (value)=>{ if(value){return true} else {return "The license information is required"}}
	},
	{
		type: "input",
		message:"Please list the admin name(s) for contribution request approvals: (i.e. John Smith, Jane Doe)",
		name: "contributing",
		validate: (value)=>{ if(value){return true} else {return "At least one admin is required"}}
	},
	{
		type: "input",
		message:"What is your GitHub username?",
		name: "username",
		validate: (value)=>{ if(value){return true} else {return "user name needs to be provided"}}
	},
	{
		type: "input",
		message:"What is your email address?",
		name: "email",
		validate: (value)=>{ if(value){return true} else {return "email address needs to be provided"}}
	}]
	

//creating our createNewFile function
function createNewFile(fileName, data){
	//fs
	fs.writeFile(`./${fileName.toUpperCase().split(" ").join(" ")}.md`,data,(err)=>{
		if(err){
			console.log(err)
		}
		console.log("Your README file has been generated");
		})
}

const writeFileAsync = util.promisify(createNewFile)

// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(prompts);
        console.log("Your responses: ", userResponses);
        
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const template = generateMarkdown(userResponses);
            
        // Write markdown to file
        await writeFileAsync('README', template);

    } catch (error) {
        console.log(error);
    }
};

init();