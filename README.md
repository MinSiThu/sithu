# Sithu (Server Side Rendering)
## Simple, Fast and Secure

```
npm install --save sithu
```
[![Generic badge](https://img.shields.io/badge/Star-Repository-blue.svg)](https://github.com/MinSiThu/sithu/stargazers)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/MinSiThu/sithu)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/MinSiThu/sithu/blob/master/LICENSE)

[![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://github.com/MinSiThu/sithu/graphs/contributors)

# Special Announcements

Since version 1.1.5, compression mode and cache features are built-in. And infinity sockets mode is default. HSTS with 60 days is supported by default. **Build Secure and High Speed**

- [Sample Tutorial](#Sample-Tutorial)
- [Api Documentation](#Api-Documentation)
  - [**Server Builder**](#ServerBuilder)
  - [server (class:Server)](#Server-class)
    1. [setRoutes(routes)](#setRoutes(routes))
    2. [listen(port,callback[options])](#listen(port,callback[options]))
    3. [setViewEngine(engineName)](#setViewEngine(engineName))
    4. [addLogger()](#addLogger())
    5. [deploy()](#deploy())
  - [Interceptor](#Interceptor)
  - [Fetching](#Fetching)

## Sample-Tutorial
After installing, build your project structure.
```js
/interceptors
    /index.js
/pages
    /index.pug
/static
server.js
routes.js
package.json
```

In **server.js**
```js
let Sithu = require("sithu");
let routes = require("./routes");

let sithuServer = Sithu({
    hsts:false, //default is false
    cache:false, // default is false
    compressionMode:true // default is false
})

sithuServer.setRoutes(routes);
sithuServer.deploy();
sithuServer.listen(3000,function(){
    console.log(`Server is working`);
})
```

In **pages/index.pug**
```jade
h1 Hello World from #{name}
```

In **interceptors/index.js**
```js
module.exports = function(context,response,next){    
    let data = {name:'SiThu Server'}
    next(data);
}
```

In **routes.js**
```js
let IndexInterceptor = require("./interceptors/index");

module.exports =[
    {
        "url":"/",
        "view":"index",
        interceptor:IndexInterceptor,
    }
]
```

Then in command line,
```sh
node server.js
```

Open **localhost:4200**

****
## Api-Documentation

### **ServerBuilder**
```
let Sithu = require("sithu");
let sithuServer = Sithu(options)
```
Options can be
#### hsts, default is true
#### cache, default is false,
#### compressionMode, default is false,
#### view_engine, default is "pug"

### **Server-class**

### setRoutes(routes)
**setRoutes** is method for setting server routes.
A typical server route is 
```js 
{
    url:"/",
    view:"index",
    interceptor:indexInterceptor,
}
```

### listen(port,callback[options])
Default port is 4200. Callback is optional.
```js
server.listen(3000);
```

### setViewEngine(engineName)
**setViewEngine** is a method for setting view engine in sithu.js. Default is **pug** view engine.
Customize engine requires **npm installation**.
If you need ejs,
```js
npm install ejs
```
```js
server.setViewEngine("ejs");
```

### addLogger()
**addLogger** is a method for setting log files in your app. This is a good-to-have feature in production mode.
```js
server.addLogger(); //call method before deploy
server.deploy();
```
In your working directory, *server.log* file is automatically created. 

### deploy()
If the server is ready to deploy, this method should be called. 
```js
if(process.env.NODE_ENV =="production"){
    server.deploy()
}
```

### **Interceptor**
interceptor function receives three arguments.
```js
module.exports = function(context,response,next){
    if(context.headers.authorization == "true"){
        response.redirect("/404"); //redirecting
    }
    next({
        username:"sithu" //data will be accessible in view.pug
    }); //to render view

}
```

### **Fetching**
Fetching can be used in interceptors. These are powerful part of sithu framework and makes it UI server.
```js
// in interceptor
let fetcher = require("sithu/fetcher");

module.exports = async(cotext,response,next)=>{
    let ajaxRes = await fetcher("https://jsonplaceholder.typicode.com/posts");
    let data = await ajaxRes.json();
    next({
        data
    })
}
```
Fetcher library of sithu is based on isomorphic-unfetch library.

***
### If you found this repository useful, star this repository for appreciating and supporting our framework.

[![Generic badge](https://img.shields.io/badge/Star-Repository-blue.svg)](https://github.com/MinSiThu/sithu/stargazers)