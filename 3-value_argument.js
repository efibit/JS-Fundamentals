// File: 3-value_argument.js

const firstArg = process.argv[2];

console.log(firstArg !== undefined ? firstArg : 'No argument');