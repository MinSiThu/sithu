let Sithu = require("../index");
let routes = require("./routes");

let sithuServer = Sithu({
    hsts:true,
    cache:false,
    compressionMode:true
})

sithuServer.setRoutes(routes);
sithuServer.deploy();
sithuServer.listen(3000,function(){
    console.log(`Server is working`);
})