import { generateRegistrationData } from './fakerUtil'

Cypress.Commands.add('createInvalidAccount', () => {
    cy.readFile('cypress/fixtures/fakerData.json').then((userCredentials) => {
        cy.get('#username')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type('a');
        cy.get('#email')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.email);
        cy.get('#password')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.password);
        cy.get('#confirmPassword')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.confirmPassword);

        cy.get(userCredentials.roleId === 'role-user' ?  '#role-user' : '#role-quiz-master').check();
        
        cy.contains('button', 'Register').click();
    });
});

Cypress.Commands.add('createAccount', () => {
    const fakerData = generateRegistrationData();
   
    cy.writeFile(`cypress/fixtures/fakerData.json`, fakerData);

    cy.readFile('cypress/fixtures/fakerData.json').then((userCredentials) => {
        cy.get('#username')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.username);
        cy.get('#email')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.email);
        cy.get('#password')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.password);
        cy.get('#confirmPassword')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.confirmPassword);

        cy.get(userCredentials.roleId === 'role-user' ?  '#role-user' : '#role-quiz-master').check();
        
        cy.contains('button', 'Register').click();

        // Authentication indicators
        cy.url().should('include', '/register');
    });
});

Cypress.Commands.add('loginAccount', () => {
    cy.readFile('cypress/fixtures/fakerData.json').then((userCredentials) => {
        cy.get('[data-testid="input-username"]')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.username);
        cy.get('[data-testid="input-password"]')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', '')
            .type(userCredentials.password);;

        cy.get('[data-testid="login-button"]').should('be.visible').and('not.be.disabled').click();
    });
});

Cypress.Commands.add('verifyDashboard', () => {
    cy.readFile('cypress/fixtures/fakerData.json').then((userCredentials) => {
        if(userCredentials.role === 'quiz_master') {
            cy.contains('Manage Topics').should('be.visible');
        } else {
            cy.contains('Browse Topics').should('be.visible');
        }
    });
    
});