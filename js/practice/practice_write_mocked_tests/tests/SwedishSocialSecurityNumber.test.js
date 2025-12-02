 import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'; 
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
import { describe, expect, jest, test} from '@jest/globals'
 //import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
 //import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
 //import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';
//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    let mockHelper 
    const corecctFormat = '890201-3286'
    const wrongFormat = '123455-67789 '
    const correctFormatWhiteSpace = ' 890201-3286 '


    beforeEach(() => { 
        mockHelper = {
            
            isCorrectLength: jest.fn(),
            isCorrectFormat: jest.fn(),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn()
           
        }
    })
   test('swedish social securty number check', () => {
    mockHelper.isCorrectLength.mockReturnValue(false)
    expect(() => new SwedishSocialSecurityNumber(corecctFormat,mockHelper)).toThrow('To short, must be 11 characters')

   })

test('should trime white space',() => {

    //mockHelper.isCorrectFormat.mockReturnValue(false)
    const result =  new SwedishSocialSecurityNumber(correctFormatWhiteSpace, mockHelper)
   expect (result.getSerialNumber()).toBe('3286')
})
test('should not throw error when luhn fails', () => {
    mockHelper.luhnisCorrect.mockReturnValue(false)
    expect(() => {
        new SwedishSocialSecurityNumber(corecctFormat, mockHelper)
    }).toThrow("Invalid SSN according to Luhn's algorithm")
})
 test('should get the correct year when ssn valid',() => {
  const result = new SwedishSocialSecurityNumber(corecctFormat, mockHelper)
  expect(result.getYear()).toBe('89')
 })
 test("check if format is incorrect", () => {
    mockHelper.isCorrectFormat.mockReturnValue(false)
    expect(()=> new SwedishSocialSecurityNumber(corecctFormat, mockHelper)).toThrow("Incorrect format, must be: YYMMDD-XXXX")
 })
  test("should throw error when month is invalid", () => {
    mockHelper.isValidMonth.mockReturnValue(false)
    expect(() => new SwedishSocialSecurityNumber(corecctFormat, mockHelper)).toThrow('Invalid month in SSN')

  })
  test("should throw error when day is invalid",() => {
    mockHelper.isValidDay.mockReturnValue(false)
    expect(() => new SwedishSocialSecurityNumber(correctFormatWhiteSpace, mockHelper)).toThrow("Invalid month in SSN")
  })
    
});