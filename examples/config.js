let IndexInterceptor = require("./interceptors/index");

module.exports =[
    {
        "url":"/",
        "view":"index",
        interceptor:IndexInterceptor,
    }
]