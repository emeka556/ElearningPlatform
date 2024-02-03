import Login_PO from "../support/Pages/Login"
import Signup_PO from "../support/Pages/Signup"

describe('signin Feature', () =>{
  const signin_PO = new Signup_PO
  beforeEach(function(){ 
cy.fixture('credentials').then((data)=>{
  globalThis.data = data

})

})

it('wrong email formatP TC_25', () =>{
  expect(data.registration.wrongEmailP).to.exist
    signin_PO.Signup(data.registration.wrongEmailP.surname, data.registration.wrongEmailP.firstname
        ,data.registration.wrongEmailP.email,data.registration.wrongEmailP.phone,data.registration.wrongEmailP.password
        ,data.registration.wrongEmailP.confirmPassword)
        
       // signin_PO.invalidemailFormatAssertion()
  
    

    }) 





})