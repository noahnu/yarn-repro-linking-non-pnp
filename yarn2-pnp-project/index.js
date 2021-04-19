const assert = require('assert')
const resolve = require('enhanced-resolve')

assert.equal(
  resolve.sync(require.resolve("my-linked-package"), "react-dom"),
  require.resolve("react-dom", {
    paths: [require.resolve("my-linked-package")],
  })
)
