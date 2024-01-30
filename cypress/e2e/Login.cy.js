
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
    login_PO.waitAfterAssertion()
    
    

    }) 
it('successful Parent login TC_40', () =>{
  expect(data.login.validdatasetParent).to.exist
    login_PO.Login(data.login.validdatasetParent.username, data.login.validdatasetParent.password)
    login_PO.validAssertion()
    login_PO.waitAfterAssertion()
    

    })
it('incorrect username TC_41', () =>{
  expect(data.login.incorrectusername).to.exist
    login_PO.Login(data.login.incorrectusername.username, data.login.incorrectusername.password)
    login_PO.invalidUsernameAssertion()
    login_PO.waitAfterAssertion()
    

    })
it('incorrect password TC_42', () =>{
  expect(data.login.incorrectpassword).to.exist
    login_PO.Login(data.login.incorrectpassword.username, data.login.incorrectpassword.password)
    login_PO.invalidUsernameAssertion()
    login_PO.waitAfterAssertion()
    

    })
it('Empty username TC_43', () =>{
    expect(data.login.emptyEmail).to.exist
    login_PO.Login(data.login.emptyEmail.username, data.login.emptyEmail.password)
    login_PO.emptyusernameAssertion()    
    login_PO.waitAfterAssertion()

    })

it('Empty password TC_43', () =>{
    expect(data.login.emptyEmail).to.exist
    login_PO.Login(data.login.emptyPassword.username, data.login.emptyPassword.password)
    login_PO.emptypasswordAssertion()   

    })




})