let AppConfig = require("./AppConfig");
let Context = require("./Context");

module.exports = class{
    static async bindConfig(app,config){

        let appConfig = new AppConfig(config);
        app.get(appConfig.url,async (req,res)=>{
            let context = new Context(req);
            let data = await appConfig.interceptor(context);
            res.status(202).render(appConfig.view,data);
        })
    
    }
}