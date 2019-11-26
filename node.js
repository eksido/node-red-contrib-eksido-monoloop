// node.js

module.exports = function(RED) {

  function MonoloopNode(config) {

    RED.nodes.createNode(this,config);
    var node = this;
    this.accountid = config.accountid;
    this.apikey = config.apikey;
    this.username = config.username;
    this.password = config.password;

    node.on('input', function(msg) {
      this.status({fill:"green",shape:"dot",text:"sending"});
      /*
        Do the action
      */
      this.status({});
    } 

  }

  RED.nodes.registerType("eksido-monoloop", MonoloopNode, {
    credentials: {
      apikey: {type:"password"},
      password: {type:"password"}
    }
  });

}