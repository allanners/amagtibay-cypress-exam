

describe('Sprint 1 - Registration for Quiz Master & Regular User', { testIsolation: false } , () => {
  before(() => {
    cy.visit('/register');
  });

  after(() => {
    cy.contains('Log out').click()
    cy.url().should('include', '/login')
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
    });
    
  });
})
