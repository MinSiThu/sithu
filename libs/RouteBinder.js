let Route = require("./Route");
let Context = require("./Context");

module.exports = class{
    static async bindRoute(app,routeConfig){

        let route = new Route(routeConfig);
        app.get(route.url,async (req,res)=>{
            let context = new Context(req);
            let data = await route.interceptor(context);
            res.status(202).render(route.view,data);
        })
    
    }
}