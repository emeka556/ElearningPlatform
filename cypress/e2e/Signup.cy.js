import Login_PO from "../support/Pages/Login"
import Signup_PO from "../support/Pages/Signup"

describe('signin Feature', () =>{
  const signin_PO = new Signup_PO
  beforeEach(function(){ 
cy.fixture('credentials').then((data)=>{
  globalThis.data = data

})
   }) 

it('special character in Surname, Firstname field TC_24', () =>{
  expect(data.registration.diffcharacterparent).to.exist
    signin_PO.Signup(data.registration.diffcharacterparent.surname, data.registration.diffcharacterparent.firstname
        ,data.registration.diffcharacterparent.email,data.registration.diffcharacterparent.phone,data.registration.diffcharacterparent.password
        ,data.registration.diffcharacterparent.confirmPassword)
        
     signin_PO.waitAfterAssertion()
  
    

})

it('wrong email formatP TC_25', () =>{
  expect(data.registration.wrongEmailP).to.exist
    signin_PO.Signup(data.registration.wrongEmailP.surname, data.registration.wrongEmailP.firstname
        ,data.registration.wrongEmailP.email,data.registration.wrongEmailP.phone,data.registration.wrongEmailP.password
        ,data.registration.wrongEmailP.confirmPassword)
        
        signin_PO.waitAfterAssertion()
  
    

    }) 

it('password less than 8 characters TC_28', () =>{
  expect(data.registration.lessPasswordP).to.exist
    signin_PO.Signup(data.registration.lessPasswordP.surname, data.registration.lessPasswordP.firstname
        ,data.registration.lessPasswordP.email,data.registration.lessPasswordP.phone,data.registration.lessPasswordP.password
        ,data.registration.lessPasswordP.confirmPassword)
        
        signin_PO.waitAfterAssertion()
  
    

    }) 
it('Miss match password TC_29', () =>{
  expect(data.registration.passwordMismatchParent).to.exist
    signin_PO.Signup(data.registration.passwordMismatchParent.surname, data.registration.passwordMismatchParent.firstname
        ,data.registration.passwordMismatchParent.email,data.registration.passwordMismatchParent.phone,data.registration.passwordMismatchParent.password
        ,data.registration.passwordMismatchParent.confirmPassword)
        
        signin_PO.waitAfterAssertion()
        signin_PO.passwordNotMatchAssertion()
  
    

    }) 

it('Miss match password Tutor TC_31', () =>{
  expect(data.registration.passwordMismatchTutor).to.exist
    signin_PO.Signup(data.registration.passwordMismatchTutor.surname, data.registration.passwordMismatchTutor.firstname
        ,data.registration.passwordMismatchTutor.email,data.registration.passwordMismatchTutor.phone,data.registration.passwordMismatchTutor.password
        ,data.registration.passwordMismatchTutor.confirmPassword)
        
        signin_PO.waitAfterAssertion()
        signin_PO.passwordNotMatchAssertion()
  
    

    }) 




})