describe('Favorites Testsuite',()=>{
    it('[006-0005] [Valid] Adding product to favorites when signed in',()=>{
        cy.login("customer@practicesoftwaretesting.com","welcome01")
        cy.get("a:nth-child(1) div:nth-child(2) h5:nth-child(1)").should('be.visible').and('not.be.disabled')
        .should('have.text','Combination Pliers').click();
        cy.get("#btn-add-to-favorites").should('be.visible').and('not.be.disabled').click();
        cy.get("div[class='ng-tns-c2308121496-1 toast-message ng-star-inserted']").should('be.visible').and('have.text',' Product added to your favorites list.')
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("FacoritesOptionsReq")
        cy.wait("@FacoritesOptionsReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("AddtoFavoritesReq")
        cy.wait("@AddtoFavoritesReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',201)
        });
    })
    	
    it('[006-0006][invalid] Adding product to favorites when not signed in',()=>{
        cy.get("a:nth-child(1) div:nth-child(2) h5:nth-child(1)").should('be.visible').and('not.be.disabled')
        .should('have.text','Combination Pliers').click();
        cy.get("#btn-add-to-favorites").should('be.visible').and('not.be.disabled').click();
        cy.get('div[class="ng-tns-c2308121496-0 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error"]').should('be.visible').and('have.text',' Product added to your favorites list.')
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("FacoritesOptionsReq")
        cy.wait("@FacoritesOptionsReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        });
        cy.intercept({
            method:"POST",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("AddtoFavoritesReq")
        cy.wait("@FailAddToFavoritesReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',401)
        });

    })

    it("[006-0007][Valid] View Favorites lists",()=>{
        cy.login("customer@practicesoftwaretesting.com","welcome01")
        cy.get(".dropdown-item[data-test='nav-my-favorites']").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("FavoritesList");
        cy.wait("@FavoritesList").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
        });
        it("[006-0008] [Valid] Remove item from favorites list",()=>{
            cy.login();
            cy.get(".dropdown-item[data-test='nav-my-favorites']").should('be.visible').and('not.be.disabled').click();

            cy.intercept({
                method:"OPTIONS",
                url:"https://api.practicesoftwaretesting.com/favorites/01JK9K2GGJTN61SJW5W43NKWR2"
            }).as("DeleteOPTIONAPI");
            cy.wait("@DeleteOPTIONAPI").then(interception =>{
                console.log(interception);
                cy.wrap(interception.response.statusCode).should('eq',204)
            });
            cy.intercept({
                method:"DELETE",
                url:"https://api.practicesoftwaretesting.com/favorites/01JK9K2GGJTN61SJW5W43NKWR2"
            }).as("ProdDeleteRequest");
            cy.wait("@ProdDeleteRequest").then(interception =>{
                console.log(interception);
                cy.wrap(interception.response.statusCode).should('eq',204)
            });
        })
    })

})