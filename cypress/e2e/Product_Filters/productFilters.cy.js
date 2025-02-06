describe('Product Filters TestSuite',()=>{
    it('[009-0001] Filter products by Checking “hand tools” Check box',()=>{
       cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(2) > label:nth-child(1)").check(); 
       cy.intercept({method:"GET",
        url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBGW30PCSEAWBHV1HYWNK8R,01JKBGW30T1AS7PCCD3NN4KYQS,01JKBGW30T1AS7PCCD3NN4KYQT,01JKBGW30T1AS7PCCD3NN4KYQV,01JKBGW30T1AS7PCCD3NN4KYQW,01JKBGW30T1AS7PCCD3NN4KYQX,01JKBGW30T1AS7PCCD3NN4KYQY,01JKBGW30T1AS7PCCD3NN4KYQZ&page=0"

       }).as("getAllProdbyCategoryandpriceRange");
       cy.wait("@getAllProdbyCategoryandpriceRange")
       .then(interception =>{
        console.log(interception)
        cy.wrap(interception.response.statusCode).should('eq',200)

       });
       cy.intercept({method:"OPTIONS",
        url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBGW30PCSEAWBHV1HYWNK8R,01JKBGW30T1AS7PCCD3NN4KYQS,01JKBGW30T1AS7PCCD3NN4KYQT,01JKBGW30T1AS7PCCD3NN4KYQV,01JKBGW30T1AS7PCCD3NN4KYQW,01JKBGW30T1AS7PCCD3NN4KYQX,01JKBGW30T1AS7PCCD3NN4KYQY,01JKBGW30T1AS7PCCD3NN4KYQZ&page=0"

       }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
       cy.wait("@getAllProdbyCategoryandpriceRangeOptionsReq")
       .then(interception =>{
        console.log(interception)
        cy.wrap(interception.response.statusCode).should('eq',204)

       });

    })
    
    it('[009-0001-01]Checking “Hammer” subcategory only. With changing price range.',()=>{
        cy.get("span[aria-label='ngx-slider']").should('be.visible').and('not.be.disabled')
        .invoke('val','1')
        .trigger('input')
        .should('have.value','1');
        cy.get("span[aria-label='ngx-slider-max']").should('be.visible').and('not.be.disabled')
        .invoke('val','50')
        .trigger('input').should('have.value','50');

        cy.intercept({
            method:"GET",
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,50&by_category=01JKBYKG03VG9ERDM7RJXEVPG0&page=0',
            
        }).as('GetHammersWithRange1-50');
        cy.wait('@GetHammersWithRange1-50').then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',204)
    
           });
           cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/products?between=price,1,50&by_category=01JKBYKG03VG9ERDM7RJXEVPG0&page=0"
           }).as("Response")
           cy.wait("@Response").then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',200)
    
           });


    })
   
    it('[009-0001-02]Checking "Hand Saw" subcategory only.',()=>{
        cy.get('body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(2) > ul:nth-child(2) > fieldset:nth-child(1) > div:nth-child(3) > label:nth-child(1)').check(); 
        cy.intercept({
            method:"OPTIONS",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG1&page=0"
 
        }).as("getHandSawCategoryandpriceRangeOptionsReq");
        cy.wait("@getHandSawCategoryandpriceRangeOptionsReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG1&page=0"
 
        }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
        cy.wait("@getAllProdbyCategoryandpriceRange")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });

        cy.intercept({method:"GET",
            url:"https://practicesoftwaretesting.com/assets/img/products/saw01.avif"
    
           }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
           cy.wait("@getAllProdbyCategoryandpriceRange")
           .then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',200)
    
           });
     })
     	
     it('[009-0001-03] Checking ”Wrench” subcategory only.',()=>{
        cy.get('body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(2) > ul:nth-child(2) > fieldset:nth-child(1) > div:nth-child(4) > label:nth-child(1)')
        .check(); 
        cy.intercept({
            method:"OPTIONS",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG2&page=0"
 
        }).as("OptionsReq");
        cy.wait("@OptionsReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG2&page=0"
 
        }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
        cy.wait("@getAllProdbyCategoryandpriceRange")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });

        cy.intercept({method:"GET",
            url:"https://practicesoftwaretesting.com/assets/img/products/saw01.avif"
    
           }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
           cy.wait("@getAllProdbyCategoryandpriceRange")
           .then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',200)
    
           });
     })
     	
     it('[009-0001-03] Checking ”Wrench” subcategory only.',()=>{
        cy.get('body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(2) > ul:nth-child(2) > fieldset:nth-child(1) > div:nth-child(4) > label:nth-child(1)')
        .check(); 
        cy.intercept({
            method:"OPTIONS",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG2&page=0"
 
        }).as("OptionsReq");
        cy.wait("@OptionsReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG2&page=0"
 
        }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
        cy.wait("@getAllProdbyCategoryandpriceRange")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });

        cy.intercept({method:"GET",
            url:"https://practicesoftwaretesting.com/assets/img/products/saw01.avif"
    
           }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
           cy.wait("@getAllProdbyCategoryandpriceRange")
           .then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',200)
    
           });
     })
     it('[009-0001] Filter products by Checking “grinder” Check box',()=>{
        cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(3) > ul:nth-child(2) > fieldset:nth-child(1) > div:nth-child(2) > label:nth-child(1)").check(); 
        cy.intercept({method:"Options",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKC5F602K6BRPKNZE80QT5VR&page=0"
 
        }).as("grinderChoiceOptionsReq");
        cy.wait("@grinderChoiceOptionsReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKC5F602K6BRPKNZE80QT5VR&page=0"
 
        }).as("getGrinder");
        cy.wait("@getGrinder")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
    it('[009-0001] Filter products by Checking “grinder” Check box',()=>{
        cy.get("    body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(13) > div:nth-child(4) > ul:nth-child(2) > fieldset:nth-child(1) > div:nth-child(2) > label:nth-child(1)").check(); 
        cy.intercept({method:"Options",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKC5F602K6BRPKNZE80QT5VW&page=0"
 
        }).as("ToolbeltsOptionReq");
        cy.wait("@ToolbeltsOptionReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKC5F602K6BRPKNZE80QT5VW&page=0"
 
        }).as("getToolBelts");
        cy.wait("@getToolBelts")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
    it('By checking “ForgeFlex Tools” check box',()=>{
        cy.get("body > app-root:nth-child(2) > div:nth-child(2) > app-overview:nth-child(2) > div:nth-child(3) > div:nth-child(2) > fieldset:nth-child(16) > div:nth-child(2) > label:nth-child(1)").check(); 
        cy.intercept({method:"Options",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_brand=01JKC5F5Z7RBM4A8TVDYWCEZK9&page=0"
 
        }).as("BrandsOptionsReq");
        cy.wait("@BrandsOptionsReq")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',204)
 
        });
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_brand=01JKC5F5Z7RBM4A8TVDYWCEZK9&page=0"
 
        }).as("getProductsByBrand");
        cy.wait("@getProductsByBrand")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
})