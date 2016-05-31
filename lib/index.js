/**
 * Simple storage for SUGOS
 * @module sg-storage
 */

'use strict'

const sgStorage = require('./sg_storage')

let lib = sgStorage.bind(this)

Object.assign(lib, sgStorage, {

})

module.exports = lib
