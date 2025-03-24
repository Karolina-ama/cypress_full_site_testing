describe('Home Page - Navigation functionality', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false
      });
  
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutinkimas")').length > 0) {
          cy.contains('Sutikimas').click();
        }
      });
    });
  
    it('should scroll or show content after clicking "KONSULTACIJOS"', () => {
      cy.contains('KONSULTACIJOS').click({ force: true });
      cy.contains('Konsultacijos').should('be.visible');
    });
  
    it('should show content for "MĖNULIS ŽENKLUOSE"', () => {
      cy.contains('MĖNULIS ŽENKLUOSE').click({ force: true });
      cy.contains('MĖNULIO TRANZITAS ZODIAKO ŽENKLUOSE:').should('be.visible');
    });
  
    it('should show content for "MĖNULIO PAROS"', () => {
      cy.contains('MĖNULIO PAROS').click({ force: true });
      cy.contains('Mėnulio Kalendorius').should('be.visible');
    });
  });
  