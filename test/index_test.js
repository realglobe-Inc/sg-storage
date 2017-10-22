/**
 * Test case for index.
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')


describe('index', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Create', async () => {
    for (let name of Object.keys(index)) {
      assert.ok(index[ name ])
    }
  })
})

/* global describe, before, after, it */
