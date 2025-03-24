describe('Responsive Design Tests', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
  
      cy.visit('https://palmiroshoroskopai.lt/', {
        failOnStatusCode: false,
      });
    });
  
    function closeCookiePopupIfVisible() {
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Sutikimas")').length > 0) {
          cy.contains('Sutikimas').click({ force: true });
        }
      });
    }
  
    it('should display layout correctly on iPhone X (375x812)', () => {
      cy.viewport('iphone-x');
      closeCookiePopupIfVisible(); 
    });

      it('should  show content after clicking "KONSULTACIJOS"', () => {
        cy.contains('KONSULTACIJOS').click({ force: true });
        cy.contains('Konsultacijos').should('be.visible');
      });
     
   
  
    it('should display layout correctly on iPad (768x1024)', () => {
      cy.viewport('ipad-2');
      closeCookiePopupIfVisible();
      
    });

      it('should  show content after clicking "KONSULTACIJOS"', () => {
        cy.contains('KONSULTACIJOS').click({ force: true });
        cy.contains('Konsultacijos').should('be.visible');
      });
      
   
  
    it('should display layout correctly on MacBook 15 (1440x900)', () => {
      cy.viewport('macbook-15');
      closeCookiePopupIfVisible();
    });

      it('should  show content after clicking "KONSULTACIJOS"', () => {
        cy.contains('KONSULTACIJOS').click({ force: true });
        cy.contains('Konsultacijos').should('be.visible');
      });
      
    
  });
  
  