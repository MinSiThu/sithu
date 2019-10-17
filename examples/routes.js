let IndexInterceptor = require("./interceptors/index");
let FetchInterceptor = require("./interceptors/fetchPage");

module.exports =[
    {
        "url":"/",
        "view":"index",
        interceptor:IndexInterceptor,
    },
    {
        "url":"/fetcher",
        view:"fetcher",
        interceptor:FetchInterceptor
    }
]