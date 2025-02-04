describe('Invoices TestSuite',()=>{
    it("[007-0001] [Valid] Visiting Invoices page after sign in.",()=>{
        cy.login()
        cy.get(".dropdown-item[data-test='nav-my-invoices']").should('be.visible').and('not.be.disabled').click();
    })
})