# Website Automated Testing with Cypress

## Overview
This project contains automated test cases for a website using Cypress. The tests cover critical functionalities such as user authentication, form submissions, navigation, and validation of UI elements.

## Features
- **Automated UI testing** using Cypress
- **Cross-browser testing** (Chrome, Edge, Firefox, etc.)
- **Headless execution support**
- **Real-time debugging with Cypress Test Runner**
- **Structured test reports and logs**

## Technologies Used
- Cypress
- JavaScript
- Mocha & Chai for assertions
- Git & GitHub

## Installation
To set up and run the test suite locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kingsleyuhons/Test-Automation_Cypress.git
   cd Test-Automation_Cypress
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the Cypress tests in interactive mode:**
   ```bash
   npx cypress open
   ```
4. **Run tests in headless mode:**
   ```bash
   npx cypress run
   ```

## Test Cases Implemented
- User login and logout functionality
- Form submission validation
- Page navigation and UI element verification
- Responsive design testing

## Running Tests
To execute tests in a specific browser:
```bash
npx cypress run --browser chrome
```
For headless execution:
```bash
npx cypress run --headless
```

## Contribution
Feel free to fork the repository and submit pull requests. Any improvements and additional test cases are welcome!

## License
This project is licensed under the MIT License.

## Author
Kingsley Uhonmhoibhi  
[GitHub Profile](https://github.com/kingsleyuhons)
