// CypressConf 2025 Workshop: Smoke testing with Cypress
// with Natalie Lunbeck from Shipyard

// Smoke tests to complete for a login page

// Test #1: check that the page loads
describe('Sanity', () => {
  it('should have HTML content', () => {
    cy.visit('/').get('body').should('exist');
  });

  it('should have working APIs: recipes, categories, recipes-by-category', () => {
    cy.request('/api/').its('status').should('eq', 200);
    cy.request('/api/recipes').its('status').should('eq', 200);
    cy.request('/api/categories').its('status').should('eq', 200);
    cy.request('/api/recipes-by-category').its('status').should('eq', 200);

    // TODO: check the other endpoints here
  });
});

// Test #2: check that UI elements render correctly
describe('UI loading', () => {
  it('should load the login page without errors', () => {
    cy.visit('/').get('body').should('exist');
    // Verify the main page container is visible
    cy.get('[data-testid="login-page"]').should('be.visible');
    // Verify the form container is present
    cy.get('[data-testid="login-form-container"]').should('be.visible');
    // Verify the page title is correct
    cy.get('[data-testid="app-title"]').should('have.text', 'Recipe Book');
    cy.get('[data-testid="app-subtitle"]').should('have.text', 'Save and organize your favorite recipes');
    cy.get('[data-testid="signup-prompt"]').should('have.text', 'Don\'t have an account?');
  });
});

// Test #3: check input fields and button functionality
describe('Form + button functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  // Part 1: check input fields
  it('should allow text input in form fields', () => {
    // Get the username input field
    const usernameInput = cy.get('[data-testid="username-input"] input');
    // Type into the username field
    usernameInput.type('testuser');
    // Verify the value was entered correctly
    usernameInput.should('have.value', 'testuser');
    const passwordInput = cy.get('[data-testid="password-input"] input');
    passwordInput.type('testpassword');
    passwordInput.should('have.value', 'testpassword');
  });

  // Part 2: check buttons
  it('should have all buttons enabled and clickable', () => {
    cy.get('[data-testid="sign-in-button"]').should('be.enabled');
    cy.get('[data-testid="guest-button"]').should('be.enabled');
    cy.get('[data-testid="create-account-button"]').should('be.enabled');
  });
});


// Test #4: check a11y attributes
describe('ARIA Attributes', () => {
  beforeEach(() => {
    cy.visit('/');
  })
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
    });

    // Part 2: check required fields
    // check that username and password inputs have aria-required
    it('should have aria-required on mandatory input fields', () => {
      cy.get('[data-testid="username-input"] input')
        .should('have.attr', 'aria-required', 'true');
      cy.get('[data-testid="password-input"] input')
        .should('have.attr', 'aria-required', 'true');
    });
    // Part 3: check button a11y
    // check that buttons have aria-labels
    it('should have aria-labels on buttons for clarity', () => {
      cy.get('[data-testid="sign-in-button"]')
        .should('have.attr', 'aria-label', 'Sign In');
      cy.get('[data-testid="guest-button"]')
        .should('have.attr', 'aria-label', 'Continue as Guest');
      cy.get('[data-testid="create-account-button"]')
        .should('have.attr', 'aria-label', 'Create a New Account');
    });
});
