// CypressConf 2025 Workshop: Smoke testing with Cypress
// with Natalie Lunbeck from Shipyard

// Smoke tests to complete for a login page


// Test #1: check that the page loads
describe('Sanity', () => {
  it('should have HTML content', () => {
    cy.visit('/').get('body').should('exist');
    cy.wait(2000); // pause so user can see result
  });

  it('should have working APIs', () => {
    cy.request('/api/').its('status').should('eq', 200);
    cy.wait(2000); // pause

    // TODO: check the other endpoints here
  });
});

/*
// Test #2: check that UI elements render correctly
describe('UI loading', () => {
  it('should load the login page without errors', () => {
    // Verify the main page container is visible
    cy.get('[data-testid="login-page"]').should('be.visible');
    // Verify the form container is present
    cy.get('[data-testid="login-form-container"]').should('be.visible');
    // Verify the page title is correct
    cy.get('[data-testid="app-title"]').should('have.text', 'Recipe Book');

    cy.wait(2000); // pause

    // TODO: check the other UI elements here
  });
});
*/

/*
// Test #3: check input fields and button functionality
describe('Form + button functionality', () => {
  // Part 1: check input fields
  it('should allow text input in form fields', () => {
    // Get the username input field
    const usernameInput = cy.get('[data-testid="username-input"] input');
    // Type into the username field
    usernameInput.type('testuser');
    // Verify the value was entered correctly
    usernameInput.should('have.value', 'testuser');

    cy.wait(2000); // pause

    // TODO: check password field here
  });

  // Part 2: check buttons
  it('should have all buttons enabled and clickable', () => {
    // Verify the sign in button is enabled
    cy.get('[data-testid="sign-in-button"]').should('be.enabled');
    cy.wait(2000); // pause

    // TODO: check other buttons here
  });
});
*/

/*
// Test #4: check a11y attributes
describe('ARIA Attributes', () => {
  // Part 1: check ARIA roles
  it('should have proper ARIA roles on interactive elements', () => {
    // Form should have aria-label for screen readers
    cy.get('[data-testid="login-form"]')
      .should('have.attr', 'aria-label', 'login form');
    // Error alerts should have role="alert" for screen reader announcement
    // Note: This only appears when there's an error
    cy.get('[data-testid="username-input"] input').type('invaliduser');
    cy.get('[data-testid="password-input"] input').type('wrongpassword');
    cy.get('[data-testid="sign-in-button"]').click();
    cy.get('[data-testid="error-message"]', { timeout: 5000 })
      .should('have.attr', 'role', 'alert');
    
    cy.wait(2000); // pause
    });

    // Part 2: check required fields
    // TODO: check that username and password inputs have aria-required

    // Part 3: check button a11y
    // TODO: check that buttons have aria-labels

});
*/

