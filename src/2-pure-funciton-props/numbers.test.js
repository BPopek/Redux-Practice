import { sum } from './numbers';

/*
Task:
- Throw error for undefined props
*/
describe('numbers - sum', () => {
  it('Should throw an error for undefined props', () => {
    expect(sum).toThrow('num1 prop undefined');
  });

  it('Should throw an error for prop num2 being undefined', () => {
    const num1 = 1;
    expect(() => sum(num1)).toThrow('num2 prop undefined');
  });
});
