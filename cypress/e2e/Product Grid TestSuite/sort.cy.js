describe('Sort Test Suite',()=>{
    it('[005-001-01][Valid] Sort products alphabetically from A-Z.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('value="name,asc"')

    })
    it('[005-001-02][Valid] Sort products alphabetically from Z-A.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Name (Z - A)');

    })
    it('[005-001-03][Valid] Sort products by price from High-Low.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Price (High - Low)');

    })
    it('[005-001-04][Valid] Sort products by price from Low-High.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Price (Low - High)');

    })

})