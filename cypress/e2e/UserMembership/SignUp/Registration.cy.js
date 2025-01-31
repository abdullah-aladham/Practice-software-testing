import { faker } from "@faker-js/faker";
describe('Registration TestSuite',()=>{
    it('[003-0005][Valid] Register User with valid data for all fields.',()=>{
        cy.visit('/auth/login')
        cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
        cy.url().should('eq','auth/register');
        cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
        cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
        cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
        cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
        cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
        cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
        cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
        cy.get('select[id="country"]').select("US");
        cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
        cy.get('input[id="email"]').should('be.visible').type("test@test.com");
        cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
        cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
        cy.url().should('eq','auth/login');
})
it('[003-0006][Invalid] Register User with blank first name and last name',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('09/14/1998');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type("+123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get("div[data-test='first-name-error']").should('have.text','First name is required');
    cy.get("div[data-test='first-name-error']").invoke('attr','color').should('eq','#f8d7da');
    cy.get("div[data-test='last-name-error']").should('have.text','last name is required');
    cy.get("div[data-test='last-name-error']").invoke('attr','color').should('eq','#f8d7da')

})
it('[003-0007][Invalid] Register User with invalid year(e.g:12/24/275760)',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('12/24/275760');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type("+123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get(".alert.alert-danger.mt-3").should('have.text','Date of Birth is required');
    cy.get(".alert.alert-danger.mt-3").invoke('attr','color').should('eq','#f8d7da');
   

})
it('[003-0008][Invalid] Register User with Post Code That has null value',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('12/24/275760');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type('Buffalo');
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type("+123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get("div[data-test='postcode-error']").should('have.text','Postcode is required');
    cy.get("div[data-test='postcode-error']").invoke('attr','color').should('eq','#f8d7da');
   
})
it('[003-0009][Invalid] Register User with city equals to NULL',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type('12/24/275760');
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type('St.01');
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type('1000');

    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type('NewYork');
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type("+123456789");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('Test123!')
    cy.get("div[data-test='city-error']").should('have.text','City is required');
    cy.get("div[data-test='city-error']").invoke('attr','color').should('eq','#f8d7da');
   
})
it('[003-0010][Invalid] Register User without choosing a country',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='country-error']").should('be.visible').and('have.value','Country is required')
})
it('[003-0011][Invalid] Register User with  blank phone number',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='country-error']").should('be.visible').and('have.text','Phone is required.')
})
it('[003-0012][Invalid] Register User with  string data ',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type('jb');

    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='country-error']").should('be.visible').and('have.text','Only numbers are allowed.')
})
it('[003-0012][Invalid] Register User with special characters like + or -',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type('+');

    cy.get('input[id="email"]').should('be.visible').type("test@test.com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='country-error']").should('be.visible').and('have.text','Only numbers are allowed.')
})
it('[003-0015][Invalid] Register User with blank email address.',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.get("div[data-test='email-error']").should('have.text',"Email is required").and('be.visible');

})
it('[003-0016][Invalid] Register User with invalid email format (e.g “test”,e.g2 “test@test”,eg.3 “test@test,com”).',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
    cy.get('input[id="email"]').should('be.visible').type("test");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.url().should('eq','auth/login');
})
it('[003-0016][Invalid] Register User with invalid email format (e.g “test”,e.g2 “test@test”,eg.3 “test@test,com”).',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
    cy.get('input[id="email"]').should('be.visible').type("test@test");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.url().should('eq','auth/login');
})
it('[003-0016][Invalid] Register User with invalid email format (e.g “test”,e.g2 “test@test”,eg.3 “test@test,com”).',()=>{
    cy.visit('/auth/login')
    cy.get("a[aria-label='Register your account']").should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','auth/register');
    cy.get('input[id="first_name"]').should('be.null').and('not.be.disabled').type(faker.person.firstName);
    cy.get('input[id="last_name"]').should('be.null').and('not.be.disabled').type(faker.person.lastName);
    cy.get('input[id="dob"]').should('be.visible').and('not.be.disabled').type(faker.date);
    cy.get('input[id="address"]').should('be.visible').and('not.be.disabled').type(faker.location.streetAddress);
    cy.get('input[id="postcode"]').should('be.visible').and('not.be.disabled').type(faker.location.zipCode);
    cy.get('input[id="city"]').should('be.visible').and('not.be.disabled').type(faker.location.city);
    cy.get('input[id="state"]').should('be.visible').and('not.be.disabled').type(faker.location.state);
    cy.get('select[id="country"]').select("US");
    cy.get('input[id="phone"]').should('be.visible').should('be.null').type(faker.phone.number);
    cy.get('input[id="email"]').should('be.visible').type("test@test,com");
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type('H3lp1111!')
    cy.get("button[type='submit']").should('be.visible').and('not.be.disabled').click()
    cy.url().should('eq','auth/login');
})
})