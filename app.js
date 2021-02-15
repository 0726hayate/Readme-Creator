const fs = require('fs');
const inquirer = require('inquirer');
const readme = require('./src/readme');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptProject() {

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
  
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.(Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('What are the steps!');
            return false;
          }
        }
      },
  
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots after the file has been generated.',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('What is the usage?');
            return false;
          }
        }
      },
  
      
      {
        type: 'input',
  name: 'questions',
  message: 'FAQ',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('Please do not leave this blank');
      return false;
    }
  }
},


      
{
  type: 'input',
name: 'tests',
message: 'Please provide test instructions',
validate: descriptionInput => {
if (descriptionInput) {
return true;
} else {
console.log('Please do not leave this blank');
return false;
}
}
},

      {
        type: 'input',
        name: 'credits',
        message: 'Please reference your work and list the contributors!.',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please reference your work!');
            return false;
          }
        }
      },
  
      
      {
              type: 'input',
        name: 'Questions',
        message: 'What can I do if there are issues?',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please do not leave this blank');
            return false;
          }
        }
      },

      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose the license for this project (Check all that apply)',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Open']
      },

  
      {
        type: 'input',
  name: 'username',
  message: 'Please enter your github username',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('Please do not leave this blank');
      return false;
    }
  }
},

{
  type: 'input',
name: 'email',
message: 'Please enter your email',
validate: descriptionInput => {
if (descriptionInput) {
return true;
} else {
console.log('Please do not leave this blank');
return false;
}
}
}
]);
} 


async function init() {
   
      const userinput = await promptProject();
      const generatereadme = readme(userinput);
      await writeFileAsync('./readme.md', generatereadme);

  
}

init(); 
