describe('Checkout-TestSuite',()=>{
   it('[008-0001]Add product to checkout list',()=>{
    cy.login()
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
    cy.visit('/');
    cy.url().should('eq','https://practicesoftwaretesting.com/account');
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

})
