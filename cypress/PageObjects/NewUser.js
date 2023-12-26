class NewAccount {

    SignIn()
    {
        cy.get ('.login').click(); 
    }
    setCreateEmail(createemail)
    {
    cy.get('#email_create').type(createemail);   
    }
   
    ClickCreate()
    {
        cy.get('#SubmitCreate > span').click ();   
    }
    
    Gender()
    {
        cy.get('#id_gender1').check();
    }
   
    setFirstname(firstname)
    {
        cy.get('#customer_firstname').type(firstname)   
    }

    setLastname(lastname)
    {
        cy.get('#customer_lastname').type(lastname)  
    }

    setUserPassword(password)
    {
        cy.get('#passwd').type(password)  
    }
    
    setUserDay(days) 
    {
        cy.get('#days').select(days)
    }

    setUserMonth(months)
    {
        cy.get('#months').select(months) 
    }

    setUserYears(years)
    {
        cy.get('#years').select(years)
    }

    SubmitBtn()
    {
        cy.get('#submitAccount > span').click(); 
    }

   VerifyAcctCreate()
   {
    cy.get('.page-heading').should('contain.text',' MY ACCOUNT')
   }
}
export default NewAccount