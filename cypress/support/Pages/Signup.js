class Signup_PO{
    Signup(surname,firstname,email,phone,password,confirmPassword){

        cy.visit("https://tutordotconnect.com/tutorconnect/home/register");
        cy.get('#lastname').type(surname)
        cy.get('#firstname').type(firstname)
        cy.get('#emailaddress').type(email)
       // Click the dropdown to open the options
        cy.get('.selected-flag').click();

        // #country-listbox is the ID for the dropdown list, get from the list that contains Brazil and click
        cy.get('#country-listbox').contains('United Kingdom').click();
      
        cy.get('#mobile').type(phone)
        cy.get('#passwordreg').type(password)
        cy.get('#cnpassword').type(confirmPassword)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()

    }

    invalidemailFormatAssertion() {
       
        cy.contains("Please match the format requested.").should("be.visible", { timeout: 10000 })
    }
        

    









}

export default Signup_PO;