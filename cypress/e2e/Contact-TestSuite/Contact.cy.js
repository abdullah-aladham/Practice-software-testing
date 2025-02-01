const { faker } = require("@faker-js/faker");
const subjects=['customer-service','webmaster','return','payments','warranty','status-of-order'];
const rand_index=Math.floor(Math.random()*6);
describe('Contact Test Suite',()=>{
    before(()=>{
        cy.visit('/contact');
        cy.url().should('eq',"https://practicesoftwaretesting.com/contact")
    })
it('[004-0001] [Valid] Sending data in valid data format and valid text attachment.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
})
it('[004-0002] [Valid] Sending data without sending text attachment.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();

});
it('[004-0003] [Invalid] Sending data without filling first name.',()=>{
    // cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt");
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#first_name_alert").should('be.visible').and('have.text','First name is required');
});
it('[004-0004] [Invalid] Sending data without filling last name.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    // cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#last_name_alert").should('be.visible').and('have.text','Last name is required');
});

it('[004-0005] [Invalid] Sending data without filling Email Address.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    // cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account: https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#email_name_alert").should('be.visible').and('have.text','Email is required');
});
it('[004-0006] [Invalid] Sending data with filling invalid email format (e.g:test@test@test).',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test@test@test")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#email_name_alert").should('be.visible').and('have.text','Email format is invalid');
});
it('[004-0007] [Invalid] Sending data with filling invalid email format (e.g:test).',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#email_name_alert").should('be.visible').and('have.text','Email format is invalid');
});


it('[004-0008] [Invalid] Sending data with filling invalid email format (e.g:test).',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
     cy.get("#email").should('be.visible').and('not.be.disabled').type("test.com")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#email_name_alert").should('be.visible').and('have.text','Email format is invalid');
});
it('[004-0009] [Invalid] Sending data with filling numerical value (e.g:123).',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️, my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#email_name_alert").should('be.visible').and('have.text','Email format is invalid');
});

it('[004-0009] [Invalid] Sending data with filling numerical value (e.g:123).',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    // cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#subject_alert").should('be.visible').and('have.text','Subject is required');
});

it('[004-0011] [invalid] Sending data with blank message input field.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    // cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️ ,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#message_alert").should('be.visible').and('have.text','Message is required');
});
it(' [004-0012] [invalid] Sending data with message that has length less than 50 characters.',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    // cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt")

    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#message_alert").should('be.visible').and('have.text','Message is required');

});
it('[004-0013] [invalid] Sending data with non .txt file extension and 0kb size',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type("123")
    // cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.docx")

    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get("#attachment_alert").should('be.visible').and('have.text','File should have a txt extension.');

});


it('[004-0014] [Invalid] Sending data with .txt file extension and bigger than 0kb size',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\invalid.text")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('#attachment_alert').should('be.visible').and('have.text','File should be empty.');

})
it('[004-0014] [invalid] Sending data with non .txt file extension and bigger than 0kb size',()=>{
    cy.get("#first_name").should('be.visible').and('not.be.disabled').type(faker.person.firstName);
    cy.get("#last_name").should('be.visible').and('not.be.disabled').type(faker.person.lastName);
    cy.get("#email").should('be.visible').and('not.be.disabled').type(faker.internet.email)
    cy.get('#subject').should('be.visible').and('not.be.disabled').select(subjects[rand_index])
    cy.get('#message').should('be.visible').and('not.be.disabled').type("Test done by Abdullah Aladham ❤️,my account :https://www.linkedin.com/in/abdullah-aladham/");
    cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\invalid.docx")
    cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
    cy.get('#attachment_alert').should('be.visible').and('have.text','File should be empty.');//finally found a bug🤣

})


	
})
