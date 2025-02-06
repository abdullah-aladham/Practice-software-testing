describe('Invoices TestSuite',()=>{
    function nav_Single_page(){
        cy.get('body app-root app-invoices li:nth-child(3) > .page-link').then($button=>{
          if($button.prop("disabled",true)){
            
           
            cy.end() 
      
          }
          else{
            cy.get('body app-root app-invoices li:nth-child(3) > .page-link').should('not.be.disabled').and('be.visible').click()
            
          }
        })
      }
    it("[007-0001] [Valid] Visiting Invoices page after sign in.",()=>{
        cy.login("")
        cy.get(".dropdown-item[data-test='nav-my-invoices']").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/users/me",
        }).as("LoginRequest");
        cy.wait('@LoginRequest').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
            
        });
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/invoices?page=1"
        }).as('InvoicesListP1')
        cy.wait('@InvoicesListP1').then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
            
        });
    })
    it('[007-0001-i] [Valid] Showing invoice details',()=>{
        cy.login();
        cy.get(".dropdown-item[data-test='nav-my-invoices']").should('be.visible').and('not.be.disabled').click();
        cy.get("tbody tr:nth-child(1) td:nth-child(5) a:nth-child(1)").should('be.visible').and('not.be.disabled').click();
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/users/refresh"
        }).as("RefreshOptionsReq");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/users/refresh"
        }).as("RefreshReq");
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/users/me"
        }).as("me");
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/invoices/01JK9K2GZBTXE6GXXX5854Z4W6"
        }).as("InvoicesOptionsReq");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/invoices/01JK9K2GZBTXE6GXXX5854Z4W6"
        }).as("InvoicesReq");
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/invoices/INV-20240000038/download-pdf-status"
        }).as("DownloadPdfstatusOptionsReq");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/invoices/INV-20240000038/download-pdf-status"
        }).as("DownloadPdfstatus");

        
    })
    
    it('[007-00010-ii] [Valid] Navigating through pages using pagination system',()=>{
        cy.login();
        cy.get(".dropdown-item[data-test='nav-my-invoices']").should('be.visible').and('not.be.disabled').click();
        cy.get("tbody tr:nth-child(1) td:nth-child(5) a:nth-child(1)").should('be.visible').and('not.be.disabled').click();
       nav_pages();
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/invoices?page=2"
        }).as("PageTwo");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/users/refresh"
        }).as("RefreshReq");
        
       
    })
    	
    it('[007-0002] [Invalid] Visit invoices page without sign in',()=>{
        cy.visit("account/invoices/");
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/users/me"
        }).as("loginFailReq")
        cy.wait("@loginFailReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',401)
        })
        cy.intercept({
            method:"OPTIONS",
            url:"https://api.practicesoftwaretesting.com/users/refresh"
        }).as("RefreshOptionsReq")
        cy.wait("@RefreshOptionsReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',204)
        })
        cy.intercept({
            method:"GET",
            url:"https://api.practicesoftwaretesting.com/users/refresh"
        }).as("RefreshOptionsReq")
        cy.wait("@RefreshOptionsReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',500)
        })
        cy.intercept({
            method:"GET",
            url:"https://practicesoftwaretesting.com/src_app_auth_auth_module_ts.63a6bb230c8cb86d.js"
        }).as("Auth_ModuleGETReq")
        cy.wait("@RefreshOptionsReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
        })
    })

})