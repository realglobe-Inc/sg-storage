/**
 * Simple storage for SUGOS
 * @module sg-storage
 */

'use strict'

const create = require('./create')
const SgStorage = require('./sg_storage')

let lib = create.bind(this)

Object.assign(lib, {
  create,
  SgStorage
})

module.exports = lib
