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

function MonoloopProfile(config) {
  RED.nodes.createNode(this,config);

  // Retrieve the config node
  this.accountid = RED.nodes.getNode(config.accountid);
  this.apikey = RED.nodes.getNode(config.apikey);

  if (this.accountid && this.apikey) {
      // Do something with:
      //  this.server.host
      //  this.server.port
  } else {
      // No config node configured
  }
}

RED.nodes.registerType("monoloop-profile",MonoloopProfile);


