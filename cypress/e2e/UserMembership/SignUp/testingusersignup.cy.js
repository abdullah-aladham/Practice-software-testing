const { faker } = require("@faker-js/faker");

describe('testing user signup',()=>{
    beforeEach(()=>{
        cy.visit('/auth/login')
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/login');

    })
    it('registers the testuser',()=>{
        cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
        // cy.url().should('eq','auth/register');
        cy.get('input[data-test="first-name"]').and('not.be.disabled').type('test');
        cy.get('input[id="last_name"]').and('not.be.disabled').type('user');
        cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1998-01-16');
        cy.get('[data-test="street"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
        cy.get('[data-test="postal_code"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
        cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
        cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
        cy.get('select[id="country"]').select("PS");
        cy.get('input[data-test="phone"]').should('be.visible').type(1234567889);
        cy.get('input[id="email"]').should('be.visible').type('test13@test.com');
        cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('TH!sIsAP@ssword184')
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
        cy.intercept({method:"POST",url:"https://api.practicesoftwaretesting.com/users/register"}).as("AccountCreated")
        cy.wait("@AccountCreated").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',201)
        })
    })
})