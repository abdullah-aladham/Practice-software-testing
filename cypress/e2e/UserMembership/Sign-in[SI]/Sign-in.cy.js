describe('Sign-in[SI] TestSuite',()=>{
    beforeEach(()=>{ 
        cy.visit("auth/login")
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/login')
    })
    it('[003-SI-0001] [Valid]Sign in with Valid user data',()=>{
        cy.login('test123@test.com','TH!sIsAP@ssword184');

    })
    it('[003-SI-0002] [Invalid]Sign in with invalid Email',()=>{
            cy.get('input[id="email"]').should('be.visible').and('not.be.disabled').type("test12@test.com");
            cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type("TH!sIsAP@ssword184");
            cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
            // cy.visit('/auth/account')
            cy.get('[data-test="login-error"]').should('be.visible').and('have.text','Invalid email or password')
       
        
     })
    it('[003-SI-0003] [Invalid]Sign in with invalid password',()=>{
        cy.get('input[id="email"]').should('be.visible').and('not.be.disabled').type("test123@test.com");
            cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type("THsIsAP@ssword184");
            cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
            // cy.visit('/auth/account')
            cy.get('[data-test="login-error"]').should('be.visible').and('have.text','Invalid email or password')
       
        //  cy.intercept({method:"POST",
        //     url:"https://api.practicesoftwaretesting.com/users/login"
        //  }).as("InvalidPassLoginReq")
        //  cy.wait("@InvalidPassLoginReq").then(interception =>{
        //     cy.wrap(interception.request.statusCode).should('eq',401)
        //  })
         
     })
     
     it('[003-SI-0004] [Invalid]Sign in with null values]',()=>{
        cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
        // cy.visit('/auth/account')
        cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email is required')
        cy.get('[data-test="password-error"]').should('be.visible').and('have.text','Password is required')
   
     })

// it('[003-SI-0005][Valid] Sign in with Google Authentication Button with valid credentials',()=>{
       
         
//      })
      
    //  it('[003-SI-0006][Invalid] Sign in with Google authentication Button using invalid credentials',()=>{
    //     cy.session('invalid login session',()=>{
    //      cy.visit('auth/login');
    //     //  cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
    //     //  cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
    //      cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
         
         
    //  })
     it('[003-SI-0007][Valid] Sign in With show password button is clicked.',()=>{
         cy.visit('auth/login');
         cy.get('input[id="email"]').should('be.visible').type('test13@test.com');
         cy.get("button[class='btn btn-outline-secondary']").should('be.visible').and('not.be.disabled').click()
         cy.get('input[id="password"]').should('be.visible').type('TH!sIsAP@ssword184');
         cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
         cy.url().should('eq','https://practicesoftwaretesting.com/account');

    
         
         
     })
})