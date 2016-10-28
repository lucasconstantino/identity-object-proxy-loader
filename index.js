module.exports = function (source) {
  if(this.cacheable) this.cacheable()
  return 'exports = module.exports = require("identity-obj-proxy");'
}
