const { faker } = require("@faker-js/faker");

describe('Forgot Password TestSutie',()=>{
    beforeEach(()=>{
        cy.visit('auth/login');
        cy.get("a[aria-label='Forgot your Password?']").should('be.visible').click();
        cy.url().should('eq','auth/forgot-password')
    })
    it('[003-0020] Send request with valid email format(e.g: customer@practicesoftwaretesting.com)',()=>{
        cy.get("#email").should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();

    })
    it('[003-0021] Send request with invalid email format (e.g : admin@practicesoftwaretesting)',()=>{
        cy.get("#email").should('be.visible').and('be.null').type('admin@practicesoftwaretesting');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','The selected email is invalid.')
    })
    
    it('[003-0023] Send request with number',()=>{
        cy.get("#email").should('be.visible').and('be.null').type('541541');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','invalid email format')
    })
    it('[003-0024] Send request with blank',()=>{
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','Email is required')
    })
    it('[003-0025] [Invalid] Send request with not registered email',()=>{
        cy.get("#email").should('be.visible').and('be.null').type(faker.internet.email);
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','The selected email is invalid.')
    })
    	
    it('[003-0026] [Valid] Send request with registered email.',()=>{
        cy.get("#email").should('be.visible').and('be.null').type("customer@practicesoftwaretesting.com");
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
    })//bug report must be done
})