describe('Languages testSuite',()=>{
    it.only('[01-0006] Clicks on “DE” Symbol',()=>{
        cy.visit('/');
        cy.url().should('eq',"https://practicesoftwaretesting.com/")
        cy.get('button[id="language"]').should('be.visible').and('not.be.disabled').click();
        cy.get('ul[id="dropdown-animated"]').should('be.visible');
        cy.get("div[class='btn-group dropdown'] li:nth-child(1) a:nth-child(1)").should('be.visible').and('not.be.disabled').click()
        cy.intercept({method:"GET",
            url:"https://practicesoftwaretesting.com/assets/i18n/de.json"
        }).as("DElang")
        cy.wait('@DElang').then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })
    it('[01-0006-01][Valid] Click on “DE” option for Germany language For UI Only.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Kontakt')
    })
    it('[01-0006-02] Click on “EN” option for English language For UI Only.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Contact')
    })
    it('[01-0006-03] Click on “ES” option for Spain language.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Contacto')
    })
    it('[01-0006-04] Click on “FR” option for French language.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Contact')
    })
    it('[01-0006-05] Click on “NL” option for Netherlands language.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','Contact')
    })
    it('[01-0006-06] Click on “TR” option for TÜRKİYE language.',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get(".nav-link[data-test='nav-contact']").should('have.text','İletişim')
    })
    
    it('[01-0006-07] [Invalid] Click on “DE” option for Germany language [HTML “lang” attribute update.]',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','de');
        

    })
    it('[01-0006-08][Invalid] Click on “ES” option for Spain language [HTML “lang” attribute] update].',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','es');
        

    })
    it('[01-0006-09] [Invalid] Click on “FR” option for French language [HTML “lang” attribute] update].',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','fr');
        

    })
    it('[01-0006-10] [Invalid] Click on “NL” option for Netherlands language [HTML “lang” attribute update ].',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','nl');
        

    })
    it('[01-0006-11][Invalid]  Click on “TR” option for TÜRKİYE language [HTML “lang” attribute] update ].',()=>{
        cy.visit('/');
        cy.get('[data-test="language"]').should('be.visible').click()
        cy.get('#dropdown-animated > :nth-child(1) > .dropdown-item').should('be.visible').click();
        cy.get('html').invoke('attr','lang').should('eq','tr');
        

    })
    

})