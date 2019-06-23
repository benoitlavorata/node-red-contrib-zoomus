module.exports = function (RED) {
    function MyConfigNode(n) {
        RED.nodes.createNode(this, n);

        //config
        this.name = n.name;
        this.api_key = n.api_key;
        this.secret_key = n.secret_key;
    }
    RED.nodes.registerType("zoomus-config", MyConfigNode);
}