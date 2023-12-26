describe ('Create ccount for new user', () => {
    it ('New user should be able to create new account', ()=>{
        cy.visit('http://www.automationpractice.pl');
        cy.get ('.login').click();
        cy.get('#email_create').type('kingsleyuhons@gmail.com');
        cy.get('#SubmitCreate > span').click ();
        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type('Kingsley')
        cy.get('#customer_lastname').type('Uhons')
        cy.get('#passwd').type('CathP7')
        cy.get('#days').select('11')
        cy.get('#months').select('October')
        cy.get('#years').select('1987')
        cy.get('#submitAccount > span').click();
        cy.get('.alert').should('have.text',' Your account has been created.')



    })
})