class Response {

    constructor(){
        this.statusCode = 0;
        this.content = null;
    }

    status(status){
        this.statusCode = status;
        return this;
    }

    send(responseContent){
        this.content = responseContent;
        return this;
    }

    redirect(status, url) {
        this.statusCode = status;
        this.content = url;
    }
}

module.exports = Response;
