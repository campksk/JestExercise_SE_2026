// solver.js — quadratic equation solver
// Solves ax² + bx + c = 0

'use strict';

const ARG_NAMES = ['a','b','c']

class NotImplementedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotImplementedError';
  }
}

module.exports.NotImplementedError = NotImplementedError;

function getDiscriminant(a, b, c) {
  return b * b - 4 * a * c;
}

function solve(a, b, c) {

  const args = [a, b, c];
  for (let i = 0; i < 3; i++) {
    const v = args[i];
    if (typeof v !== 'number') {
      throw new TypeError(`Argument \`${ARG_NAMES[i]}\` must be a finite number`);
    } else if (!isFinite(v)) {
      throw new TypeError(`Argument \`${ARG_NAMES[i]}\` must be a finite number`);
    }
  }

  if (a === 0) {
    if (b === 0 && c === 0) {
      throw new Error('Degenerate input: all coefficients are zero');
    }
    if (b === 0 && c !== 0) {
      throw new Error('No solution: 0x² + 0x + c = 0 has no solution');
    }
    throw new Error('Coefficient `a` must be non-zero (not a quadratic equation)');
  }

  const disc = getDiscriminant(a, b, c);
  if (disc < 0) {
    throw new NotImplementedError('Complex roots are not supported (discriminant < 0)');
  }
  if (disc === 0) {
    return 1;
  }
  return 2;
}

module.exports.solve = solve;