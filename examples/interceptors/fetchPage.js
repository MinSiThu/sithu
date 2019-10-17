let fetcher = require("../../fetcher");

module.exports = async(cotext,response,next)=>{
    let ajaxRes = await fetcher("https://jsonplaceholder.typicode.com/posts");
    let data = await ajaxRes.json()
    
    next({
        data
    })
}