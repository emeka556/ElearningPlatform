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

it('Wrong email format Tutor TC_32', () =>{
  expect(data.registration.wrongEmailT).to.exist
    signin_PO.Signup(data.registration.wrongEmailT.surname, data.registration.wrongEmailT.firstname
        ,data.registration.wrongEmailT.email,data.registration.wrongEmailT.phone,data.registration.wrongEmailT.password
        ,data.registration.wrongEmailT.confirmPassword)
        
        signin_PO.waitAfterAssertion()

    }) 

it('Less than 8 charater password Tutor TC_33', () =>{
  expect(data.registration.lessPasswordT).to.exist
    signin_PO.Signup(data.registration.lessPasswordT.surname, data.registration.lessPasswordT.firstname
        ,data.registration.lessPasswordT.email,data.registration.lessPasswordT.phone,data.registration.lessPasswordT.password
        ,data.registration.lessPasswordT.confirmPassword)
        
        signin_PO.waitAfterAssertion()

    }) 


it('Empty email field Tutor TC_34', () =>{
  //expect(data.registration.NoPhoneNumberT).to.exist
    signin_PO.Signup(data.registration.NoemailT.surname, data.registration.NoemailT.firstname
        ,data.registration.NoemailT.email,data.registration.NoemailT.phone,data.registration.NoemailT.password
        ,data.registration.NoemailT.confirmPassword)
        
        signin_PO.waitAfterAssertion()

    }) 
it('Empty phone number Tutor TC_35', () =>{
  //expect(data.registration.NoPhoneNumberT).to.exist
    signin_PO.Signup(data.registration.NoPhoneNumberT.surname, data.registration.NoPhoneNumberT.firstname
        ,data.registration.NoPhoneNumberT.email,data.registration.NoPhoneNumberT.phone,data.registration.NoPhoneNumberT.password
        ,data.registration.NoPhoneNumberT.confirmPassword)
        
        signin_PO.waitAfterAssertion()

    }) 

it('Regiser with existing email Tutor TC_38', () =>{
  expect(data.registration.Existingemail).to.exist
    signin_PO.Signup(data.registration.Existingemail.surname, data.registration.Existingemail.firstname
        ,data.registration.Existingemail.email,data.registration.Existingemail.phone,data.registration.Existingemail.password
        ,data.registration.Existingemail.confirmPassword)
        
        signin_PO.waitAfterAssertion()

    }) 



})