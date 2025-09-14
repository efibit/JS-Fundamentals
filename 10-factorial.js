// File: 10-factorial.js

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const input = parseInt(process.argv[2]);

console.log(isNaN(input) ? 1 : factorial(input));