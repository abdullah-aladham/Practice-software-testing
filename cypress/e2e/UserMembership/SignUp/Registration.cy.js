import { faker } from "@faker-js/faker";
describe('Registration TestSuite',()=>{
    beforeEach(()=>{
        cy.visit('/auth/login')
        cy.url().should('eq','https://practicesoftwaretesting.com/auth/login');

    })
    it('[003-0005][Valid] Register User with valid data for all fields.',()=>{
        
        cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
        // cy.url().should('eq','auth/register');
        cy.get('input[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
        cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
        cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1998-01-16');
        cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
        cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
        cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
        cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
        cy.get('select[id="country"]').select("US");
        cy.get('input[data-test="phone"]').should('be.visible').type(1234567889);
        cy.get('input[id="email"]').should('be.visible').type(faker.internet.email());
        cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
        cy.intercept({method:"POST",url:"https://api.practicesoftwaretesting.com/users/register"}).as("AccountCreated")
        cy.wait("@AccountCreated").then(interception =>{
            cy.wrap(interception.response.statusCode).should('eq',201)
        })
})
it('[003-0006][Invalid] Register User with blank first name and last name',()=>{
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1995-10-02');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type("123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get('[data-test="register-submit"]').should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='first-name-error']").should('have.text',' First name is required ');
    // cy.get("div[data-test='first-name-error']").invoke('attr','color').should('eq','#f8d7da');
    cy.get("div[data-test='last-name-error']").should('have.text','last name is required');
    // cy.get("div[data-test='last-name-error']").invoke('attr','color').should('eq','#f8d7da')

})//we have a bug
it.only('[003-0007][Invalid] Register User with invalid year(e.g:12/24/275760)',()=>{
    cy.visit('/auth/login')
     cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('2757-12-24');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type("123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('wrgqefsdvDswrgwe4gt#!')
    cy.get('[data-test="register-submit"]').should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="register-error"]').should('have.text','Customer must be 18 years old.');
    // cy.get(".alert.alert-danger.mt-3").invoke('attr','color').should('eq','#f8d7da');
//    cy.intercept({method:"POST",
//     url:"https://api.practicesoftwaretesting.com/users/register"}).as("FailedReq")
//     cy.wait("@FailedReq").then(interception =>{
//         cy.wrap(interception.response.statusCode).should("eq",422)
//     })

})
it('[003-0008][Invalid] Register User with Post Code That has null value',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1996-10-16');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[data-test="phone"]').should('be.visible').type("123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get('[data-test="register-submit"]').should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='postcode-error']").should('have.text',' Postcode is required ');
   
})
it('[003-0009][Invalid] Register User with city equals to NULL',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').should('be.visible').and('not.be.disabled').type(faker.person.firstName())
    cy.get('[data-test="last-name"]').should('be.visible').and('not.be.disabled').type(faker.person.lastName())
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1990-05-30');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');

    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type("123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get('[data-test="register-submit"]').should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='city-error']").should('have.text',' City is required ');
   
})
it('[003-0010][Invalid] Register User without choosing a country',()=>{
    cy.visit('/auth/register')
    // cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('[data-test="last-name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[data-test="dob"]').should('be.visible').and('not.be.disabled').type('1987-01-05');
    cy.get('input[data-test="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[data-test="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[data-test="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[data-test="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('input[data-test="phone"]').should('be.visible') .type('123456789');
    cy.get('input[data-test="email"]').should('be.visible').type(faker.internet.email());
    cy.get('input[data-test="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()

    cy.get("div[data-test='country-error']").should('be.visible').and('have.text',' Country is required ')
    cy.intercept({method:"POST",
        url:"https://api.practicesoftwaretesting.com/users/me"
    }).as("FailRegReq");
    cy.wait('@FailRegReq').then(interception =>{
        cy.wrap(interception.response.statusCode).should('eq',401)
    })
})
it('[003-0011][Invalid] Register User with  blank phone number',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('2000-08-25');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="phone-error"]').should('be.visible').and('have.text',' Phone is required. ')
})
it('[003-0012][Invalid] Register User with  string data ',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1968-06-08');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('jb');

    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="phone-error"]').should('be.visible').and('have.text',' Only numbers are allowed. ')
    
})
it('[003-0012][Invalid] Register User with special characters like + or - in phone',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1992-02-02');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('+1234');

    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="phone-error"]').should('be.visible').and('have.text',' Only numbers are allowed. ')
})
it('[003-0015][Invalid] Register User with blank email address.',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('2001-04-12');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('[data-test="phone"]').should('be.visible').type("1234567789");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('wgewrgqewgqwWewefwdef42553134!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='email-error']").should('have.text'," Email is required ").and('be.visible');

})
it.only('[003-0016][Invalid] Register User with invalid email format',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1988-07-02');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('23445536235');
    cy.get('input[id="email"]').should('be.visible').type("test");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    // cy.url().should('eq','auth/login');
})//another one
it.only('[003-0017][Invalid] Register User with invalid email format.',()=>{
    cy.visit('https://practicesoftwaretesting.com/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1976-09-15');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('5225424');
    cy.get('input[id="email"]').should('be.visible').type("test1@test");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
   
})//another one 
it('[003-0018][Invalid] Register User with invalid email format (e.g “test”,e.g2 “test@test”,eg.3 “test@test,com”).',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('[data-test="last-name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('2000-02-20');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').should('be.visible').and('not.be.disabled').select("US");
    cy.get('[data-test="phone"]').should('be.visible').type(faker.phone.number());
    cy.get('input[id="email"]').should('be.visible').type("test@test,com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Invalid Email format')
})//fail here because of bug in the system
it('[003-0019][Invalid] Register User with invalid email format (e.g “test”,e.g2 “test@test”,eg.3 “test@test,com”).',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('[data-test="first-name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('[data-test="last-name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('[data-test="dob"]').should('be.visible').and('not.be.disabled').type('2005-11-16');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('3096983598689');
    cy.get('input[id="email"]').should('be.visible').type("test@test,com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
   cy.get("div[data-test='email-error']").should('be.visible').and('have.text','invalid email format');
})//same bug
it.only('[003-0020][invalid] Register User with invalid password length (password length less than 8)',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1996-07-19');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('09340963509');
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp!');
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="password-error"]').should('be.visible').and('have.text',' Password must be minimal 6 characters long. ')
})//another one
	
it('[003-0018] Register User with password that does not Contain both uppercase and lowercase letters[UPPERCASE LETTERS ONLY]',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1963-12-03');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('02453405254');
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('OJGWEOGKWEGPKQFWE!Q342');
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='password-error']").should('be.visible').and('have.text',' Password can not include invalid characters. ')
})


it('[003-0019] Register User with password that does not Contain both uppercase and lowercase letters[lowercase only]',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1986-03-10');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type("43563245434646");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('kjgkjwjkegjkqlemglkwegokloegwmmlwerglmwrb!3');
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='password-error']").should('be.visible').and('have.text',' Password can not include invalid characters. ')
})
	
it('[003-0020] Register User with password that does not Contain numbers',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1980-08-13');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('25335634623245245');
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('kmqpegkpqemgqkmpegmqegkmqeg;kmqegG!');
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="password-error"]').should('be.visible').and('have.text',' Password can not include invalid characters. ')
})
it('[003-0021] Register User with password that does not have any special symbols',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1958-05-17');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type('394698346983');
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Kkwergkiwerg2412');
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='password-error']").should('be.visible').and('have.text',' Password can not include invalid characters. ')
})
it('[003-0022] Register User with blank password',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/auth/register');
    cy.get('input[id="first_name"]').and('not.be.disabled').type(faker.person.firstName());
    cy.get('input[id="last_name"]').and('not.be.disabled').type(faker.person.lastName());
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('1977-07-07');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress());
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode());
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city());
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state());
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').type("234534635613");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='password-error']").should('be.visible').and('have.text',' Password is required  Password must be minimal 6 characters long.  Password can not include invalid characters. ')
})

})