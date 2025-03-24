describe('Home Page – Dynamic Content Load', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
  
      cy.visit('https://palmiroshoroskopai.lt/?s=asmenin', {
        failOnStatusCode: false
      });
  
      // Jei yra slapukų modalas – paspaudžiam "Sutikimas"
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutikimas")').length > 0) {
          cy.contains('Sutikimas').click();
        }
      });
    });
  
    it('should load more articles when scrolling to the bottom', () => {
      cy.get('article').its('length').then((initialCount) => {
        cy.scrollTo('bottom');
  
        cy.wait(3000); 
  
        cy.get('article').its('length').should('be.gt', initialCount);
      });
    });
  });
  