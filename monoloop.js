// monoloop.js
module.exports = function(RED) {
  var request = require('request')

  // Configuration Node 
  function MonoloopConfigNode(n) {
    RED.nodes.createNode(this, n);
    this.name = n.name
    this.accountid = n.accountid
    this.apikey = n.apikey
  }
  RED.nodes.registerType("monoloop-config", MonoloopConfigNode)
  
  // Profile Node
  function MonoloopProfile(n) {
    RED.nodes.createNode(this,n);
    let node = this;
    this.credentials = RED.nodes.getNode(n.configuration)
    this.name = n.name;
    this.action = n.action;

    // Retrieve the config node
    this.accountid = this.credentials.accountid;
    this.apikey = this.credentials.apikey;

    //Create URL
    let url = 'https://'+this.accountid+':'+this.apikey+'@'+this.accountid+'invoke.monoloop.com/V1/profiles/5ee74b9c5e9825220529785c'

    // Check configuration exists 
    if (this.accountid && this.apikey) {
      node.on('input', function(msg) {
        request(
          {
              url : url
          },
          function (error, response, body) {
            msg.payload = response;
            node.send(msg);
          }
        )
      })
    } else {
      node.log("Configuration for Monoloop Node was not provided");
    }
  }
  RED.nodes.registerType("monoloop-profile", MonoloopProfile);

} // End export