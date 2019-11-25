module.exports = function(RED) {

    function EksidoMonoloopNode(config) {
    RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }

    RED.nodes.registerType("eksido-monoloop",EksidoMonoloopNode,{
        credentials: {
            accountid: {type:"text"},
            apikey: {type:"password"},
            username: {type:"text"},
            password: {type:"password"}
        }
    });
}