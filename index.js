import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';

async function runApplication() {
  try {
    // Prompt the user for input
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);

    // Create the selected shape
    let shape;
    switch (userInput.shape) {
      case 'triangle':
        shape = new Triangle();
        break;
      case 'circle':
        shape = new Circle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    // Set color and render the shape
    shape.setColor(userInput.shapeColor);
    const svgContent = shape.render(userInput.text, userInput.textColor);

    // Specify the path for the Examples folder
    const examplesFolderPath = path.join(new URL('.', import.meta.url).pathname, 'Examples');

    // Create the Examples folder if it doesn't exist
    if (!fs.existsSync(examplesFolderPath)) {
      fs.mkdirSync(examplesFolderPath);
    }

    // Specify the file path for the logo.svg file inside the Examples folder
    const logoFilePath = path.join(examplesFolderPath, 'logo.svg');

    // Logging file paths
    console.log('Examples Folder Path:', examplesFolderPath);
    console.log('Logo File Path:', logoFilePath);

    // Write SVG content to the logo.svg file
    fs.writeFileSync(logoFilePath, svgContent);

    // After generating SVG content
    console.log('Generated SVG Content:', svgContent);

    console.log(`Generated logo.svg in the Examples folder`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the application
runApplication();
