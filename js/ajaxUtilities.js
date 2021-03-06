var ajaxUtilities = {
    httpRequests: [],
    create: function(uri, callbacks, method, data){
        var _ref = this.httpRequests.push(new XMLHttpRequest());
        this.httpRequests[_ref - 1].onprogress = function(e){
            console.log(e);
        }
        this.httpRequests[_ref - 1].onreadystatechange = function(event){
            switch(this.readyState){
                case XMLHttpRequest.UNSENT:
                    callbacks && callbacks.unsent && callbacks.unsent(this);
                    console.log(this.readyState);
                    console.log(this.status);
                    break;

                case XMLHttpRequest.OPENED:
                    callbacks && callbacks.opened && callbacks.opened(this);
                    console.log(this.readyState);
                    console.log(this.status);
                    break;

                case XMLHttpRequest.HEADERS_RECEIVED:
                    callbacks && callbacks.headers_received && callbacks.headers_received(this);
                    console.log(this.readyState);
                    console.log(this.status);
                    break;

                case XMLHttpRequest.LOADING:
                    callbacks && callbacks.loading && callbacks.loading(this);
                    console.log(this.readyState);
                    console.log(this.status);
                    break;
                case XMLHttpRequest.DONE:
                    var _data = null;
                    if(this.getResponseHeader("Content-Type") && this.getResponseHeader("Content-Type").split(';')[0] === "application/json"){
                        _data = JSON.parse(this.response);
                    }
                    callbacks && callbacks.done && callbacks.done(this, _data);
                    break;
                default:
                    console.log(this.readyState);
                    console.log(this.status);
            }
        };
        this.httpRequests[_ref - 1].open(method, uri, true);
        this.httpRequests[_ref - 1].send(data);
    }
}
