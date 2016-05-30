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
    let storage = new SgStorage(`${__dirname}/../tmp/testing-storage-01`)
    yield storage.set('myItem01', { foo: 'bar' })
    let data01 = yield storage.get('myItem01')
    assert.deepEqual(data01, { foo: 'bar' })

    let dataAll = yield storage.all()
    assert.deepEqual(dataAll, { myItem01: { foo: 'bar' } })

    yield storage.del('myItem01')
    let data02 = yield storage.get('myItem01')
    assert.equal(data02, undefined)
  }))

  it('Create sub storage', () => co(function * () {
    let storage = new SgStorage(`${__dirname}/../tmp/testing-storage-02`)
    let subStorage = storage.sub('sub01')
    yield subStorage.set('foo', { bar: 'baz' })
    let foo = yield subStorage.get('foo')
    assert.deepEqual(foo, { bar: 'baz' })
  }))
})

/* global describe, before, after, it */
