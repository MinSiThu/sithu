let sithuServer = require("../index");
let config = require("./config");

sithuServer.setServer(config);
sithuServer.listen(3000,function(){
    console.log(`Server is working`);
})