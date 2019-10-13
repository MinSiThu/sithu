let Route = require("./Route");
let Context = require("./Context");
let Interceptor = require("./Interceptor");

module.exports = class{
    static async bindRoute(app,routeConfig){

        let route = new Route(routeConfig);
        app.get(route.url,async (req,res)=>{

            let context = new Context(req);
            let interceptor = new Interceptor(route.interceptor);

            await interceptor.fn(context,res,function(data){
                res.status(202).render(route.view,data);
            });
            
        })
    
    }
}