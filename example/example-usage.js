'use strict'

const sgStorage = require('sg-storage')

let storage = sgStorage('var/lib/simple-storage')

storage.setItem('foo', 'bar')

let item = storage.getItem('foo')
console.log(item)
