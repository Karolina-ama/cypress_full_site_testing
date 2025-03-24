describe('Search Functionality Test', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false); // ignoruoja JS klaidas
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false
      });
  
      // Uždaro slapukų modalą, jei yra
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutinku")').length > 0) {
          cy.contains('Sutinku').click();
        }
      });
  
      // Atidarom paieškos lauką (jei reikia)
      cy.get('a[aria-label="Open Search Bar"]').first().click({ force: true });
    });
  
    it('should return correct results when searching "asmenin"', () => {
      // Įvedam paieškos žodį ir paspaudžiam Enter
      cy.get('input[type="search"]').first().type('asmenin{enter}', { force: true });
  
      // Palaukiam rezultatus
      cy.wait(2000);
  
      // Patikrinam ar puslapis rodo rezultatus
      cy.get('h1.page-title').should('include.text', 'Paieškos rezultatai');

  
      // Pasitikrinam ar yra bent vienas straipsnis
      cy.get('.inside-article').its('length').should('be.gte', 1); // turi būti bent 1 straipsnis
    });
  });
  