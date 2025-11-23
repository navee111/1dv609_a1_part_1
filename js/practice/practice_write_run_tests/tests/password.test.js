
// Select one of the Password versions to test

//import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
 //import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
//  import { Password } from '../src/BugToShortPassword'
 // import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
 //import { Password } from '../src/BugWrongMessage'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const pw1 = 'password12345'
    const password = new Password (pw1)

    test('replace this test with one of your own and add more', () => {
        const hashPassword = password.getPasswordHash()
        expect(hashPassword).not.toBe(pw1);
    });

    test('chek trime',() =>  {
    const whitespacePassword = '   password12345'
    const trimmedPassword = new Password(whitespacePassword)
    expect(trimmedPassword.isPasswordSame(password)).toBe(true)
    
})
  test('chek password the same', () => {
    const anotherPassword = new Password('password1234')
    expect(anotherPassword.isPasswordSame(password)).toBe(false)
  })
   
    test('chek if number required', () => {
      
     expect(() => new Password('mypasswordmvp')).toThrow('No number found')
    })
    test('check missing password',() => {
      
      expect(() => new Password('mvpmypassworda')).toThrow('No number found')
    })
    })
    test('check if conatine number',() => {
        expect(() => new Password('mypasswordmvp1').no.toThrow())
    })
    test('check too short password',() => {
      expect(() => new Password('mypassword1')).toThrow('Too short password')
    })
    test('check very short password',() => {
      expect(() => new Password('123q').toThrow('Too short password'))
    })
   test('check if generates different hashes for different password ',() =>{
    const pas1 = new Password('12345mvppassword')
    const pas2 = new Password('54321mvppassword')
    expect(pas1.getPasswordHash()).not.toBe(pas2.getPasswordHash())
   })
   test('ckeck wrong message',() => {
    expect(() => new Password('short1')).toThrow('Too short password')
   })

