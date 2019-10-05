let flight = require("flightjs");

function Button(){
    this.onClick = function(){
        console.log("clicked");
    }

    this.after("initialize",function(){
        console.log("Attached");
        this.on("click",function(){
            this.onClick();
        })
    })
}