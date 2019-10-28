let ServerSingeleton = require("./libs/Server");
let fetch = require("isomorphic-unfetch");

module.exports = function(options){
    ServerSingeleton.pre(options);
    return new ServerSingeleton.Server();
}
