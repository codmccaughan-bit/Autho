/**
 * Calculator module providing basic and extended arithmetic operations.
 */

/**
 * addition - Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  return a + b;
}

/**
 * subtraction - Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * multiplication - Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * division - Divides a by b. Returns NaN if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
  if (b === 0) return NaN;
  return a / b;
}

/**
 * modulo - Returns the remainder of a divided by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (b === 0) return NaN;
  return a % b;
}

/**
 * power - Raises base to the given exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * squareRoot - Returns the square root of n. Returns NaN for negative input.
 * @param {number} n
 * @returns {number}
 */
function squareRoot(n) {
  if (n < 0) return NaN;
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
