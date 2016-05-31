/**
 * @function sgStorage
 */
'use strict'

const co = require('co')
const { Apemanredis, ApemanredisLight } = require('apemanredis')

/** @lends sgStorage */
function sgStorage (dirname) {
  return new ApemanredisLight(dirname)
}

Object.assign(sgStorage, {
  /**
   * Use redis server
   * @param options
   * @see https://github.com/NodeRedis/node_redis#clientendflush
   */
  redis (options) {
    return new Apemanredis(options)
  }
})

module.exports = sgStorage
