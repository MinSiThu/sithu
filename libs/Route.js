let util = require("util");

module.exports = class{
    constructor({
            url,view,
            interceptor=(context,response,next)=>{ next() }
    }){
        this.url = url;
        this.view = view;
        if(util.isFunction(interceptor) == true){
            this.interceptor = interceptor;
        }else{
            let e = new Error(`${interceptor} is not a function!`);
            console.trace(e);
        }
    }
}