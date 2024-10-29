# Auto Builder

![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Walkthrough](#walkthrough)
6. [License](#license)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)

## Description
Auto Builder is a command-line application that enables users to create and manage various vehicles, including cars, trucks, and motorbikes. Leveraging Inquirer for user input, Auto Builder simplifies the vehicle creation process and allows users to perform actions with their selected vehicles, enhancing their TypeScript skills.

## Features
- Create new vehicles: car, truck, and motorbike
- Input vehicle-specific details such as color, make, model, and year
- Perform various actions with the created vehicles (e.g., towing for trucks)
- Save and manage the vehicles in a local collection

## Installation
To use the application, follow these steps:

- Step 1. Clone the repository
- Step 2. Navigate to the project directory: cd auto-builder
- Step 3. Install the necessary dependencies: npm install
- Step 4. Compile the TypeScript code: npx tsc

## Usage
To start the application, run the following command: `npm run start`

You will be prompted with options to create a new vehicle or select an existing one, and to choose between a car, truck, or motorbike.

The following prompts will appear when creating a vehicle:
- Enter Color
- Enter Make
- Enter Model
- Enter Year
- Enter Weight
- Enter Top Speed
- Enter Front Wheel Diameter (Truck and Motorbike only)
- Enter Front Wheel Brand (Truck and Motorbike only)
- Enter Rear Wheel Diameter (Truck and Motorbike only)
- Enter Rear Wheel Brand (Truck and Motorbike only)
- Once you create a vehicle, you will also be prompted with options to select an existing one and perform an action.

The following prompts will appear when selecting an existing vehicle:
- Start Vehicle
- Accelerate 5 MPH
- Decelerate 5 MPH
- Stop  Vehicle
- Enter Weight
- Turn Right
- Turn Left
- Reverse
- Tow a vehicle (Can only be performed by a truck, another vehicle besides the truck has to have been created)
- Perform a wheelie (Can only be performed by a Motorbike)

## Walkthrough
A complete walkthrough video demonstrating the application, its functionality, and the process of invoking it from the command line can be found at the following link: https://drive.google.com/file/d/1wdm8wk-2tciOHbFXs0gKDYecDItVK1fy/view?usp=sharing

## License
This project is licensed under the MIT License, which allows you to freely use, modify, and distribute this software, provided proper attribution is given.

## Contributing
Contributions are welcome!  If you'd like to contribute to this project, follow the steps below.

- Step 1: Fork the repository.
- Step 2: Create a feature branch: git checkout -b feature/new-feature
- Step 3: Commit your changes: git commit -m "Add new feature"
- Step 4: Push to the branch: git push origin feature/new-feature
- Step 5: Open a pull request.

## Tests
Currently, this project does not have any automated tests. However, if you'd like to add tests, feel free to contribute! You can set up testing using a framework like Mocha or Jest.

## Questions
If you have any questions about the repository, feel free to reach out by opening an issue or contacting me directly at cheyennaraelynn@gmail.com You can also find more of my work on GitHu at https://github.com/RaeOfChey.
