import NewAccount from "../PageObjects/NewUser";
describe ('Create ccount for new user', () => {
    it.only ('New user should be able to create new account', ()=>{
        cy.visit('http://www.automationpractice.pl');
        
        const ln=new NewAccount();
        ln.SignIn();
        ln.setCreateEmail("kings@gmail.com");
        ln.ClickCreate();
        ln.Gender();
        ln.setFirstname("King");
        ln.setLastname("Uhons");
        ln.setUserPassword("CathPP2");
        ln.setUserDay("11");
        ln.setUserMonth("November");
        ln.setUserYears("2003");
        ln.SubmitBtn();
        ln.VerifyAcctCreate();



    })

})