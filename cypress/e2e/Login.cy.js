
import Login_PO from "../support/Pages/Login"

describe('Login Feature', () =>{
  const login_PO = new Login_PO
  beforeEach(function(){ 
cy.fixture('credentials').then((data)=>{
  globalThis.data = data

})

})

it('successful Tutor login TC_39', () =>{
  expect(data.login.validdatasetTutor).to.exist
    login_PO.Login(data.login.validdatasetTutor.username, data.login.validdatasetTutor.password)
    login_PO.validAssertion()
    cy.wait(5000)
    
    

    }) 
it('successful Parent login TC_40', () =>{
  expect(data.login.validdatasetParent).to.exist
    login_PO.Login(data.login.validdatasetParent.username, data.login.validdatasetParent.password)
    login_PO.validAssertion()
    

    }) 
})