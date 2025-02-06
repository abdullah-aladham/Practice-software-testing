const { faker } = require("@faker-js/faker/.")

describe('Checkout-TestSuite',()=>{
   it('[008-0001]Add product to checkout list',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.visit('/')
    cy.url().should('eq','https://practicesoftwaretesting.com/')
    cy.get("a:nth-child(1) div:nth-child(2) h5:nth-child(1)").should('be.visible').and('not.be.disabled').click()
    cy.get("#btn-add-to-cart").should('not.be.disabled').and('be.visible').click();
    cy.get('div[class="ng-tns-c2308121496-1 toast-message ng-star-inserted"]').should('be.visible').and('not.be.disabled');
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc8946hc30mdqmjdeqwd7rb"
    }).as("AddtoCheckoutOptionsReq");
    cy.wait("@AddtoCheckoutOptionsReq")

    cy.intercept({
        method:"GET",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc8946hc30mdqmjdeqwd7rb"
    }).as("AddtoCheckoutGETReq");
    cy.wait("@AddtoCheckoutGETReq")
    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc8946hc30mdqmjdeqwd7rb"
    }).as("AddToCheckoutPostReq");
    cy.wait("@AddToCheckoutPostReq")
    cy.intercept({url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==",
        method:"GET"
    
    }).as("SuccessNotification");
   }) 
 it("[008-0002][Valid]View Checkout list",()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")

    cy.visit('/');
    // cy.url().should('eq','https://practicesoftwaretesting.com/account');
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc9xt5w3tvjepf4tb7v6vr4"
    }).as('')
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/users/me"
    }).as('LoginReqOptions')
    cy.intercept({ 
        method: "GET",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc9xt5w3tvjepf4tb7v6vr4"
    }).as("getCartList");


 })
it("[008-0002][Valid]View Checkout list",()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.visit('/');
    cy.url().should('eq','https://practicesoftwaretesting.com/');
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc9xt5w3tvjepf4tb7v6vr4"
    }).as('')
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/users/me"
    }).as('LoginReqOptions')
    cy.intercept({ 
        method: "GET",
        url:"https://api.practicesoftwaretesting.com/carts/01jkc9xt5w3tvjepf4tb7v6vr4"
    }).as("getCartList");


 })
 it('[008-0003] [Valid] change the quantity of product(s).',()=>{
cy.get('a:nth-child(1) div:nth-child(2)').should('be.visible').and('not.be.disabled').click();
cy.get('#btn-add-to-cart').should('be.visible').and('not.be.disabled').click();
cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();
cy.get("#quantity-01jke8p3tgygx4akp99c39q0dm").should('be.visible').and('not.be.disabled').type("{arrowup}");
cy.get("div[class='ng-tns-c2308121496-0 toast-message ng-star-inserted']").should('be.visible').and('have.text',' Product quantity updated.');
cy.intercept({
    method:"OPTIONS",
    url:"https://api.practicesoftwaretesting.com/carts/01jke8p35t30pnkxtn79xm1315/product/quantity"
}).as("OptionsReq")
cy.intercept({
    method:"PUT",
    url:"https://api.practicesoftwaretesting.com/carts/01jke8p35t30pnkxtn79xm1315/product/quantity"
}).as("ChangingProdQuanity")
cy.intercept({
    method:"OPTIONS",
    url:"https://api.practicesoftwaretesting.com/carts/01jke8p35t30pnkxtn79xm1315"
}).as("GetOptionsReq")
cy.intercept({method:"GET",
    url:"https://api.practicesoftwaretesting.com/carts/01jke8p35t30pnkxtn79xm1315"
}).as("GetContent")
})
 it('[008-0004] [Valid] Remove product from the checkout list.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.visit('/');
    cy.url().should('eq','https://practicesoftwaretesting.com/');
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    
 })
 it('•	[008-0004] [Valid] Remove product from the checkout list.',()=>{
    cy.visit('/checkout')
    cy.url().should('eq','https://practicesoftwaretesting.com/checkout')
    cy.get('.btn.btn-danger').should('be.visible').and('not.be.disabled').click()
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/carts/01jkee2sasxj3epac86ngzqfga/product/01JKEDJB1F1R4TMJ6F7WK8MJ9T"

    }).as("DeleteOptionsReq");
    cy.intercept({
        method:"DELETE",
        url:"https://api.practicesoftwaretesting.com/carts/01jkee2sasxj3epac86ngzqfga/product/01JKEDJB1F1R4TMJ6F7WK8MJ9T"
        }).as("DeleteReq");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/carts/01jkee2sasxj3epac86ngzqfga"
        }).as("GetListAfterDeletion")
 })
 it('[008-0005][Valid] Buying a product with “bank transfer” Method using valid data.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('bank-transfer');
    cy.get("#bank_name").should('be.visible').and('not.be.disabled').type('bank');
    cy.get("#account_name").should('be.visible').and('not.be.disabled').type(faker.finance.accountName);
    cy.get("#account_number").should('be.visible').and('not.be.disabled').type(faker.finance.accountNumber);
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("AuthorizationOptionsReq");
 })
 it(' [008-0006][Valid] Buying a product with “Cash on delivery” Method..',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('bank-transfer');
    cy.get("#bank_name").should('be.visible').and('not.be.disabled').type('bank');
    cy.get("#account_name").should('be.visible').and('not.be.disabled').type(faker.finance.accountName);
    cy.get("#account_number").should('be.visible').and('not.be.disabled').type(faker.finance.accountNumber);
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("AuthorizationOptionsReq");
 })
})
