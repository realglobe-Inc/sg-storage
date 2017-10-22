/**
 * Test case for sgStorage.
 * Runs with mocha.
 */
'use strict'

const sgStorage = require('../lib/sg_storage.js')
const assert = require('assert')

describe('sg-storage', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Sg storage', async () => {
    let storage = sgStorage(`${__dirname}/../tmp/testing-storage-01`)
    await storage.hset('myValue01', {foo: 'bar'})
    let data01 = await storage.hgetall('myValue01')
    assert.deepEqual(data01, {foo: 'bar'})
  })
})

/* global describe, before, after, it */
