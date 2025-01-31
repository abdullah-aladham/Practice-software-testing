describe('Sign-in[SI] TestSuite',()=>{
    it('[003-SI-0001] [Valid]Sign in with Valid user data[Email: customer@practicesoftwaretesting.com,PW: welcome01]',()=>{
        cy.login('customer@practicesoftwaretesting.com','welcome01');
    })
    it('[003-SI-0002] [Invalid]Sign in with invalid Email[Email customer423@practicesoftwaretesting.com,PW: welcome01]',()=>{
       cy.session('invalid login session',()=>{
        cy.visit('auth/login');
        cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer423@practicesoftwaretesting.com');
        cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome01');
        cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
        
        
    })
    it('•	[003-SI-0003] [Invalid]Sign in with invalid password[Email: customer@practicesoftwaretesting.com,PW: welcome0jnewgr]',()=>{
        cy.session('invalid login session',()=>{
         cy.visit('auth/login');
         cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
         cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
         cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
         
         
     })
     
     it('[003-SI-0004] [Invalid]Sign in with null values]',()=>{
        cy.session('invalid login session',()=>{
         cy.visit('auth/login');
        //  cy.get('input[id="email"]').should('be.visible').and('be.null').type('customer@practicesoftwaretesting.com');
        //  cy.get('input[id="password"]').should('be.visible').and('be.null').type('welcome0jnewgr');
         cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();})
         
         
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