const { faker } = require("@faker-js/faker");

const subjects=['customer-service','webmaster','return','payments','warranty','status-of-order'];
const rand_index=Math.floor(Math.random()*6);
describe('Contact after sign in',()=>{

    beforeEach(()=>{
        cy.login()
        cy.visit('/account')
        cy.url().should('eq','https://practicesoftwaretesting.com/account')
    })
    it('[004-001-0001] [Valid] Sending Contact data with valid data format with valid text attachment',()=>{
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("div[role='alert']").should('be.visible').and('have.text','Thanks for your message! We will contact you shortly.');


    })
    it('[004-001-0002] [Valid] Sending Contact data with valid data format without valid text attachment.',()=>{
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("div[role='alert']").should('be.visible').and('have.text','Thanks for your message! We will contact you shortly.');
        

    })
    it('[004-001-0003] [Invalid] Sending data without selecting subject.',()=>{
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#message").should('be.visible').and('not.be.disabled').type("Test Test Test TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest TestTest Test");
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get("div[role='alert']").should('be.visible').and('have.text','Thanks for your message! We will contact you shortly.');


    })
    it('[004-001-0004] [invalid] Sending data with blank message input field.',()=>{
        cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
        cy.get("#subject").select(subjects[rand_index]);
        cy.get("#attachment").should('be.visible').and('not.be.disabled').selectFile("E:\github\cypress\practice-software-testing\cypress\e2e\test.txt");
        cy.get("input[value='Send']").should('be.visible').and('not.be.disabled').click();
        cy.get('#message_alert').should('be.visible').and('have.text','Message is required')

    })

})