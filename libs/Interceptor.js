let response;

module.exports = class{
    constructor(fn,response){
        this.fn = fn.bind(this);
    }
}