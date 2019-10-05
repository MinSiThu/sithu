module.exports = class{
    constructor({headers,url,params,query}){
       this.headers = headers;
       this.url = url;
       this.params = params;
       this.query = query;
    }
}