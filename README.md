
## Property-list

### Introduction 

This is a simple property-bookmarking app where user can browse properties from a search result and bookmark properties that they are interested in.

This project is implemented using javascript with React.js as the framework (redux as the state manager) and webpack as the bundler. ES6 modules are used to modularise the project structure. For layout and styling, flex-box and [MDL](https://getmdl.io/started/) are selected.

To better simulate the production/testing scenarios, a mock backend API is integrated in this project to mimic asynchronous http requests and interactions between the frontend and backend.

Both Test-Driven-Development and regressional testing methods are adopted during the development of the project. As in testing environment setup, mocha.js and Chai.js are used as the testing framework and assertion library repectively. To render the react components under testing environment, a list of helper libraries are introduced for this purpose, including jsdom, react-addons-test-utils, jQuery and Chai-jQuery etc.

#### Project structure

./src - where the source code of this project is located.

  * ./src/actions/ Where all action creators for redux are located.
  * ./src/components/ the location of all react components.
  * ./src/reducers/ Where all reducers for redux store are located.
  * ./src/api/ where the mock backend and mock database made with sample data provided resides
  * ./src/index.js the entry point of the project.
  
./test - All test files and helpers are saved under this directory.
  * Test cases for react components, actions, and reducers are stored under ./test/components, ./test/actions, and ./test/reducers respectively

#### Project setup and build steps

1. Install [Node.js V8.1.0](https://nodejs.org/en/download/current/), ideally via [NVM](https://github.com/creationix/nvm)

2. Download the zipped package of the project or git clone the project link to locally, unzip the package if needed.

3. Navigate to the project directory and I\install all dependencies by running:
```
> npm install
```
4. After all installation is done, start the project by running:
```
> npm start
```
- Or run the test by:
```
> npm run test
```
