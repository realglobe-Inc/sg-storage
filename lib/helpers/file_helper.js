'use strict'

const fs = require('fs')

exports.existsASync = (filename) => new Promise((resolve) =>
  fs.exists(filename, (exists) => resolve(exists))
)

exports.readFileASync = (filename) => new Promise((resolve, reject) =>
  fs.readFile(filename, (err, content) => err ? reject(err) : resolve(content))
)

exports.writeFileASync = (filename, content) => new Promise((resolve, reject) =>
  fs.writeFile(filename, content, (err) => err ? reject(err) : resolve())
)

exports.unlinkASync = (filename) => new Promise((resolve, reject) =>
  fs.unlink(filename, (err) => err ? reject(err) : resolve())
)
