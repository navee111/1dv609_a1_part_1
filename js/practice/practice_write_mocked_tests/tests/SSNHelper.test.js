    import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";
//  import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat";
//  import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn' 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';


describe('SSNHelpe Tests', () => {
      const corecctFormat = '890201-3286'
      const wrongFormat = '123455-67789'
      //const CorrectLengthSSN = '890201-3286'
      const helper = new SSNHelper()
    test('replace this test with one of your own', () => {
        expect(true).toBe(true);
    });
  

 //test('all days 1-31 should be valid', () => {
    //const helper = new SSNHelper()
    //for (let day = 1; day <= 31; day++) {
   // const isValid = helper.isValidDay(day)
   // expect(isValid).toBeTruthy()
   // }
 //})
 test('all day should 1-31 should be valid',() => {
    
    expect(helper.isValidDay('31')).toBe(true)
 })
 test('should only return 1-12 months',() => {
    
    const isValid = helper.isValidMonth(0)
    expect(isValid).toBe(false)
 })
  test('should return always true', () => {
    const isValid = helper.isCorrectFormat(wrongFormat)
    expect(isValid).toBe(false)
  })
  test('should return true for 11 character string', () => {
    const ValidSSN = '890201-3286'
    const result = helper.luhnisCorrect(ValidSSN)
    expect(result).toBe(true)
  })
  test('should return for a valid luhn number (11)', () => {
   const isValidSSN = helper.isCorrectLength(wrongFormat)
   expect(isValidSSN).toBe(false)

  })
});