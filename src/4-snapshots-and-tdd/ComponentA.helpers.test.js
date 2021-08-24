import { filterOutTypeSith } from './ComponentA.helpers';

/*
Task:
- Fix the failed unit test 
*/
describe('ComponentA helpers', () => {
  it('filterOutTypeSith', () => {
    const list = [
      {
        name: 'Darth Vader',
        type: 'sith',
      },
      {
        name: 'Luke Skywalker',
        type: 'jedi',
      },
    ];
    const result = list.filter(filterOutTypeSith);
    const expectedResult = [
    ];

    expect(result).toEqual(expectedResult);
  });
});