class Login_PO {
    Login(username, password) {
        cy.visit("https://tutordotconnect.com/tutorconnect/home/login");
        // Type or clear the username based on its presence
    if (username) {
        cy.get('#emailaddress').type(username)
    } else {
        cy.get('#emailaddress').clear()
    }

    // Type or clear the password based on its presence
    if (password) {
        cy.get('#password').type(password)
    } else {
        cy.get('#password').clear()
    }

    cy.get('[type="checkbox"]').check({ force: true })
    cy.get('#btn_signin').click();
    
    }
    validAssertion() {
        cy.url().should("eq", "https://tutordotconnect.com/tutorconnect/home/profile")
       

    }

    waitAfterAssertion() {
        cy.wait(4000) // wait 5 seconds until the next block of code
    }

    invalidUsernameAssertion() {
       
        cy.get('#dng_msg_t').should("be.visible")
        cy.contains("Your login credentials are invalid. Please try again.").should("be.visible")
    }
    emptyusernameAssertion() {
       
        cy.get('#dng_msg_t').should("be.visible")
        cy.contains("Emaill cannot be empty! Please check your entry and try again").should("be.visible")
    }

    emptypasswordAssertion() {
       
        cy.get('#dng_msg_t').should("be.visible")
        cy.contains("Password cannot be empty! Please check your entry and try again").should("be.visible")
    }

}


export default Login_PO;