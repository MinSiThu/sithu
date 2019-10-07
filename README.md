# Sithu (Server Side Rendering)
 leave next and nuxt

```
npm install --save sithu
```
[![Generic badge](https://img.shields.io/badge/Star-Repository-blue.svg)](https://github.com/MinSiThu/sithu/stargazers)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/MinSiThu/sithu)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/MinSiThu/sithu/blob/master/LICENSE)

[![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://github.com/MinSiThu/sithu/graphs/contributors)

## Sample Tutorial
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
let sithuServer = require("sithu");
let routes = require("./routes");

sithuServer.setRoutes(routes);
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
### If you found this repository useful, star this repository for appreciating and supporting our framework.

[![Generic badge](https://img.shields.io/badge/Star-Repository-blue.svg)](https://github.com/MinSiThu/sithu/stargazers)