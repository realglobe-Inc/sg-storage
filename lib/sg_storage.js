/**
 * @function sgStorage
 * @param {Object} config
 */
'use strict'

const {ARedis, ARedisLight} = require('aredis')

/** @lends sgStorage */
function sgStorage (config) {
  if (typeof config === 'string') {
    config = {dirname: config}
  }
  const {dirname} = config
  return new ARedisLight(dirname)
}

Object.assign(sgStorage, {
  /**
   * Use redis server
   * @param options
   * @see https://github.com/NodeRedis/node_redis#clientendflush
   */
  redis (options) {
    return new ARedis(options)
  }
})

module.exports = sgStorage
