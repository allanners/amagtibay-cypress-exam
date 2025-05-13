# Quiz App - Cypress Registration Tests

## Overview
This project contains automated end-to-end tests for the registration and login functionality of the Quiz App. These tests verify that users can register and log in successfully based on their roles (`Quiz Master` and `Regular User`).

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- Dependencies installed via `npm install`

## Test Structure
This suite contains three key test cases for the registration flow:

### `registration.cy.js`
- **Sprint 1 - Registration for Quiz Master & Regular User**
  - Verifies successful user registration.
  - Ensures newly created accounts can log in and access appropriate dashboard URLs.
  - Checks registration validation errors when required fields are missing.

## Setup & Execution
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz-app-tests
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run Cypress tests:
   ```sh
   npx cypress open
   ```
   OR run headless mode:
   ```sh
   npx cypress run
   ```

## Test Details
### `Verify user registration works for both Quiz Master and Regular User`
- Ensures `/register` page loads.
- Calls helper functions: `cy.createAccount()`, `cy.loginAccount()`, `cy.verifyDashboard()`.

### `Verify newly created account can successfully log in and access appropriate URL`
- Reads stored test data from `fakerData.json`.
- Validates correct redirection based on role.
- Confirms successful logout functionality.

### `Verify if the user can register without an email`
- Tests invalid registration scenarios.
- Checks for validation messages on the form.

## Notes
- **`testIsolation: false`** is used to prevent Cypress from resetting the state between tests.
- The `after()` hook was modified to prevent execution of an unhappy path.

## Future Enhancements
- Add more negative test cases (invalid username, password rules).
- Enhance role-based access validation for dashboard features.
- Implement API testing alongside UI validation.

---

Happy testing! 🚀


