describe('price range TestSuite',()=>{
    it('[005-002-01][Valid] Range between 1-50.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','1')
        .trigger('input');
        cy.get("span[aria-label='ngx-slider']").should('have.value','1');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','50')
        .trigger('input');
        cy.get("span[aria-label='ngx-slider-max']").should('have.value','50');

    })
   
    it('[005-002-02][Valid] Range between 1-50.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','1')
        .trigger('input')
        .should('have.value','1');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','50')
        .trigger('input').should('have.value','50');
        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,50&page=1',
            
        }).as('GetPriceRange101to150');
        cy.wait('@GetPriceRange101to150');

    })
    it('[005-002-03][Valid] Range between 101-150',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','101')
        .trigger('input')
        .should('have.value','101');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','150')
        .trigger('input').should('have.value','150');
        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,101,150&page=1',
            
        }).as('GetPriceRange101to150');
        cy.wait('@GetPriceRange101to150');
        cy.get("div[class='col-md-9'] div[class='container']").should('be.visible').and('not.have.text','There are no products found.');



    })
    it('[005-002-04][Valid] Range between 151-200',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','151')
        .trigger('input')
        .should('have.value','151');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','200')
        .trigger('input').should('have.value','200');
        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,100&page=1',
            
        }).as('GetPriceRange151to200');
        cy.wait('@GetPriceRange151to200');
        cy.get("div[class='col-md-9'] div[class='container']").should('be.visible').and('not.have.text','There are no products found.');


    })
    it('[005-002-05][Valid] Range between 0-0',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','0')
        .trigger('input')
        .should('have.value','0');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','0')
        .trigger('input').should('have.value','0');
        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,100&page=1',
            
        }).as('GetPriceRange0to0');
        cy.wait('@GetPriceRange0to0');
        cy.get("div[class='col-md-9'] div[class='container']").should('be.visible').and('have.text','There are no products found.');




    })
    it('[005-002-06][Valid][Default] Range between 1-100.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','1')
        .trigger('input');
        cy.get("span[aria-label='ngx-slider']").should('have.value','1');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','100')
        .trigger('input');
        cy.get("span[aria-label='ngx-slider-max']").should('have.value','100');
        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,100&page=1',
            
        }).as('GetPriceRange1to100');
        cy.wait('@GetPriceRange1to100');
        cy.get("div[class='col-md-9'] div[class='container']").should('be.visible').and('not.have.text','There are no products found.');



    })
    
})