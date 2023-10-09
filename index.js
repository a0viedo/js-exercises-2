// exercise 1
// this function should receive an object and a array of keys and should return a new
// object with only the key and values that are present in keyArray
// example: pick({ x: 'first prop', y: 'second prop', z: 5}, ['y', 'z']) -> { y: 'second prop', z: 5 }
const pick = (obj, keyArray) => {
  // add your code here
}

// exercise 2
// this function should receive two objects, objA and objB and should return
// a NEW object that contains all the keys and values present in both objects
// if there would be the case that both objects have a same key, the result should have the key value from objB
// example: merge({ a : 1 }, { b: 2, c: 3 }) -> { a: 1, b: 2, c: 3 }
const merge = (objA, objB) => {
  // add your code here
}

module.exports = {
  pick,
  merge,
}