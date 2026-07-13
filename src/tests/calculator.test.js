const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });
  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });
  test('adds two negative numbers', () => {
    expect(addition(-4, -6)).toBe(-10);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });
  test('subtracts a larger number from a smaller one', () => {
    expect(subtraction(3, 7)).toBe(-4);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });
  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });
  test('multiplies two negative numbers', () => {
    expect(multiplication(-2, -3)).toBe(6);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });
  test('division by zero returns NaN', () => {
    expect(division(5, 0)).toBeNaN();
  });
  test('divides negative numbers', () => {
    expect(division(-12, 3)).toBe(-4);
  });
});

describe('modulo', () => {
  test('returns the remainder of two numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });
  test('modulo of an even division is zero', () => {
    expect(modulo(9, 3)).toBe(0);
  });
  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });
  test('modulo by zero returns NaN', () => {
    expect(modulo(5, 0)).toBeNaN();
  });
});

describe('power', () => {
  test('raises a number to a positive exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });
  test('any number to the power of zero is 1', () => {
    expect(power(5, 0)).toBe(1);
  });
  test('negative base with even exponent is positive', () => {
    expect(power(-3, 2)).toBe(9);
  });
});

describe('squareRoot (square root)', () => {
  test('square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });
  test('square root of zero is zero', () => {
    expect(squareRoot(0)).toBe(0);
  });
  test('square root of a negative number returns NaN', () => {
    expect(squareRoot(-4)).toBeNaN();
  });
});
