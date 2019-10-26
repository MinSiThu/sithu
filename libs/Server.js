let express = require("express");
var http = require('http');
http.globalAgent.maxSockets = Infinity;
let app = express();
let path = require("path");
let compression = require("compression");
let helmet = require("helmet");

//speed up middleware
const sixtyDaysInSeconds = 5184000
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds
}))
app.use(compression());

app.use(express.static("static",{ maxAge: 31557600 }));
app.set("view engine","pug");
app.set("views","pages");

let RouteBinder = require("./RouteBinder");
module.exports = class{
    constructor(){
        this.$app = app;
        this.deployStatus = false;
    }

    setViewEngine(engine){
        app.set("view engine",engine);
    }

    deploy(){
        this.deployStatus = true;
        this.$app.set("deploy",true);
        this.$app.use((req,res,next)=>{
            res.status(404).sendFile(path.join(__dirname,"views","404.html"));
        })
    }

    listen(PORT=4200,cb=()=>{}){
        this.$app.listen(PORT,cb);
    }

    setRoutes(routes){
        routes.forEach(route => {
            RouteBinder.bindRoute(this.$app,route);
        });
    }
}