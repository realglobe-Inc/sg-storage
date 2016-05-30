/**
 * @class SgStorage
 */
'use strict'

const co = require('co')
const stringcase = require('stringcase')
const path = require('path')
const {
  existsASync,
  readFileASync,
  writeFileASync,
  unlinkASync,
  mkdirpAsync
} = require('./helpers/file_helper')

class SgStorage {
  constructor (dirname, options = {}) {
    const s = this
    s.dirname = dirname
    s._sub = {}
  }

  /**
   * Set values
   * @param {string} key
   * @param {Object} values - Value to save
   * @returns {Promise}
   */
  set (key, values) {
    const s = this
    let filename = s._resolve(key)
    return co(function * () {
      let content = JSON.stringify(values)
      yield mkdirpAsync(path.dirname(filename))
      yield writeFileASync(filename, content)
    })
  }

  /**
   * Get a value.
   * @param {string} key
   * @returns {Promise}
   */
  get (key) {
    const s = this
    let filename = s._resolve(key)
    return co(function * () {
      let exists = yield existsASync(filename)
      if (exists) {
        let content = yield readFileASync(filename)
        return JSON.parse(content)
      }
      return undefined
    })
  }

  /**
   * Delete data
   * @param {string} key
   * @returns {Promise}
   */
  del (key) {
    const s = this
    let filename = s._resolve(key)
    return co(function * () {
      let exists = yield existsASync(filename)
      if (exists) {
        unlinkASync(filename)
      }
    })
  }

  /**
   * Get sub storage
   * @param {string} name
   * @returns {SgStorage}
   */
  sub (name) {
    const s = this
    if (name in s._sub) {
      return s._sub[ name ]
    }
    let dirname = path.resolve(s.dirname, stringcase.snakecase(name))
    let sub = new SgStorage(dirname)
    s._sub[ name ] = sub
    return sub
  }

  _resolve (key) {
    const s = this
    return path.resolve(s.dirname, `${stringcase.spinalcase(key)}.json`)
  }

}

module.exports = SgStorage

