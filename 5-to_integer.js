// File: 5-to_integer.js

const arg = process.argv[2];
const num = parseInt(arg);

console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);