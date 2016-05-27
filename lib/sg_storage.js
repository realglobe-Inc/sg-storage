/**
 * @class SgStorage
 */
'use strict'

const co = require('co')
const { LocalStorage } = require('node-localstorage')

class SgStorage {
  constructor (dirname, options) {
    const s = this
    s.localStorage = new LocalStorage(dirname)
  }

  /**
   * Set values
   * @param {string} key
   * @param {Object} values - Value to save
   * @returns {Promise}
   */
  set (key, values) {
    const s = this
    return co(function * () {
      let item = JSON.stringify(values)
      s.localStorage.setItem(key, item)
    })
  }

  /**
   * Get a value.
   * @param {string} key
   * @returns {Promise}
   */
  get (key) {
    const s = this
    return co(function * () {
      let item = s.localStorage.getItem(key)
      return JSON.parse(item)
    })
  }

}

module.exports = SgStorage

