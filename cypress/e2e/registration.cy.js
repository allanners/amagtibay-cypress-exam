

describe('Sprint 1 - Registration for Quiz Master & Regular User', { testIsolation: false } , () => {
  before(() => {
    cy.visit('/register');
  });

  after(() => {
    // Removed due to unhappy path
    // cy.contains('Log out').click()
    // cy.url().should('include', '/login')

    cy.visit('');
  })


  it('Verify user registration works for both Quiz Master and Regular User roles', () => {
    cy.url().should('include', '/register');

    cy.createAccount();
    cy.loginAccount();
    cy.verifyDashboard();
  })

  it('Verify newly created account can successfully log in and access appropriate URL', () => {
    cy.verifyDashboard();

    cy.readFile('cypress/fixtures/fakerData.json').then((userCredentials) => {
      cy.visit(userCredentials.expectedRedirect);
      cy.url().should('include', userCredentials.expectedRedirect);
    });

    cy.contains('Log out').click()
    cy.url().should('include', '/login')
    
  });

  it('Verify if the user can register without an email', () => {
    cy.visit('/register');
    
    cy.createInvalidAccount();
    
    // Check validation message
    cy.contains('Username must be at least 3 character').should('be.visible').and('not.be.disabled');
  });
})
