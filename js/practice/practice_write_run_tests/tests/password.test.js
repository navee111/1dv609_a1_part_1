
// Select one of the Password versions to test

//import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
 //import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const pw1 = 'password12345'
    const password = new Password (pw1)

    test('replace this test with one of your own and add more', () => {
        const hashPashhword = password.getPasswordHash()
        expect(hashPashhword).not.toBe(pw1);
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
})


