describe('Messaging TestSuite',()=>{
    beforeEach(()=>{
        cy.login("customer@practicesoftwaretesting.com","welcome01")
        cy.visit('/account')
        cy.url().should('eq','https://practicesoftwaretesting.com/account')
        cy.get("#menu").should('be.visible').and('not.be.disabled').click();

    })

    it('[004-002-0001] [Valid] View Received messages',()=>{
        cy.get("#menu").should('be.visible').and('not.be.disabled').click();
        cy.get('[data-test="nav-menu"]').should('be.visible').and('not.be.disabled').click();
        cy.get('[data-test="nav-my-messages"]').should('be.visible').and('not.be.disabled').click();
        cy.url().should('eq','https://practicesoftwaretesting.com/account/messages');
    })
    it('[004-002-0002][Valid] Respond to incoming message with data.',()=>{
        // cy.get('[data-test="nav-menu"]').should('be.visible').and('not.be.disabled').click();
        cy.get('[data-test="nav-messages"]').should('not.be.disabled').and('be.visible').click()
        cy.get('[style="white-space: nowrap;"] > .btn').should('be.visible').and('not.be.disabled').click()
        cy.get('#message').should('be.visible').should('not.be.disabled').type('Thanks for running this test , Test done by abdullah Aladham')
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
        cy.get('body > app-root:nth-child(2) > div:nth-child(2) > app-message-detail:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)').should('be.visible')
    })
    it.only('[004-002-0003][invalid] Respond to incoming message with blank data',()=>{
        cy.get('[data-test="nav-messages"]').should('be.visible').and('not.be.disabled').click()
        cy.get('.btn.btn-sm.btn-primary.mr-1').should('be.visible').and('not.be.disabled').click();//Another one🤣
        cy.get('[data-test="reply-submit"]').should('be.visible').and('not.be.disabled').click();
        cy.intercept({method:"POST",
        url:"https://api.practicesoftwaretesting.com/messages/01jkkxet8h5nradx0n845hwt9g/reply"
       }).as("NoBlankMsg");
       cy.wait("@NoBlankMsg")
    //    .then(interception =>{
    //     cy.wrap(interception.response.statusCode).should('eq',422)
    //    })
    })
})