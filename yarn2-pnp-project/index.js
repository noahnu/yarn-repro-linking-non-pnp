const resolve = require('enhanced-resolve')

const resolvedNM = resolve.sync('../yarn1-nm-project/my-linked-package', 'react-dom')
const resolvedPnp = resolve.sync(__filename, 'react-dom')

console.log('Linked Package:', resolvedNM)
console.log('Root Project', resolvedPnp)
