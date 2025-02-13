
const subjects=['customer-service','webmaster','return','payments','warranty','status-of-order'];
const rand_index=Math.floor(Math.random()*6);
describe('Contact after sign in',()=>{

    beforeEach(()=>{
        cy.login('customer@practicesoftwaretesting.com','welcome01')
        cy.visit('/account')
        cy.url().should('eq','https://practicesoftwaretesting.com/account')
    })
    it('[004-001-0001] [Valid] Sending Contact data with valid data format with valid text attachment',()=>{
       cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.intercept("POST","https://api.practicesoftwaretesting.com/messages").as("SubmitReq")
            cy.wait("@SubmitReq")
         .then(interception =>{
                console.log(interception);
               cy.wrap(interception.response.statusCode).should('eq',200)
             });
            // cy.intercept({
            //     method:"POST",
            //     url:"https://api.practicesoftwaretesting.com/messages/01jkh6705ng7z9wsnjnr34b199/attach-file"}).as("FileAttachment");
            //     cy.wait("@FileAttachment").then(interception =>{
            //         console.log(interception);
            //         cy.wrap(interception.response.statusCode).should('eq',200)
            //     });


        cy.get('.alert').should('be.visible').and('have.text',' Thanks for your message! We will contact you shortly. ');
       
            // cy.intercept({
            //     method:"POST",
            //     url:"https://api.practicesoftwaretesting.com/messages/01jkh6705ng7z9wsnjnr34b199/attach-file"}).as("FileAttachment");
            //     cy.wait("@SubmitReq").then(interception =>{
            //         console.log(interception);
            //         cy.wrap(interception.response.statusCode).should('eq',200)
            //     });


    })
    it('[004-001-0002] [Valid] Sending Contact data with valid data format without attachment.',()=>{
        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("div[role='alert']").should('be.visible').and('have.text',' Thanks for your message! We will contact you shortly. ');
    //     cy.intercept("POST","https://api.practicesoftwaretesting.com/messages").as("SubmitReq")
    //     cy.wait("@SubmitReq")
    //  .then(interception =>{
    //         console.log(interception);
    //        cy.wrap(interception.response.statusCode).should('eq',200)
    //      });
    })
    it('[004-001-0003] [Invalid] Sending data without selecting subject.',()=>{

        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("div[role='alert']").should('be.visible').and('have.text',' Thanks for your message! We will contact you shortly. ');


    })
    it('[004-001-0004] [invalid] Sending data with blank message input field.',()=>{
        cy.visit("/contact");
        cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get('#message_alert').should('be.visible').and('have.text','Message is required')
            
    })
    it('[004-001-0005] [invalid] Sending data with less than 50 character length message input field.',()=>{
        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("#message_alert").should('be.visible').and('have.text','Message must be minimal 50 characters');


    })
    it('[004-001-0006] [invalid] Sending data with non .txt file extension and bigger than 0kb size',()=>{
        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest test test test test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\invalid.docx");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("#attachment_alert").should('be.visible').and('have.text','File should be empty.');


    })
    it('[004-001-0007] [inValid] Sending data with non .txt file extension and 0kb size',()=>{
        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest test test test tesst");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.docx");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("#attachment_alert").should('be.visible').and('have.text','File should have a txt extension.');


    })
    it('[004-001-0008] [Invalid] Sending data with .txt file extension and bigger than 0kb size',()=>{
        cy.visit("/contact");
       cy.url().should('eq','https://practicesoftwaretesting.com/contact')
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\\github\\cypress\\practice-software-testing\\cypress\\e2e\\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get('[data-test="message-error"]').should('be.visible').and('have.text','Message must be minimal 50 characters');
    })
})