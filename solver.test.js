'use strict';

const { solve, NotImplementedError } = require('./solver');

// TODO1 : write test with 100% coverage 

// Example Test case : Type error checking
test('throws TypeError when a is undefined', () => {
  expect(() => solve(undefined, 1, 1)).toThrow(TypeError);
});