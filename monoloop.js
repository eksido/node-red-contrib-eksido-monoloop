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
  RED.nodes.registerType("monoloop-config", MonoloopConfigNode )
  
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

    // Check configuration exists 
    if (this.accountid && this.apikey) {
      // Find single profiles 
      if ( this.action === "getprofile" ){
        // Request URL
        let url = 'https://'+this.accountid+':'+this.apikey+'@'+this.accountid+'invoke.monoloop.com/V1/profiles/5ee74b9c5e9825220529785c'
        node.on('input', function(msg) {
          request(
            {
                url : url
            },
            function (error, response, body) {
              msg.payload = response.body;
              node.send(msg);
            }
          )
        })
      } else if ( this.action === "getprofiles" ) { // Find latest profiles 
        let url = 'https://'+this.accountid+':'+this.apikey+'@api.monoloop.com/profiles/'
        node.on('input', function(msg) {
          request(
            {
                url : url
            },
            function (error, response, body) {
              msg.payload = response.body;
              node.send(msg);
            }
          )
        })

      } else if ( this.action === "updateprofile" ) { // Find latest profiles 

      } else if ( this.action === "delete" ) {

      } else { // No action recorded  
        node.log("Action for Monoloop Profile Node was not provided")
      }    
    } else {
      node.log("Configuration for Monoloop Node was not provided")
    }
  }
  RED.nodes.registerType("monoloop-profile", MonoloopProfile);
} // End export
