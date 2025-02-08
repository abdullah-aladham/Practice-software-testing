// const { faker } = require("@faker-js/faker/.")

describe('Checkout-TestSuite',()=>{
   it('[008-0001]Add product to checkout list',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.visit('/')
    cy.url().should('eq','https://practicesoftwaretesting.com/')
    cy.get("a:nth-child(1) div:nth-child(2) h5:nth-child(1)").should('be.visible').and('not.be.disabled').click()
    cy.get("#btn-add-to-cart").should('not.be.disabled').and('be.visible').click();
    cy.get('.ng-trigger').should('be.visible').and('have.text',' Product added to shopping cart. ');
    // cy.intercept({
    //     method:"OPTIONS",
    //     url:"https://api.practicesoftwaretesting.com/carts/01jkc8946hc30mdqmjdeqwd7rb"
    // }).as("AddtoCheckoutOptionsReq");
    // cy.wait("@AddtoCheckoutOptionsReq")

    // cy.intercept({
    //     method:"GET",
    //     url:"https://api.practicesoftwaretesting.com/carts/01jkc8946hc30mdqmjdeqwd7rb"
    // }).as("AddtoCheckoutGETReq");
    // cy.wait("@AddtoCheckoutGETReq")
    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/carts/01jkhgrk8x9q1k7pvv7qj89r36"
    }).as("AddToCheckoutPostReq");
    cy.wait("@AddToCheckoutPostReq").then(interception =>{
        console.log(interception);
        cy.wrap(interception.response.statusCode).should('eq',200)
    });
    cy.intercept({url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==",
        method:"GET"
    
    }).as("SuccessNotification");
   }) 

 it.only("[008-0002][Valid]View Checkout list",()=>{
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
it("[008-0003][Valid]View Checkout list",()=>{
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
 it('[008-0004] [Valid] change the quantity of product(s).',()=>{
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
 it('[008-0005] [Valid] Remove product from the checkout list.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.visit('/');
    cy.url().should('eq','https://practicesoftwaretesting.com/');
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();

    
 })
 it('[008-0006] [Valid] Remove product from the checkout list.',()=>{
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
 it('[008-0007][Valid] Buying a product with “bank transfer” Method using valid data.',()=>{
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
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("AuthorizationOptionsReq");
 })
 it(' [008-0008][Valid] Buying a product with “Cash on delivery” Method..',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Cash on Delivery');
   
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CashonDileveryReq");
 })
 it('[008-0007][Valid] Buying a product with “Credit Card” Method.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
   cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
   cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type(faker.date.future)
   cy.get("#cvv").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardCVV);
   cy.get("#card_holder_name").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardIssuer);
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CashonDileveryReq");
 })

 
 it('[008-0008]&[008-0026][Valid] Buying a product with “Buy now Pay later” Method.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Buy Now Pay Later');
   cy.get("#monthly_installments").should('be.visible').and('not.be.disabled').select("3 Monthly Installments")
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("BuyNowPayLaterReq");
    cy.wait("@BuyNowPayLaterReq");
 })
 
 it('[008-0009][Valid] Buying a product with “Gift Card” Method.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#gift_card_number").should('be.visible').and('not.be.disabled').type('1234f34wa32')
    cy.get("#validation_code").should('be.visible').and('not.be.disabled').type('juweg123')
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("BuyNowPayLaterReq");
    cy.wait("@POSTReqDone");
 })

 	
 it('[008-00010][Invalid] Buying a product with “Bank Transfer” with invalid bank name format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('bank-transfer');
    cy.get("#bank_name").should('be.visible').and('not.be.disabled').type('bank1');
    cy.get("#account_name").should('be.visible').and('not.be.disabled').type(faker.finance.accountName);
    cy.get("#account_number").should('be.visible').and('not.be.disabled').type(faker.finance.accountNumber);
    cy.get(".alert.alert-danger").should('be.visible').and('have.text','Bank name can only contain letters and spaces.');
    cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')


 })
 
 it('[008-0011][Invalid] Buying a product with “Bank Transfer” with invalid Account Name format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('bank-transfer');
    cy.get("#bank_name").should('be.visible').and('not.be.disabled').type('bank1');
    cy.get("#account_name").should('be.visible').and('not.be.disabled').type('John_doe');
    cy.get("#account_number").should('be.visible').and('not.be.disabled').type(faker.finance.accountNumber);
    cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-checkout:nth-child(2) > aw-wizard:nth-child(1) > div:nth-child(2) > aw-wizard-completion-step:nth-child(4) > app-payment:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(6)")
    .should('be.visible').and('have.text','Account name can contain letters, numbers, spaces, periods, apostrophes, and hyphens.');
    cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')


 })
 	
 it('[008-0012][Invalid] Buying a product with “Bank Transfer” with invalid Account Number format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('bank-transfer');
    cy.get("#bank_name").should('be.visible').and('not.be.disabled').type('bank1');
    cy.get("#account_name").should('be.visible').and('not.be.disabled').type(faker.finance.accountName);
    cy.get("#account_number").should('be.visible').and('not.be.disabled').type('2314321g');
    cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-checkout:nth-child(2) > aw-wizard:nth-child(1) > div:nth-child(2) > aw-wizard-completion-step:nth-child(4) > app-payment:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(10)")
    .should('be.visible').and('have.text','Account number must be numeric.');
    cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')


 })
 
 it('[008-0013][Invalid] Buying a product with “Credit Card” with Credit Card Number with invalid numeric format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
   cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(34235245245)
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Invalid card number format.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 it('[008-0014][Invalid] Buying a product with “Credit Card” with Credit Card Number in text format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
   cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(34235245245)
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Invalid card number format.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 	
 it('[008-0015][Invalid] Buying a product with “Credit Card” with Credit Card Number with special characters format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
   cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type("-=@#$%^&*()##$%^&*")
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Invalid card number format.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 
 it('[008-0016][Invalid] Buying a product with “Credit Card” with Expiration date with ‘mm/dd/yyyy format',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("01/14/2027")
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Invalid card number format.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 it('[008-0017][Invalid] Buying a product with “Credit Card” with Expiration date that is expired (e.g 04/2024)',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("04/2024")
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Expiration date must be in the future.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 it(' •	[008-0018][Invalid] Buying a product with “Credit Card” with Expiration date with string data',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Invalid date format. Use MM/YYYY.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
  

 it(' [008-0020][Invalid] Buying a product with “Credit Card” CVV input with invalid numeric data format (5 digit number)',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
    cy.get("#cvv").should('be.visible').and("not.be.disabled").type('12345')
   cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','CVV must be 3 or 4 digits.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 it(' [008-0021][Invalid] Buying a product with “Credit Card” with blank CVV input ',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
    // cy.get("#cvv").should('be.visible').and("not.be.disabled").type('12345')
   cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','CVV must be 3 or 4 digits.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
cy.intercept({
    method:"OPTIONS",
    url:"https://api.practicesoftwaretesting.com/payment/check"
}).as("AuthorizationOptionsReq");
cy.intercept({
    method:"POST",
    url:"https://api.practicesoftwaretesting.com/payment/check"
}).as("Content-Disposition");
//Another One [found a bug since it should give a warning message in ui]
 })
 
 it('[008-0022][Invalid] Buying a product with “Credit Card” CVV input with invalid numeric data format (2 or less  digit number)',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
    cy.get("#cvv").should('be.visible').and("not.be.disabled").type('01')
   cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','CVV must be 3 or 4 digits.');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
 })
 
 it('[008-0023][Invalid] Buying a product with “Credit Card” Card Holder Name input with string that contains numbers',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
    cy.get("#cvv").should('be.visible').and("not.be.disabled").type('01')
    cy.get("#card_holder_name").should('be.visible').and("not.be.disabled").type("John doe2")
   cy.get(".alert.alert-danger").should('be.visible').and('have.text','Card Holder Name must be string format only');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
cy.intercept({method:"POST",
    url:"https://api.practicesoftwaretesting.com/payment/check"
 }).as("CheckPOSTReq")
 cy.intercept({method:"OPTIONS",
    url:"https://api.practicesoftwaretesting.com/payment/check"
 }).as("OPTIONSReq")
 })//another one
 it('[008-0024][Invalid] Buying a product with “Credit Card” Card Holder Name input with string that contains special characters like dot or comma.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#credit_card_number").should('be.visible').and('not.be.disabled').type(faker.finance.creditCardNumber)
    cy.get("#expiration_date").should('be.visible').and('not.be.disabled').type("ddd")
    cy.get("#cvv").should('be.visible').and("not.be.disabled").type('01')
    cy.get("#card_holder_name").should('be.visible').and("not.be.disabled").type("John.doe")
   cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','Card Holder Name must be string format only');
cy.get("button[data-test='finish']").should('be.visible').and('be.disabled');
cy.intercept({method:"POST",
    url:"https://api.practicesoftwaretesting.com/payment/check"
 }).as("CheckPOSTReq")
 cy.intercept({method:"OPTIONS",
    url:"https://api.practicesoftwaretesting.com/payment/check"
 }).as("OPTIONSReq")
 })

 
 it('[008-0025][Invalid] Buying a product with “Buy now Pay Later” option and not choosing any option from “Choose your monthly installments”.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Buy Now Pay Later');
//    cy.get("#monthly_installments").should('be.visible').and('not.be.disabled').select("3 Monthly Installments")

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("FailedCheck");
    cy.wait("@FailCheck");
 })

 it('[008-0027][Valid] Buying a product with “Buy now Pay Later” option and choosing “6 monthly Installments”.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Buy Now Pay Later');
   cy.get("#monthly_installments").should('be.visible').and('not.be.disabled').select("6 Monthly Installments")
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("BuyNowPayLaterReq");
    cy.wait("@BuyNowPayLaterReq");
 })
 it('[008-0028][Valid] Buying a product with “Buy now Pay Later” option and choosing “9 monthly Installments”.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Buy Now Pay Later');
   cy.get("#monthly_installments").should('be.visible').and('not.be.disabled').select("9 Monthly Installments")
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("BuyNowPayLaterReq");
    cy.wait("@BuyNowPayLaterReq");
 })
 	
 it('[008-0029][Valid] Buying a product with “Buy now Pay Later” option and choosing “12 monthly Installments”.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Buy Now Pay Later');
   cy.get("#monthly_installments").should('be.visible').and('not.be.disabled').select("9 Monthly Installments")
    cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');

    cy.intercept({
        method:"POST",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("CheckReq");
    cy.wait("@CheckReq")
    cy.intercept({
        method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/payment/check"
    }).as("BuyNowPayLaterReq");
    cy.wait("@BuyNowPayLaterReq");
 })
 	
 it('[008-0030][invalid] Buying a product with blank gift card number',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    // cy.get("#gift_card_number").should('be.visible').and('not.be.disabled').type('1234f34wa32')
    cy.get("#validation_code").should('be.visible').and('not.be.disabled').type('juweg123')
    // cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');
cy.get(".alert.alert-danger").should('be.visible').and('have.text','Gift card number must be alphanumeric.')
   
 })
 it('[008-0031][invalid] Buying a product with gift card number with invalid format(Contains special characters)',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    // cy.get("#gift_card_number").should('be.visible').and('not.be.disabled').type('1234f34wa32')
    cy.get("#validation_code").should('be.visible').and('not.be.disabled').type('juweg123')
    // cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');
cy.get(".alert.alert-danger").should('be.visible').and('have.text','Gift card number must be alphanumeric.')
   cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')
 })
 

 it('[008-0032][invalid] Buying a product with gift card by leaving the validation code blank',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#gift_card_number").should('be.visible').and('not.be.disabled').type('1234f34wa32')
    // cy.get("#validation_code").should('be.visible').and('not.be.disabled').type('juweg123')
    // cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');
cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','Validation code must be alphanumeric.')
   cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')
 })
 
 it('[008-0033][invalid] Buying a product with gift card by filling the “validation code” with invalid format.',()=>{
    cy.login("customer@practicesoftwaretesting.com","welcome01")
    cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled');
    cy.get("p[class='ng-star-inserted']").should('be.visible').and('not.be.disabled').and('have.text','Hello Jane Doe, you are already logged in. You can proceed to checkout.')
    cy.get("div[class='col-md-6 offset-md-3 login-form-1'] div[class='float-end ng-star-inserted'] button[type='button']").should('be.visible').and('not.be.disabled').click();
    cy.get("#state").should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('#postcode').should('be.visible').and('not.be.disabled').type('123456790')
    cy.get("#payment-method").select('Credit Card');
    cy.get("#gift_card_number").should('be.visible').and('not.be.disabled').type('1234f34wa32')
    cy.get("#validation_code").should('be.visible').and('not.be.disabled').type("lpgewpklpweg1'")
    // cy.get(".alert.alert-success.ng-star-inserted").should('be.visible').and('have.text','Payment was successful');
cy.get(".alert.alert-danger.ng-star-inserted").should('be.visible').and('have.text','Validation code must be alphanumeric.')
   cy.get("button[data-test='finish']").should('be.visible').and('be.disabled')
 })


})
