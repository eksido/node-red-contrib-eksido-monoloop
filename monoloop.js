// monoloop.js

module.exports = function(RED) {

  function MonoloopNode(config) {

    RED.nodes.createNode(this,config);
    var node = this;
    
    this.accountid = config.accountid;
    this.apikey = config.apikey;

    node.on('input', function(msg) {
      this.status({fill:"green",shape:"dot",text:"sending"});
      /*
        Do the action
      */
      this.status({});
    })
  }
  
  RED.nodes.registerType("monoloop", MonoloopNode, {
    credentials: {
      accountid: {type:"text"},
      apikey: {type:"password"}
    }
  })
}