import update from "../PageObjects/AccountUpdate";

describe ('Account Update Functionality', () => {
    it('Existing User should be able to add address', ()=>{
        cy.visit ('http://www.automationpractice.pl/index.php');
        const ln=new update();
        ln.SignIn();
        ln.setEmail("kingsleyuhons@gmail.com")
        ln.setPassword("CathP7")
        ln.SubmitLogin();
        ln.ClickAddress();
        ln.setAddress1("15 Ilushi/Ubiaja Road, Uromi")
        ln.setCity ("Uromi");
        ln.setState ("Arizona");
        ln.setPostCode ("00000")
        ln.setPhone ("+455345672");
        ln.setPhoneMobile("+4599300030")
        ln.setAlias ("My Address")
        ln.SubmitAddress();
        ln.VerifyAddressSubmit();
       
        // Update address
       ln.ClickUpdateAdressBtn();
       ln.setUpdatePostCode ("64754");
       ln.setUpdatePhone("+768846477");
       ln.setUpdatePhoneMobile ("+655454545")
       ln.ClickUpdateAdressBtn();
       ln.VerifyUpdateAddress();
        
        // Delete address

        cy.xpath("//span[.='Delete']").click();
        cy.on('window:alert', (text) =>{
        expect(text).to.equal('Are you sure?');
        return true;
        });
        cy.get('.alert').should('contain.text','No addresses are available.')

    })
})