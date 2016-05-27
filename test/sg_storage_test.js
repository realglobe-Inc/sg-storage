/**
 * Test case for sgStorage.
 * Runs with mocha.
 */
'use strict'

const SgStorage = require('../lib/sg_storage.js')
const assert = require('assert')
const co = require('co')

describe('sg-storage', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg storage', () => co(function * () {
    let storage = new SgStorage(`${__dirname}/../tmp`)
    yield storage.set('item01', { foo: 'bar' })
    let data = yield storage.get('item01')
    assert.deepEqual(data, { foo: 'bar' })
  }))
})

/* global describe, before, after, it */
