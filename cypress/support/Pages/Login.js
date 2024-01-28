class Login_PO {
    Login(username, password) {
        cy.visit("https://tutordotconnect.com/tutorconnect/home/login");
        cy.get('#emailaddress').type(username)
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check({ force: true })
        cy.get('#btn_signin').click()
        
    
    }
}

export default Login_PO;