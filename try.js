const { pick, merge } = require('./index')

const fn = pick

console.log(fn({ b: 55, c: 1 }, ['b']))