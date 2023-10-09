const t = require('tap')
const {
  pick,
  merge,
} = require('./index')

t.test('[pick] should not throw an error if string is empty', t => {
  t.doesNotThrow(() => {
    pick({}, [])
  })
  t.end()
})

t.test('[pick] should work as expected', t => {
  t.same(pick({ a: 1, b: 2, c: 3 }, ['b']), { b: 2 })
  t.same(pick({ test: 'something', wow: 'such great property' }, []), {})
  t.end()
})

t.test('[countVowels] should not throw an error if string is empty', t => {
  t.doesNotThrow(() => {
    merge({}, {})
  })
  t.end()
})

t.test('[countVowels] should work as expected 1', t => {
  t.same(merge({ w: 1 }, { b: 5 }), { w: 1, b: 5 })
  t.same(merge({ a: 1 }, { a: 'hola' }), { a: 'hola' })
  const objA = { q: 'test' }
  const objB = { hey: 1 }
  t.equal(merge(objA, objB) !== objA && merge(objA, objB) !== objB, true)
  t.end()
})
