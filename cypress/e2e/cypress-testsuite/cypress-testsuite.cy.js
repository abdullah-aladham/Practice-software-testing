describe('Cypress testsuite[Not signed in]',()=>{
    it('[010-PST-0001]tries to check if steps are really done and affects the checkout list api by adding product to it without sign in',()=>{
        cy.visit('/')
        cy.url().should('eq','https://practicesoftwaretesting.com/')
        cy.get("img[alt='Pliers']").should('be.visible').and('not.be.disabled').click()
        cy.get("#btn-add-to-cart").should('not.be.disabled').and('be.visible').click();
        cy.get('.ng-trigger').should('be.visible').and('have.text',' Product added to shopping cart. ');
        cy.get("a[aria-label='cart']").should('be.visible');
    })
    it.only('[010-PST-0002]tries to check if the product that was added in the first testcase remains in the checkout list without sign in',()=>{
        cy.visit('/')
cy.url().should('eq','https://practicesoftwaretesting.com/')
   
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    })
})
describe("Cypress TestSuite[Signed in]",()=>{

    it('[010-PST-0003]tries to check if steps are really done and affects the checkout list api by adding product to it with sign in',()=>{
        cy.login("test13@test.com","TH!sIsAP@ssword184")

        cy.visit('/')
        cy.url().should('eq','https://practicesoftwaretesting.com/')
        cy.get("img[alt='Pliers']").should('be.visible').and('not.be.disabled').click()
        cy.get("#btn-add-to-cart").should('not.be.disabled').and('be.visible').click();
        cy.get('.ng-trigger').should('be.visible').and('have.text',' Product added to shopping cart. ');
        cy.get("a[aria-label='cart']").should('be.visible');
    })
    it('[010-PST-0004]tries to check if the product that was added in the first testcase remains in the checkout list with sign in',()=>{
        cy.login("test13@test.com","TH!sIsAP@ssword184")

        cy.visit('/')
cy.url().should('eq','https://practicesoftwaretesting.com/')
   
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    }) //bug report needs to be done for signed and not signed in [Nodejs v22.13.0]
})