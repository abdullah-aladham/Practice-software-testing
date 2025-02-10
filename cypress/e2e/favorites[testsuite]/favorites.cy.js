describe('Favorites Testsuite',()=>{
    it('[006-0005] [Valid] Adding product to favorites when signed in',()=>{
        cy("customer@practicesoftwaretesting.com","welcome01")
        cy.visit('/')
        cy.url().should('eq','https://practicesoftwaretesting.com/')
        cy.get("img[alt='Combination Pliers']").should('be.visible').and('not.be.disabled').click();
        cy.get("#btn-add-to-favorites").should('be.visible').and('not.be.disabled').click();
        cy.get('.ng-trigger').should('be.visible').and('have.text',' Product added to your favorites list. ')
        // cy.intercept({
        //     method:"OPTIONS",
        //     url:"https://api.practicesoftwaretesting.com/favorites"
        // }).as("FacoritesOptionsReq")
        // cy.wait("@FacoritesOptionsReq").then(interception =>{
        //     console.log(interception);
        //     cy.wrap(interception.response.statusCode).should('eq',204)
        // });
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
        cy.visit('/');
        cy.url().should('eq','https://practicesoftwaretesting.com/')
        cy.get("img[alt='Combination Pliers']").should('be.visible').and('not.be.disabled').click();
        cy.get("#btn-add-to-favorites").should('be.visible').and('not.be.disabled').click();
        cy.get('.ng-trigger').should('be.visible').and('have.text','Unauthorized, can not add product to your favorite list.')
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
        cy.visit('/account')
        cy.url().should('eq','https://practicesoftwaretesting.com/account')
        cy.get(".dropdown-item[data-test='nav-my-favorites']").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/favorites"
        }).as("FavoritesList");
        cy.wait("@FavoritesList").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
        });
    })
        it("[006-0008] [Valid] Remove item from favorites list",()=>{
            cy.login("customer@practicesoftwaretesting.com","welcome01");
            cy.visit('/account')
            cy.url().should('eq','https://practicesoftwaretesting.com/account')
            cy.get("#menu").should('be.visible').and('not.be.disabled').click()
            cy.get(".dropdown-item[data-test='nav-my-favorites']").should('be.visible').and('not.be.disabled').click();
            cy.intercept({method:"GET",
                url:"https://api.practicesoftwaretesting.com/favorites"
            }).as("FetchFavList")
            cy.wait("@FetchFavList")
            cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-favorites:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)")
            .should('be.visible').and('not.be.disabled').click()
            // cy.intercept({
            //     method:"OPTIONS",
            //     url:"https://api.practicesoftwaretesting.com/favorites/01JK9K2GGJTN61SJW5W43NKWR2"
            // }).as("DeleteOPTIONAPI");
            // cy.wait("@DeleteOPTIONAPI").then(interception =>{
            //     console.log(interception);
            //     cy.wrap(interception.response.statusCode).should('eq',204)
            // });
            cy.intercept({
                method:"DELETE",
                url:"https://api.practicesoftwaretesting.com/favorites/01JKHDPHZZA5WVYX6Y9WM5QWW8"
            }).as("ProdDeleteRequest");
            cy.wait("@ProdDeleteRequest").then(interception =>{
                console.log(interception);
                cy.wrap(interception.response.statusCode).should('eq',204)
            });
        })
        it('adding a product to favorites that is already added',()=>{
            cy.login("customer@practicesoftwaretesting.com","welcome01")
            cy.visit('/')
            cy.url().should('eq','https://practicesoftwaretesting.com/')
            cy.get("img[alt='Combination Pliers']").should('be.visible').and('not.be.disabled').click();
            cy.get("#btn-add-to-favorites").should('be.visible').and('not.be.disabled').click();
            cy.get('.ng-trigger').should('be.visible').and('have.text',' Product already in your favorites list. ')
            // cy.intercept({
            //     method:"OPTIONS",
            //     url:"https://api.practicesoftwaretesting.com/favorites"
            // }).as("FacoritesOptionsReq")
            // cy.wait("@FacoritesOptionsReq").then(interception =>{
            //     console.log(interception);
            //     cy.wrap(interception.response.statusCode).should('eq',204)
            // });
            cy.intercept({
                method:"POST",
                url:"https://api.practicesoftwaretesting.com/favorites"
            }).as("AddtoFavoritesReq")
            cy.wait("@AddtoFavoritesReq").then(interception =>{
                console.log(interception);
                cy.wrap(interception.response.statusCode).should('eq',401)
            });
            
            cy.intercept({
                method:"POST",
                url:"https://api.practicesoftwaretesting.com/favorites"
            }).as("AddtoFavoritesReq")
            cy.wait("@AddtoFavoritesReq").then(interception =>{
                console.log(interception);
                cy.wrap(interception.response.statusCode).should('eq',401)
            });
        })
    })