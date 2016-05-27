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
    storage.setItem('item01', 'value01')
    let data = storage.getItem('item01')
    assert.ok(data, 'value01')
  }))
})

/* global describe, before, after, it */
