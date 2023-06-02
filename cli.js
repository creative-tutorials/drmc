import inquirer from "inquirer";
import { exec } from "child_process";

const packageManagerQuestion = {
    type: 'list',
    name: 'packageManager',
    message: 'Choose a package manager:',
    choices: ['npm', 'yarn', 'pnpm'],
  };
  
  const packageQuestion = {
    type: 'confirm',
    name: 'installPackage',
    message: 'Do you want to install the "devtreasure-react-modal-component"?',
    default: false,
  };
  
  inquirer.prompt(packageManagerQuestion).then((answers) => {
    const { packageManager } = answers;
  
    inquirer.prompt(packageQuestion).then((answer) => {
      const { installPackage } = answer;
  
      if (installPackage) {
        // Install the package using the selected package manager
        exec(`${packageManager} install devtreasure-react-modal-component`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error installing package: ${error.message}`);
            return;
          }
          console.log(`Package "devtreasure-react-modal-component" installed successfully using ${packageManager}.`);
        });
      } else {
        console.log('Package installation canceled.');
      }
    });
  });
