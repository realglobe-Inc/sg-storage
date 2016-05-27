/**
 * @class SgStorage
 */
'use strict'

const { LocalStorage } = require('node-localstorage')

class SgStorage extends LocalStorage {
  constructor (dirname, options) {
    super(dirname, options)
  }
}

module.exports = SgStorage

