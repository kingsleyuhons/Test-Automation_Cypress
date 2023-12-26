describe ('Login Functionality', () => {
    it('Existing User should be able to log in with correct credentials', ()=>{
        cy.visit ('http://www.automationpractice.pl/index.php');
        cy.get ('.login').click();
        cy.get('#email').type('kingsleyuhons@gmail.com')
        cy.get('#passwd').type('CathP7')
        cy.get('#SubmitLogin > span').click();
        cy.get('.account > span').should('have.text', 'Kingsley Uhons')
    })

    it('User with invalid email address should not be able to log in', ()=>{
        cy.visit ('http://www.automationpractice.pl/index.php');
        cy.get ('.login').click();
        cy.get('#email').type('kings@gmail.com')
        cy.get('#passwd').type('CathP7')
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('have.text', 'Authentication failed.')  
    })

    it ('User with invalid password should not be able to login', ()=>{
        cy.visit ('http://www.automationpractice.pl/index.php');
        cy.get ('.login').click();
        cy.get('#email').type('kingsleyuhons@gmail.com')
        cy.get('#passwd').type('CathP')
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('have.text', 'Authentication failed.')  
    })

    it ('User with invalid email and password should not be able to login', ()=>{
        cy.visit ('http://www.automationpractice.pl/index.php');
        cy.get ('.login').click();
        cy.get('#email').type('kingsley@gmail.com')
        cy.get('#passwd').type('CathP')
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('have.text', 'Authentication failed.')  

    })

})