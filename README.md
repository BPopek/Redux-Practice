# Unit Tests Crash Course

![Clumsy infomercial gif](https://i.pinimg.com/originals/f8/cc/8f/f8cc8fefcd977a03aabd0a374fb9969f.gif)

Lots of clumsy mistakes in this code, let's fix them up!

--- 

## Instructions:
1. Switch to Node 10+
`nvm use`
2. Install
`npm i`
3. Jest Tests
`npm run test`
4. Press `p` to filter by a filename regex pattern
5. Begin typing the component name: `src/1`
6. Arrow down to the section "Pattern matches 1 file", hit enter on the desired file

--- 

## Exercises:

### 1-pure-function:
- Fix the failed unit test 

### 2-pure-funciton-props:
- Throw error for undefined props

### 3-component-render-test:
- Fix the failed unit test

### 4-snapshots-and-tdd
- Filter out siths from characters array
- Use a testable pure function to filter
- Fix the failed unit test 

### 5-sinon-simulate-click:
- Fix the failed unit tests

### 6-full-line-coverage:
1. Stop running tests
`ctrl + c`
2. Re-run tests with coverage
`npm run test:coverage`
- Add the tests for full line coverage

--- 

## Package Links:

## Jest
https://www.npmjs.com/package/jest
Delightful JavaScript Testing

## Jest - Expect
https://jestjs.io/docs/expect
When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.

### Enzyme:
https://www.npmjs.com/package/enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

### Enzyme - Shallow Rendering API
https://github.com/enzymejs/enzyme/blob/HEAD/docs/api/shallow.md
Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

## Enzyme - enzyme-to-json
https://www.npmjs.com/package/enzyme-to-json
Convert Enzyme wrappers to a format compatible with Jest snapshot testing.

### Sinon:
https://www.npmjs.com/package/sinon
Standalone and test framework agnostic JavaScript test spies, stubs and mocks

--- 

## Notes:

###  Awesome Jest Tip: Coverage Report
https://dev.to/stevescruz/awesome-jest-tip-coverage-report-h5j

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------

- **Stmts**: instructions that have been executed at least once during the unit tests. For example, we can have a line that contains two statements: `var age= 18; console.log(age)` this contains a variable declaration statement and a statement that executes the log function that belongs to the console object.
- **Branch**: if statements which conditions have been fulfilled at least once during the unit tests.
- **Funcs**: functions that have been called at least once during the unit tests.
- **Lines**: code lines that have executed at least once during the unit tests.

