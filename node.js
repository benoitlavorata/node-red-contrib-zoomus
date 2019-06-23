module.exports = function (RED) {

    var handle_error = function (err, node) {
        node.log(err.body);
        node.status({
            fill: "red",
            shape: "dot",
            text: err.message
        });
        node.error(err.message);
    };

    function MyNode(config) {
        const node = this;
        RED.nodes.createNode(node, config);
        node.host = RED.nodes.getNode();
        const Connector = require('./Connector.js');
        node.zoom = new Connector({
            API_KEY: config.api_key,
            API_SECRET: config.api_key
        });

        node.on('input', function (msg) {
            node.status({
                fill: "blue",
                shape: "dot",
                text: `Running...`
            });

            msg['_original'] = msg.payload;
            node.zoom.
            call(msg.payload)
                .then(data => {
                    node.status({
                        fill: "green",
                        shape: "dot",
                        text: `Success !`
                    });
                    msg.payload = data;
                    node.send(msg);
                }).catch(err => {
                    node.error(err);
                    handle_error(err, node);
                    msg.payload = false;
                    node.send(msg);
                });
        });
    }
    RED.nodes.registerType("zoomus", MyNode);
};