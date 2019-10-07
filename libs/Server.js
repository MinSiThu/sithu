let express = require("express");
let app = express();

app.use(express.static("static"));
app.set("view engine","pug");
app.set("views","pages");

let RouteBinder = require("./RouteBinder");
module.exports = class{
    constructor(){
        this.app = app;
    }

    listen(PORT=4200,cb=()=>{}){
        this.app.listen(PORT,cb);
    }

    setRoutes(routes){
        routes.forEach(route => {
            RouteBinder.bindRoute(this.app,route);
        });
    }
}