# automationCarbon

# Introduction

Automation for creation offer sell and buy.

# Step 1

To run tests, first must be necessary to download the dependencies (node_modules)
after that just run `npm i` or `yarn -E` command. This command will be download all necessary dependencies.

# Step 2

In package.json two commands were configured so that the tests are run.

- `npm run cypress:open` or `yarn cypress:open` this command will open the cypress screen so that if you want to run one or all of the tests, you can follow the tests being executed.
- `npm run cy:run` or `yarn cy:run` this command will run the tests in the background and each completed test will generate a video as evidence.

# Observações

To make the execution more flexible, the username and password for these tests were configured as environment variables in the `cypress.env.json` file, if you want to run the tests with your personal user, just configure it in these variables.
You can find these variables named `userName` and `password` inside `env`.
