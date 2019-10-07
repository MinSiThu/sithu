let sithuServer = require("../index");
let routes = require("./routes");

sithuServer.setRoutes(routes);
sithuServer.listen(3000,function(){
    console.log(`Server is working`);
})