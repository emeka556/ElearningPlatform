class Signup_PO{
    Signup(surname,firstname,email,phone,password,confirmPassword){

        cy.visit("https://tutordotconnect.com/tutorconnect/home/register");
        cy.get('#lastname').type(surname)
        cy.get('#firstname').type(firstname)
        
        if (email) {
            cy.get('#emailaddress').type(email)
        } else {
            cy.get('#emailaddress').clear()
        }

       // Click the dropdown to open the options
        cy.get('.selected-flag').click();

        // #country-listbox is the ID for the dropdown list, get from the list that contains Brazil and click
        cy.get('#country-listbox').contains('United Kingdom').click();
      
        if (phone) {
            cy.get('#mobile').type(phone)
        } else {
            cy.get('#mobile').clear()
        }
        cy.get('#passwordreg').type(password)
        cy.get('#cnpassword').type(confirmPassword)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()

    }

    invalidemailFormatAssertion() {
       
        cy.contains("Please match the format requested.").should("be.visible", { timeout: 10000 })
    }
    waitAfterAssertion() {
        cy.wait(3000) // wait 5 seconds until the next block of code
    }
    
    passwordNotMatchAssertion() {
       
    cy.get('#anymsge').should("be.visible")
    cy.contains("The Password and Confirm Password Do not match").should("be.visible")
}
        

    

}

export default Signup_PO;