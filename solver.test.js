'use strict';

const { solve, NotImplementedError } = require('./solver');

describe('solve()', () => {
  
  describe('Type error checking', () => {
    test('throws TypeError when a is undefined', () => {
      expect(() => solve(undefined, 1, 1)).toThrow(TypeError);
    });

    test('throws TypeError when b is a string', () => {
      expect(() => solve(1, 'hello', 1)).toThrow(TypeError);
    });

    test('throws TypeError when c is an object', () => {
      expect(() => solve(1, 1, {})).toThrow(TypeError);
    });

    test('throws TypeError when a is not a finite number (Infinity)', () => {
      expect(() => solve(Infinity, 1, 1)).toThrow(TypeError);
    });

    test('throws TypeError when b is NaN', () => {
      expect(() => solve(1, NaN, 1)).toThrow(TypeError);
    });
  });

  describe('a === 0 cases', () => {
    test('throws Error when all coefficients are zero', () => {
      expect(() => solve(0, 0, 0)).toThrow('Degenerate input: all coefficients are zero');
    });

    test('throws Error when a and b are zero but c is not', () => {
      expect(() => solve(0, 0, 1)).toThrow('No solution: 0x² + 0x + c = 0 has no solution');
    });

    test('throws Error when a is zero but b is not (not quadratic)', () => {
      expect(() => solve(0, 1, 1)).toThrow('Coefficient `a` must be non-zero (not a quadratic equation)');
    });
  });

  describe('Roots count based on Discriminant', () => {
    test('throws NotImplementedError for complex roots (disc < 0)', () => {
      // a=1, b=0, c=1 => disc = 0^2 - 4(1)(1) = -4
      expect(() => solve(1, 0, 1)).toThrow(NotImplementedError);
    });

    test('returns 1 for one real root (disc === 0)', () => {
      // a=1, b=2, c=1 => disc = 2^2 - 4(1)(1) = 0
      expect(solve(1, 2, 1)).toBe(1);
    });

    test('returns 2 for two distinct real roots (disc > 0)', () => {
      // a=1, b=3, c=2 => disc = 3^2 - 4(1)(2) = 1
      expect(solve(1, 3, 2)).toBe(2);
    });
  });

});