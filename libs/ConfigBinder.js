let AppConfig = new require("./AppConfig");

module.exports = class{
    static async bindConfig(app,config){
        let appConfig = new AppConfig(config);
        app.get(appConfig.url,async (req,res)=>{
            let data = await appConfig.interceptor();
            res.status(202).render(appConfig.view,data);
        })
    }
}