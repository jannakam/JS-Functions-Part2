/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(9));
console.log(isOdd(12));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

console.log(oddsSmallerThan(8));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 !== 0) {
    return n * n;
  } else {
    return n * 2;
  }
}

console.log(squareOrDouble(11));
console.log(squareOrDouble(18));
