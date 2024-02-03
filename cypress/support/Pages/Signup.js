class Signup_PO{
    Signup(surname,firstname,email,phone,password,confirmPassword){

        cy.visit("https://tutordotconnect.com/tutorconnect/home/register");
        cy.get('#lastname').type(surname)
        cy.get('#firstname').type(firstname)
        cy.get('#emailaddress').type(email)
        cy.get('#country-listbox').click({ force: true }) // Click on the dropdown to open it

        cy.get('#iti-item-gb').click({ force: true }); // Click on the option for United Kingdom
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