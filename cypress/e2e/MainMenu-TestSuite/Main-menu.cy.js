describe('Main-Menu Test-Suite', () => {
  it('[01-0001][Valid] Click on Brand logo',()=>{
    cy.visit('/');
    cy.get('a[class="navbar-brand"]').should('be.visible');
    cy.url().should('eq','https://practicesoftwaretesting.com/');

  })
  it('[01-0002][Valid] Click on Home list item',()=>{
    cy.visit('/');
    cy.get('a[class="nav-link active"]').should('be.visible').and('not.be.disabled');
    cy.url().should('eq','https://practicesoftwaretesting.com/');

  })
  it('[01-0003]Click on Categories drop down list item',()=>{
    cy.visit('/');
    cy.get('li[class="nav-item dropdown"]').should('be.visible').and('not.be.disabled')
    cy.get("ul[aria-label='nav-categories']").should('be.visible')
  })
  it('[01-0003-01] [Valid] Select “Hand tools” option',()=>{
    cy.visit('/');
    cy.get('a[role="button"]').should('be.visible').and('not.be.disabled').click();
    cy.get('[data-test="nav-categories"]').should('be.visible').and('not.be.disabled').click()
    cy.get('[data-test="nav-hand-tools"]').should('be.visible').click()
  cy.url().should('eq','https://practicesoftwaretesting.com/category/hand-tools')
  })
it('[01-0004] [Valid] Click on “Contact” List Item',()=>{
  cy.visit('/');
cy.get(".nav-link[data-test='nav-contact']").should('be.visible').and('not.be.disabled').click();
cy.url().should('eq','https://practicesoftwaretesting.com/contact');

})

})