describe('Sort Test Suite',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.url().should('eq','https://practicesoftwaretesting.com/')
    })
    it('[005-001-01][Valid] Sort products alphabetically from A-Z.',()=>{

        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Name (A - Z)')
        cy.intercept({method:"GET",
            url:"https://api.practicesoftwaretesting.com/products?sort=name,asc&between=price,1,100&page=0"
        }).as("getProdA-Z")
        cy.wait("@getProdA-Z").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })

    })
    it('[005-001-02][Valid] Sort products alphabetically from Z-A.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Name (Z - A)');
        cy.intercept({url:"https://api.practicesoftwaretesting.com/products?sort=name,desc&between=price,1,100&page=0"})
        .as("GetProdZ-A")
        cy.wait("@GetProdZ-A").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })
    it('[005-001-03][Valid] Sort products by price from High-Low.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Price (High - Low)');
        cy.intercept({url:"        https://api.practicesoftwaretesting.com/products?sort=price,desc&between=price,1,100&page=0"})
        .as("GetProdH-L")
        cy.wait("@GetProdH-L").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })
    it('[005-001-04][Valid] Sort products by price from Low-High.',()=>{
        cy.get("select[aria-label='sort']").should('be.visible').and('not.be.disabled').select('Price (Low - High)');
        cy.intercept({url:"https://api.practicesoftwaretesting.com/products?sort=price,asc&between=price,1,100&page=0"})
        .as("GetProdL-H")
        cy.wait("@GetProdL-H").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })

})