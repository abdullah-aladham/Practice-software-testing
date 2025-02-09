const { faker } = require("@faker-js/faker");
const subjects=['customer-service','webmaster','return','payments','warranty','status-of-order'];

const rand_index=Math.floor(Math.random()*6);
describe('Contact Test Suite',()=>{
    before(()=>{
        cy.visit('/contact');
        cy.url().should('eq',"https://practicesoftwaretesting.com/contact")
    })
it.only('[004-0001] [Valid] Sending data in valid data format and valid text attachment.',()=>{
    cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.intercept({method:"POST",
    url:"https://api.practicesoftwaretesting.com/messages"
}).as("ContactFormSubmitPOSTReq");
   
    
        cy.get("div[role='alert']").should('be.visible').and('have.text',' Thanks for your message! We will contact you shortly. ');

        cy.wait("@ContactFormSubmitPOSTReq").then(interception =>{
            console.log(interception);
            cy.wrap(interception.response.statusCode).should('eq',200)
        });;

     
})
it('[004-0002] [Valid] Sending data without sending text attachment.',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.intercept({method:"POST",
        url:"https://api.practicesoftwaretesting.com/messages"
    }).as("SubmittingDataReq");
    
    // cy.intercept({method:"OPTIONS",
    //     url:"https://api.practicesoftwaretesting.com/messages"
    // }).as("SubmittingDataOPTIONSReq");
    cy.get("div[role='alert']").should('be.visible').and('have.text',' Thanks for your message! We will contact you shortly. ');

    // cy.wait("@SubmittingDataOPTIONSReq").then(interception =>{
    //     console.log(interception);
    //     cy.wrap(interception.response.statusCode).should('eq',204)
    // });;
    cy.wait("@SubmittingDataReq").then(interception =>{
        console.log(interception);
        cy.wrap(interception.response.statusCode).should('eq',200)
    });;


});
it('[004-0003] [Invalid] Sending data without filling first name.',()=>{
    cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    // cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email());
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#first_name_alert").should('be.visible').and('have.text','First name is required');
    // cy.intercept({
    //     method:"GET",
    //     url:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"
    // }).as("ErrorAlertReq");
    // cy.wait("@ErrorAlertReq").then(interception =>{
    //     console.log(interception);
    //     cy.wrap(interception.response.statusCode).should('eq',200)
    // });
});
it('[004-0004] [Invalid] Sending data without filling last name.',()=>{
    cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    // cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#last_name_alert").should('be.visible').and('have.text','Last name is required');
});

it('[004-0005] [Invalid] Sending data without filling Email Address.',()=>{
    cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    // cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account: https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email is required');
});
it('[004-0006] [Invalid] Sending data with filling invalid email format (e.g:test@test@test).',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')

    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test@test@test")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email format is invalid');
});
it('[004-0007] [Invalid] Sending data with filling invalid email format (e.g:test).',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email format is invalid');
});


it('[004-0008] [Invalid] Sending data with filling invalid email format (e.g:test).',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test.com")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email format is invalid');
});
it('[004-0009] [Invalid] Sending data with filling numerical value in email input (e.g:123).',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="email-error"]').should('be.visible').and('have.text','Email format is invalid');
});

it('[004-0009] [Invalid] Sending data with filling numerical value (e.g:123).',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    // cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#subject_alert").should('be.visible').and('have.text','Subject is required');
});

it('[004-0010] [invalid] Sending data with blank message input field.',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
     cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    // cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️ ,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="message-error"]').should('be.visible').and('have.text','Message is required');
});
it(' [004-0011] [invalid] Sending data with message that has length less than 50 characters.',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")

    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="message-error"]').should('be.visible').and('have.text','Message must be minimal 50 characters');

});
it('[004-0012] [invalid] Sending data with non .txt file extension and 0kb size',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️ ,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.docx")

    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#attachment_alert").should('be.visible').and('have.text','File should have a txt extension.');

});


it('[004-0013] [Invalid] Sending data with .txt file extension and bigger than 0kb size',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\invalid.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('#attachment_alert').should('be.visible').and('have.text','File should be empty.');

})
it('[004-0014] [invalid] Sending data with non .txt file extension and bigger than 0kb size',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\invalid.docx")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('#attachment_alert').should('be.visible').and('have.text','File should be empty.');//finally found a bug🤣 ,HehE Boi 🤣

})

it(' [004-0015] [invalid] Sending data with message that has length more than 250 characters.',()=>{
    cy.visit("/contact");
    cy.url().should('eq','https://practicesoftwaretesting.com/contact')
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName());
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName());
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email())
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️Test done by Abdullah Aladham ❤️");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt")

    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('.alert').should('be.visible').and('have.text','The message field must not be greater than 250 characters.');

});
})
