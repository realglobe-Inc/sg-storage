/**
 * Test case for sgStorage.
 * Runs with mocha.
 */
'use strict'

const sgStorage = require('../lib/sg_storage.js')
const assert = require('assert')
const co = require('co')

describe('sg-storage', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg storage', () => co(function * () {
    let storage = sgStorage(`${__dirname}/../tmp/testing-storage-01`)
    yield storage.hset('myItem01', { foo: 'bar' })
    let data01 = yield storage.hgetall('myItem01')
    assert.deepEqual(data01, { foo: 'bar' })

  }))
})

/* global describe, before, after, it */
