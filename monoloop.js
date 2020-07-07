// monoloop.js
module.exports = function(RED) {

  function MonoloopConfigNode(n) {
    RED.nodes.createNode(this, n);
    this.name = n.name
    this.accountid = config.accountid
    this.apikey = config.apikey
  }

  RED.nodes.registerType("monoloop-config", MonoloopConfigNode)

}