// The Registry Pattern
// http://www.watchmecode.net/registry-pattern
// -------------------------------------------

function Events(){
  this._registry = new Registry();
}

Events.prototype.on = function(eventName, callback){
  var handlers = this._registry.getValue(eventName);
  if (!handlers) { 
    handlers = [];
    this._registry.register(eventName, handlers);
  }
  handlers.push(callback);
};

Events.prototype.trigger = function(eventName, data){
  var handlers = this._registry.getValue(eventName);
  if (handlers){
    var length = handlers.length;
    var fn;
    for(var i = 0; i < handlers.length; i++){
      fn = handlers[i];
      fn(data);
    }
  }
};
