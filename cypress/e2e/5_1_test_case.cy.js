describe('Footer - Social media links', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false
      });
  
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutikimas")').length > 0) {
          cy.contains('Sutikimas').click();
        }
      });
    });
  
    it('Facebook link should be visible and point to correct URL', () => {
      cy.get('a[href*="facebook.com"]')
        .first()
        .should('be.visible')
        .and('have.attr', 'href', 'https://www.facebook.com/PalmiraKelertiene/');
    });
  
    it('YouTube link should be visible and point to correct URL', () => {
      cy.get('a[href*="youtube.com"]')
        .first()
        .should('be.visible')
        .and('have.attr', 'href', 'https://www.youtube.com/channel/UCuxmV7YbyxKBYRke-OE166Q');
    });
  });
  