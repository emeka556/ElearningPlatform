
import Login_PO from "../support/Pages/Login"

describe('Login Feature', () =>{
  const login_PO = new Login_PO
  beforeEach(function(){ 
cy.fixture('credentials').then((data)=>{
  globalThis.data = data

})

})

it('successful login', () =>{
  expect(data.login.validdatasetTutor).to.exist
    login_PO.Login(data.login.validdatasetTutor.username, data.login.validdatasetTutor.password)
    
    

    }) 
})