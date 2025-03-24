describe('Search - No Results Scenario', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false,
      });
  
      //  uždaryti slapukų sutikimo langą
      cy.get('body').then(($body) => {
        if ($body.find('.fc-button-label:contains("Sutikimas")').length > 0) {
          cy.contains('.fc-button-label', 'Sutikimas').click({ force: true });
        }
      });
    });
  
    it('should show "NIEKO NERASTA" when no results are found', () => {
      cy.get('a[aria-label="Open Search Bar"]').first().click({ force: true });
  
      cy.get('input[type="search"]').first().type('traktorius{enter}', { force: true });
  
      cy.wait(3000);
  
      cy.get('h1.entry-title').should('contain.text', 'Nieko nerasta');
    });
  });
  