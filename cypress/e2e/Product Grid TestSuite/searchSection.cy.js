describe('Search Section Testsuite',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.url().should('eq','https://practicesoftwaretesting.com/')
    })
    it('[005-003-01] [invalid] trying to search without typing in search bar.',()=>{
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    })
    it('[005-003-02] [invalid] trying to search with numerical data between 0-9',()=>{
        cy.get("#search-query").should('be.visible').and('not.be.disabled').type("0{enter}");
        //nothing should be happened
    })
    it('[005-003-03] [Valid] trying to search with string data[e.g :hammer]',()=>{
        cy.get("#search-query").should('be.visible').and('not.be.disabled').type("hammer{enter}");
        cy.intercept({
            method:"GET",
            url:'/products/search?q=hammer',
            
        }).as('getHammer');
        cy.wait('@getHammer');
        cy.get("h3[data-test='search-caption']").should('have.text','Searched for: hammer').and('be.visible')

    })
    it('[005-003-04] [Invalid] trying to search with less than 3 digit number',()=>{
        cy.get("#search-query").should('be.visible').and('not.be.disabled').type("1{enter}");
         
    })    
    		
    it('[005-003-05] [invalid] trying to search with less than 3 character string.',()=>{
        cy.get("#search-query").should('be.visible').and('not.be.disabled').type("he{enter}");
         
    })    
    
    it('[005-003-06][Valid] trying to search with irrelevant data to the product\business. (e.g:cola).',()=>{
        cy.get("#search-query").should('be.visible').and('not.be.disabled').type("cola{enter}");
        cy.get("h3[data-test='search-caption']").should('be.visible').and('have.text',"Searched for: cola"); 
        cy.get("div[data-test='no-results']").should('have.text','There are no products found.');

    })    
})