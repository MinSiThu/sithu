let Route = require("./Route");
let Context = require("./Context");
let Interceptor = require("./Interceptor");
let path = require("path");

module.exports = class{
    static async bindRoute(app,routeConfig){

        let route = new Route(routeConfig);
        app.get(route.url,async (req,res)=>{

            let context = new Context(req);
            let interceptor = new Interceptor(route.interceptor);

            try{
                await interceptor.fn(context,res,function(data){
                    res.status(202).render(route.view,data);
                });    
            }catch(e){
                if(app.get("deploy") == true){
                    res.status(500).sendFile(path.join(__dirname,"views","500.html"));
                }else{
                    res.status(500).send(e);
                }
            }
           
        })
    
    }
}