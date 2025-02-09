describe('WebsiteStatus TestSuite',()=>{
  it.skip('Should not render website',()=>{
    cy.request({
        method:"GET",
        url:"/" 
    }).its('status').should('eq',404);

  })  

  it('Should  render website',()=>{
    cy.request({
        method:"GET",
        url:"/" 
    }).its('status').should('eq',200);

  })
})