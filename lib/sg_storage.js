/**
 * @function sgStorage
 */
'use strict'

const { Apemanredis, ApemanredisLight } = require('apemanredis')

/** @lends sgStorage */
function sgStorage (config) {
  if (typeof config === 'string') {
    config = { dirname: config }
  }
  let { dirname } = config
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
