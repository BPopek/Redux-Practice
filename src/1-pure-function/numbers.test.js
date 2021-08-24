import { sum } from './numbers';

/*
Task:
- Fix the failed unit test
*/
describe('numbers - sum', () => {
  it('Should return the sum of two numbers', () => {
    const num1 = 1;
    const num2 = 1;
    const result = sum(num1, num2);
    const expectedResult = 3;

    expect(result).toEqual(expectedResult);
  });
});
