let express = require("express");
var http = require('http');
http.globalAgent.maxSockets = Infinity;
let app = express();
let path = require("path");
let compression = require("compression");
let helmet = require("helmet");

//speed up middleware


module.exports.pre = ({hsts=false,cache=false,compressionMode=false,view_engine="pug"})=>{

    if(hsts == true){
        const sixtyDaysInSeconds = 5184000
        app.use(helmet.hsts({
            maxAge: sixtyDaysInSeconds
        }))
    }

    if(compressionMode == true){
        app.use(compression());
    }
    
    if(cache == true){
        app.use(express.static("static",{ maxAge: 31557600 }));
    }else{
        app.use(express.static("static"));
    }


    app.set("view engine",view_engine);
    app.set("views","pages");
}

let RouteBinder = require("./RouteBinder");
module.exports.Server = class{
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