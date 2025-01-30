describe('Languages testSuite',()=>{
    it('[01-0006] Clicks on “EN” Symbol',()=>{
        cy.visit('/');
        cy.get('button[id="language"]').should('be.visible').and('not.be.disabled').click();
        cy.get('ul[id="dropdown-animated"]').should('be.visible');
        cy.url().should('eq',"https://practicesoftwaretesting.com/")
    })
    it('[01-0006-01][Valid] Click on “DE” option for Germany language.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Kontakt')
    })
    it('[01-0006-06] [Invalid] Click on “DE” option for Germany language [HTML “lang” attribute update.]',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','de');

    })
})