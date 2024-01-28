class Login_PO {
    Login(username, password) {
        cy.visit("https://tutordotconnect.com/tutorconnect/home/login");
        cy.get('#emailaddress').type(username)
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()
        
    
    }
    BlankusernameLogin(username, password) {
        cy.visit("https://tutordotconnect.com/tutorconnect/home/login");
        cy.get('#emailaddress').clear(username)
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()
        
    
    }

    BlankpasswordLogin(username, password) {
        cy.visit("https://tutordotconnect.com/tutorconnect/home/login");
        cy.get('#emailaddress').type(username)
        cy.get('#password').clear(password)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()
        
    
    }
    validAssertion() {
        cy.url().should("eq", "https://tutordotconnect.com/tutorconnect/home/profile")
       

    }

    waitAfterAssertion() {
        cy.wait(5000) // wait 5 seconds until the next block of code
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