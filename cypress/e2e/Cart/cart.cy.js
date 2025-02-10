// const { method } = require("cypress/types/bluebird");

describe('Cart TestSuite',()=>{
    it.only('[006-0001] [Valid] Add product to cart without sign in',()=>{
        cy.visit('/')
     cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > h5:nth-child(1)")
     .should('be.visible').should('have.text','Combination Pliers').click();
        cy.intercept({
            method: "GET",
            url:"https://api.practicesoftwaretesting.com/products/01JK6FGEG2FYXRW6M9PH3FE93X"
        }).as('combinationPliers');
        cy.wait("@combinationPliers");
        cy.url().should('eq','/product/01JK6FGEG2FYXRW6M9PH3FE93X');
        cy.get("#btn-add-to-cart").should('be.visible').and('not.be.disabled').click();
        cy.get("#btn-add-to-cart").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"post",
            url:"https://api.practicesoftwaretesting.com/carts"
        }).as('CartAPIOptionsRequest');
        cy.get("@CartAPIOptionsRequest")
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/carts"
        }
        ).as('AddtoCart');
        cy.wait('@AddtoCart').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',201)
        });
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/carts/01jk8b99fmv14r5v68nwd9sshv"
        }
        ).as('AddtoCartOptionsChecking');
        cy.wait('@AddtoCartOptionsChecking').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/carts/01jk8b99fmv14r5v68nwd9sshv"
        }
        ).as('AddProductToCart');
        cy.wait("@AddProductToCart").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
    })
    it('[006-0002] [Valid] Add product to cart with sign in',()=>{
    cy.login();
        cy.visit('/');
        cy.url().should('eq','/');
        cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > h5:nth-child(1)")
        .should('be.visible').should('have.text','Combination Pliers').click();
        cy.intercept({
            method: "GET",
            url:"https://api.practicesoftwaretesting.com/products/01JK6FGEG2FYXRW6M9PH3FE93X"
        }).as('combinationPliers');
        cy.wait("@combinationPliers");
        cy.url().should('eq','/product/01JK6FGEG2FYXRW6M9PH3FE93X');
        cy.get("#btn-add-to-cart").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"post",
            url:"https://api.practicesoftwaretesting.com/carts"
        }).as('CartAPIOptionsRequest');
        cy.get("@CartAPIOptionsRequest")
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/carts"
        }
        ).as('AddtoCart');
        cy.wait('@AddtoCart').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',201)
        });
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/carts/01jk8b99fmv14r5v68nwd9sshv"
        }
        ).as('AddtoCartOptionsChecking');
        cy.wait('@AddtoCartOptionsChecking').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/carts/01jk8b99fmv14r5v68nwd9sshv"
        }
        ).as('AddProductToCart');
        cy.wait("@AddProductToCart").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
        cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled');
        cy.get("#lblCartCount").should('be.visible').and('have.css','color:rgba(220,53,69,1)').and('be.greaterThan','0')
    })
    it('[006-0003][Valid] View Cart list without sign in',()=>{
        cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();
        cy.url().should('eq','/checkout');
        cy.intercept({
            method:"GET",
            'url':"https://api.practicesoftwaretesting.com/carts/01jk8fgb99ja76a1tqfjcgpyyw"
        }).as('CartList');
        cy.wait('@CartList').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
    })

    it('[006-0004][Valid] View Cart List with sign in',()=>{
        cy.login();
        cy.get("a[aria-label='cart']").should('be.visible').and('not.be.disabled').click();
        cy.url().should('eq','/checkout');
        cy.intercept({
            method:"GET",
            'url':"https://api.practicesoftwaretesting.com/carts/01jk8fgb99ja76a1tqfjcgpyyw"
        }).as('CartList');
        cy.wait('@CartList').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
    })

})