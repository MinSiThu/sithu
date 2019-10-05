let express = require("express");
let app = express();

app.use(express.static("static"));
app.set("view engine","pug");
app.set("views","pages");

let ConfigBinder = require("./ConfigBinder");
module.exports = class{
    constructor(){
        this.app = app;
    }

    listen(PORT=4200,cb=()=>{}){
        this.app.listen(PORT,cb);
    }

    setServer(configs){
        configs.forEach(config => {
            ConfigBinder.bindConfig(this.app,config);
        });
    }
}