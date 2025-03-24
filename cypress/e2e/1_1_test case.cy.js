describe('Home Page - Page Load', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Neleidžia Cypress sustabdyti testų dėl klaidų
      });
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false
      });
  
      // Palaukiame, kol slapukų modalas pasirodys (jei yra) ir jį uždarome
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutinku")').length > 0) {
          cy.contains('Sutinku').click();
        }
      });
    });
  
    it('should display the main introduction text', () => {
      cy.contains('PAVASARIO LYGIADIENIS').should('be.visible');
    });
  
    it('should display navigation menu items', () => {
      cy.contains('KONSULTACIJOS').should('be.visible');
      cy.contains('2025').should('be.visible');
      cy.contains('STRAIPSNIAI').should('be.visible');
      cy.contains('MĖNULIS ŽENKLUOSE').should('be.visible');
      cy.contains('MĖNULIO PAROS').should('be.visible');
    });
  });
  