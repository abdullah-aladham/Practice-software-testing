const { faker } = require("@faker-js/faker");

describe('Forgot Password TestSutie',()=>{
    beforeEach(()=>{
        cy.visit('auth/forgot-password');
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/forgot-password')
    })
    it('[003-0020] Send request with valid email format',()=>{
        cy.get("#email").should('be.visible').type('customer@practicesoftwaretesting.com');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.intercept({url: "https://api.practicesoftwaretesting.com/users/forgot-password",method:"POST"

        }).as("ForgotPassformSubmitReq")
        cy.wait("@ForgotPassformSubmitReq").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })
    it('[003-0021] Send request with invalid email format (e.g : admin@practicesoftwaretesting)',()=>{
        cy.get("#email").should('be.visible').type('admin@practicesoftwaretesting');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        // cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','The selected email is invalid.')
   cy.intercept({method:"POST",url:"https://api.practicesoftwaretesting.com/users/forgot-password"}).as("InvalidReq")
   cy.wait("@InvalidReq").then(interception =>{
    cy.wrap(interception.response.statusCode).should('eq',422)
   })
    })
    
    it('[003-0023] Send request with number',()=>{

        cy.get('input[data-test="email"]').should('be.visible').type('541541');
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="alert alert-danger mt-3"]').should('be.visible').and('have.text','invalid email format')
    })
    it('[003-0024] Send request with blank',()=>{
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email is required')
    })
    it('[003-0025] [Invalid] Send request with not registered email',()=>{
        cy.get("#email").should('be.visible').type(faker.internet.email());
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        // cy.get('.alert').should('be.visible').and('have.text','The selected email is invalid.')
        cy.intercept({method:"POST",
            url:"https://api.practicesoftwaretesting.com/users/forgot-password"
        }).as("invalidForgotPassReq")
        cy.wait("@invalidForgotPassReq").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',422)
        })
    })
    	
    it('[003-0026] [Valid] Send request with registered email.',()=>{
        cy.get("#email").should('be.visible').type("customer@practicesoftwaretesting.com");
        cy.get("input[value='Set New Password']").should('be.visible').and('not.be.disabled').click();
        cy.intercept({method:"POST",
            url:"https://api.practicesoftwaretesting.com/users/forgot-password"
        }).as("ValidRequest")
        cy.wait("@ValidRequest").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })//bug report must be done
})