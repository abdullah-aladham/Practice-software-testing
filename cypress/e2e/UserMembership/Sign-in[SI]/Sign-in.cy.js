describe('Sign-in[SI] TestSuite',()=>{
    beforeEach(()=>{ 
        cy.visit("auth/login")
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/login')
    })
    it('[003-SI-0001] [Valid]Sign in with Valid user data',()=>{
        cy.login('customer@practicesoftwaretesting.com','welcome01');
    })
    it('[003-SI-0002] [Invalid]Sign in with invalid Email',()=>{
         cy.login("customer423@practicesoftwaretesting.com",'welcome01')
        // cy.session('invalid login session',()=>{
        //  cy.visit('auth/login');
        //  cy.get('input[id="email"]').should('be.visible').type('customer423@practicesoftwaretesting.com');
        //  cy.get('input[id="password"]').should('be.visible').type('welcome01');
        //  cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
        // cy.session('login Session',()=>{cy.visit('auth/login');
        //     cy.get('input[id="email"]').should('be.visible').and('not.be.disabled').type('customer423@practicesoftwaretesting.com');
        //     cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('welcome01');
        //     cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
        //     // cy.url().should('eq','https://practicesoftwaretesting.com/account');
        //   })
        
     })
    it('[003-SI-0003] [Invalid]Sign in with invalid password',()=>{
        cy.login('customer@practicesoftwaretesting.com','welcome0jnewgr')
        cy.get('[data-test="login-error"]').should('be.visible').and('have.text','Invalid email or password')
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/login')
        // cy.session('invalid login session',()=>{
        //  cy.visit('auth/login');
        //  cy.get('input[id="email"]').should('be.visible').type('customer@practicesoftwaretesting.com');
        //  cy.get('input[id="password"]').should('be.visible').type('welcome0jnewgr');
        //  cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();})
         cy.intercept({method:"POST",
            url:"https://api.practicesoftwaretesting.com/users/me"
         }).as("invalidLoginReq")
         cy.wait("@invalidLoginReq").then(interception =>{
            cy.wrap(interception.request.statusCode).should('eq',401)
         })
         
     })
     
     it('[003-SI-0004] [Invalid]Sign in with null values]',()=>{
        cy.login("","")
        // cy.session('invalid login session',()=>{
        //  cy.visit('auth/login');
        // //  cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
        // //  cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
        // cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();})
         
         
     })

it('[003-SI-0005][Valid] Sign in with Google Authentication Button with valid credentials',()=>{
        cy.session('invalid login session',()=>{
         cy.visit('auth/login');
        //  cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
        //  cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
         cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
         
         
     })
      
     it('[003-SI-0006][Invalid] Sign in with Google authentication Button using invalid credentials',()=>{
        cy.session('invalid login session',()=>{
         cy.visit('auth/login');
        //  cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
        //  cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
         cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
         
         
     })
     it('[003-SI-0007][Valid] Sign in With show password button is clicked.',()=>{
        cy.session('invalid login session',()=>{
         cy.visit('auth/login');
         cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer423@practicesoftwaretesting.com');
         cy.get("button[class='btn btn-outline-secondary']").should('be.visible').and('not.be.disabled').click()
         cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome01');
         cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();
         cy.url().should('eq','/account');

        })
         
         
     })
})