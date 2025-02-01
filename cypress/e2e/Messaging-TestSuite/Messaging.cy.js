describe('Messaging TestSuite',()=>{
    beforeEach(()=>{
        cy.login()
        cy.visit('/account')
        cy.url().should('eq','https://practicesoftwaretesting.com/account')
        cy.get("#menu").should('be.visible').and('not.be.disabled').click();

    })

    it('[004-002-0001] [Valid] View Received messages',()=>{
        cy.get("#menu").should('be.visible').and('not.be.disabled').click();
        cy.get(".dropdown-item[data-test='nav-my-messages']").should('be.visible').and('not.be.disabled').click();
        cy.url().should('eq','https://practicesoftwaretesting.com/account/messages');
    })
    it('[004-002-0002][Valid] Respond to incoming message with data.',()=>{
        cy.get('.btn.btn-sm.btn-primary.mr-1').should('be.visible').and('not.be.disabled').click();
        cy.get('#message').should('be.visible').should('not.be.disabled').type('Test done by Abdullah aladham')
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
        cy.get('body > app-root:nth-child(2) > div:nth-child(2) > app-message-detail:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)').should('be.visible')
    })
    it('[004-002-0003][invalid] Respond to incoming message with blank data',()=>{
        cy.get('.btn.btn-sm.btn-primary.mr-1').should('be.visible').and('not.be.disabled').click();//Another one🤣
       
    })
})