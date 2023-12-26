class update {
    SignIn ()
    {
        cy.get ('.login').click();    
    }

    setEmail (email)
    {
        cy.get('#email').type(email);   
    }

    setPassword (password)
    {
        cy.get('#passwd').type(password)  
    }

    SubmitLogin()
    {
        cy.get('#SubmitLogin > span').click();
    }

    ClickAddress()
    {
        cy.get('.myaccount-link-list > :nth-child(1) > a > span').click();
    }
    
    setAddress1(address)
    {
        cy.get('#address1').type(address);
    }

    
    setCity(city)
    {
        cy.get('#city').type(city);
    }

    
    setState(state)
    {
        cy.get('#id_state').select(state);
    }
    
    setPostCode(postcode)
    {
        cy.get('#postcode').type(postcode);
    }

    setPhone(phone)
    {
        cy.get('#phone').type(phone)
    }

    setPhoneMobile(phonemobile)
    {
        cy.get('#phone_mobile').type(phonemobile);
    }

    setAlias(alias)
    {
        cy.get('#alias').clear().type(alias);
    }

    SubmitAddress()
    {
        cy.get('#submitAddress > span').click();
    }

    VerifyAddressSubmit()
    {
        cy.get('.page-heading').should('have.text', 'My addresses')
    }
// These lines of codes Update address
    ClickUpdateBtn()
    {
        cy.xpath("//span[.='Update']").click();
    }

    setUpdatePostCode(updatecode)
    {
        cy.get('#postcode').clear().type(updatecode);
    }

    setUpdatePhone(updatephone)
    {
        cy.get('#phone').clear().type(updatephone);
    }

    setUpdatePhoneMobile(updatephonemobile)
    {
        cy.get('#phone_mobile').clear().type(updatephonemobile);   
    }

    ClickUpdateAdressBtn()
    {
        cy.get('#submitAddress > span').click();
    }
    


    VerifyUpdateAddress()
    {
        cy.get('.page-heading').should('have.text', 'My addresses')
    }

}
export default update