describe('price range TestSuite',()=>{
    it('[005-002-01][Valid] Range between 1-50.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','1')
        .trigger('input')
        .should('have.value','1');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','50')
        .trigger('input');

    })
    it('[005-002-01][Valid] Range between 1-50.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','51')
        .trigger('input')
        .should('have.value','51');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','100')
        .trigger('input').should('have.value','51');

    })
    it('[005-002-03][Valid] Range between 101-150',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','101')
        .trigger('input')
        .should('have.value','101');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','150')
        .trigger('input').should('have.value','150');

    })
    it('[005-002-04][Valid] Range between 151-200',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','151')
        .trigger('input')
        .should('have.value','151');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','200')
        .trigger('input').should('have.value','200');

    })
    it('[005-002-05][Valid] Range between 0-0',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','0')
        .trigger('input')
        .should('have.value','0');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','0')
        .trigger('input').should('have.value','0');

    })
    
})