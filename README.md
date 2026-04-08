# Quadratic Equation Solver

A Node.js module that solves `ax² + bx + c = 0` and returns the count of distinct real roots.

## Setup

```bash
npm install
```

## Coverage Report

```bash
# print coverage summary in the terminal
npx jest --coverage
```

Jest will print a table like this:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
solver.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

- **Stmts** — every executable statement was reached
- **Branch** — every `if`/`else` path was taken at least once
- **Funcs** — every function was called
- **Lines** — every line was executed

If any column is below 100%, the `Uncovered Line #s` column tells you exactly which lines to target with new tests.

### HTML Report

```bash
npx jest --coverage --coverageReporters=html --runInBand
```

This writes a full interactive report to `coverage/lcov-report/index.html`. Open it in a browser