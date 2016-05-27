/**
 * Craete a storage instance
 * @function create
 */
'use strict'

const SgStorage = require('./sg_storage')

/** @lends create */
function create (...args) {
  return new SgStorage(...args)
}

module.exports = create
