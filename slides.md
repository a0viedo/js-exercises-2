## Objects


### Object.keys
This utility method will get you the list of keys inside the obj:

```js
const obj = { prop1: 100, prop2: 200 }
console.log(Object.keys(obj)) // [ 'prop1', 'prop2' ]
```

------------

### Object extension
There are different ways of adding properties to an object, the dot notation being the most common one. The bracket notation is often used when the key takes a dynamic value:

```js
const example = {}
example.prop1 = 500
const key = 'differentProp'
example[key] = 10
console.log(example) // { prop1: 500, differentProp, 10 }
```

------------

### Object modification

#### Delete a list of keys from an object
```js
const obj = { mon: 1, tue: 2, wed: 3, thur: 4, fri: 5 }
const keysToDelete = ['mon', 'fri']
for(const key of Object.keys(obj)) {
  if(keysToDelete.includes(key)) {
    delete obj[key]
  }
}
console.log(obj) // { tue: 2, wed: 3, thur: 4 }
```