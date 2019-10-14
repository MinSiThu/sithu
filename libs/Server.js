let express = require("express");
let app = express();
let path = require("path");

app.use(express.static("static"));
app.set("view engine","pug");
app.set("views","pages");

let RouteBinder = require("./RouteBinder");
module.exports = class{
    constructor(){
        this.$app = app;
        this.deployStatus = false;
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