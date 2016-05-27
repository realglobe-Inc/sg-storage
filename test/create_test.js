/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const assert = require('assert')
const co = require('co')

describe('create', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Create', () => co(function * () {
    let storage = create(`${__dirname}/../tmp/created-storage`)
    assert.ok(storage)
  }))
})

/* global describe, before, after, it */
