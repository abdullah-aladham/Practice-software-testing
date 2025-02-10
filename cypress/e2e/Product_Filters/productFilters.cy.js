describe('Product Filters TestSuite',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.url().should('eq','https://practicesoftwaretesting.com/')
    })
    it('[009-0001] Filter products by Checking “hand tools” Check box',()=>{
        cy.get('[data-test="category-01JKM03Q2AHCNHF2HTS6KGRCKV"]').should('be.visible').and('not.be.disabled').check(); 
       cy.intercept({method:"GET",
        url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKM03Q2AHCNHF2HTS6KGRCKV,01JKM03Q2SZJJCW268DBGFATSJ,01JKM03Q2SZJJCW268DBGFATSK,01JKM03Q2SZJJCW268DBGFATSM,01JKM03Q2SZJJCW268DBGFATSN,01JKM03Q2SZJJCW268DBGFATSP,01JKM03Q2SZJJCW268DBGFATSQ,01JKM03Q2SZJJCW268DBGFATSR&page=0"

       }).as("getAllProdbyCategoryandpriceRange");
       cy.wait("@getAllProdbyCategoryandpriceRange")
       .then(interception =>{
        console.log(interception)
        cy.wrap(interception.response.statusCode).should('eq',200)

       });
    //    cy.intercept({method:"OPTIONS",
    //     url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBGW30PCSEAWBHV1HYWNK8R,01JKBGW30T1AS7PCCD3NN4KYQS,01JKBGW30T1AS7PCCD3NN4KYQT,01JKBGW30T1AS7PCCD3NN4KYQV,01JKBGW30T1AS7PCCD3NN4KYQW,01JKBGW30T1AS7PCCD3NN4KYQX,01JKBGW30T1AS7PCCD3NN4KYQY,01JKBGW30T1AS7PCCD3NN4KYQZ&page=0"

    //    }).as("getAllProdbyCategoryandpriceRangeOptionsReq");
    //    cy.wait("@getAllProdbyCategoryandpriceRangeOptionsReq")
    //    .then(interception =>{
    //     console.log(interception)
    //     cy.wrap(interception.response.statusCode).should('eq',204)

    //    });

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
            url:'https://api.practicesoftwaretesting.com/products?between=price,1,50&by_category=01JKM03Q2SZJJCW268DBGFATSJ&page=0',
            
        }).as('getHammersWithRange1-50');
        cy.wait('@getHammersWithRange1-50').then(interception =>{
            console.log(interception)
            cy.wrap(interception.response.statusCode).should('eq',200)
    
           });
           


    })
   
    it('[009-0001-02]Checking "Hand Saw" subcategory only.',()=>{
        cy.get('[data-test="category-01JKM03Q2SZJJCW268DBGFATSK"]').should('be.visible').and('not.be.disabled').check(); 
       
        
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKM03Q2SZJJCW268DBGFATSK&page=0"
 
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
        cy.get('[data-test="category-01JKM3HAE5R0030YKAPMC75CDG"]').should('not.be.disabled').and('be.visible')
        .check(); 
        
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKM03Q2SZJJCW268DBGFATSM&page=0"
 
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
     	
     it('[009-0001-04] Checking “Screwdriver” subcategory only. .[Might be done later]',()=>{
        cy.get('[data-test="category-01JKM3HAE5R0030YKAPMC75CDH"]').should('be.visible').and('not.be.disabled')
        .check(); 
        
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKBYKG03VG9ERDM7RJXEVPG2&page=0"
 
        }).as("getAllProdbyCategoryandpriceRange");
        cy.wait("@getAllProdbyCategoryandpriceRange")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });

        
     })
     it('[009-0001] Filter products by Checking “grinder” Check box',()=>{
        cy.get('[data-test="category-01JKM3HAE5R0030YKAPMC75CDN"]').check(); 
        
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKM03Q2SZJJCW268DBGFATSS&page=0"
 
        }).as("getGrinderbetween1-100");
        cy.wait("@getGrinderbetween1-100")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
    it('Filter products by Checking "others" Check box',()=>{
        cy.get('[data-test="category-01JKM3HADWPKWPX18535FA2WAS"]').should('be.visible').and('not.be.disabled').check(); 
       
        cy.intercept({method:"GET",
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_category=01JKC5F602K6BRPKNZE80QT5VW&page=0"
 
        }).as("GetOther");
        cy.wait("@GetOther")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
    it('By checking “ForgeFlex Tools” check box',()=>{
        cy.get('[data-test="brand-01JKM3HAD919QEHRE7GZ4CQREN"]').should('be.visible').and('not.be.disabled').check(); 
       
        cy.intercept({
         url:"https://api.practicesoftwaretesting.com/products?between=price,1,100&by_brand=01JKM3HAD919QEHRE7GZ4CQREN&page=0"
         ,method:"GET"
        }).as("getProductsByBrand");
        cy.wait("@getProductsByBrand")
        .then(interception =>{
         console.log(interception)
         cy.wrap(interception.response.statusCode).should('eq',200)
 
        });
    })
})