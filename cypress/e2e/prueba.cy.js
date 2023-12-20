// cypress/integration/dashboard_spec.js

describe('Dashboard Test Suite', () => {
    beforeEach(() => {
      cy.visit('http://172.16.11.24:7200/gds/dashboard');
    });
  
    it('should load the dashboard page', () => {
      cy.title().should('eq', 'GDS');
      // You can add more assertions here based on your application's behavior
    });
  
    it('should perform the happy path scenario', () => {
      // Replace the following commands with your specific actions and assertions
      cy.get('your-selector-for-username-input').type('jurina');
      cy.get('your-selector-for-password-input').type('Eli96Apo');
      cy.get('your-selector-for-login-button').click();
  
      // Add assertions based on the expected behavior after login
      cy.url().should('include', '/dashboard');
      cy.get('your-selector-for-dashboard-element').should('be.visible');
    });
  });
  