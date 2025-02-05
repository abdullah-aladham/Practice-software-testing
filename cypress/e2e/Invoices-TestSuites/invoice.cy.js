describe('Invoices TestSuite',()=>{
    it("[007-0001] [Valid] Visiting Invoices page after sign in.",()=>{
        cy.login()
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
    	
    it('[007-0002] [Invalid] Visit invoices page without sign in',()=>{
        cy.visit("account/invoices/");
    })

})