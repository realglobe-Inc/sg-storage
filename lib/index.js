/**
 * Simple storage for SUGOS
 * @module sg-storage
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get create () { return d(require('./create')) },
  get SgStorage () { return d(require('./sg_storage')) }
}
