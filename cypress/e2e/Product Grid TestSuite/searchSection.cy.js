describe('Search Section Testsuite',()=>{
    it('[005-003-01] [invalid] trying to search without typing in search bar.',()=>{
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    })
    
})