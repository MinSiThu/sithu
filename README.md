# Sithu (Server Side Rendering)
 leave next and nuxt

```
npm install --save sithu
```

After installing, build your project structure.
```js
/interceptors
    /index.js
/pages
    /index.pug
/static
server.js
config.js
package.json
```

In **server.js**
```js
let sithuServer = require("sithu");
let config = require("./config");

sithuServer.setServer(config);
sithuServer.listen(4200,function(){
    console.log(`Server is working`);
})
```

In **pages/index.pug**
```jade
h1 Hello World from #{name}
```

In **interceptors/index.js**
```js
module.exports = function(context){    
    let data = {name:'SiThu Server'}
    return data;
}
```

In **config.js**
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