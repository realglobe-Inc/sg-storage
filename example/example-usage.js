'use strict'

const sgStorage = require('sg-storage')
const co = require('co')

// With file system (Handy, but slow)
co(function * () {
  let storage = sgStorage('var/lib/simple-storage')

  // Set hash
  yield storage.hset('foo', 'bar', 'baz')

  // Get hash all
  let item = yield storage.hgetall('foo')
  console.log(item) // -> {bar: 'baz'}
}).catch((err) => console.error(err))

// Using redis server
co(function * () {
  // See https://github.com/NodeRedis/node_redis#readme for redis options
  let storage = sgStorage.redis({
    host: '127.0.0.1',
    port: '6379',
    db: 1
  })
  // Set hash
  yield storage.hset('foo', 'bar', 'baz')

  // Get hash all
  let item = yield storage.hgetall('foo')
  console.log(item) // -> {bar: 'baz'}
}).catch((err) => console.error(err))
