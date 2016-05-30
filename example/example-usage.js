'use strict'

const sgStorage = require('sg-storage')
const co = require('co')

let storage = sgStorage('var/lib/simple-storage')

co(function * () {
  yield storage.setItem('foo', { bar: 'baz' })

  let item = yield storage.getItem('foo')
  console.log(item)
})
