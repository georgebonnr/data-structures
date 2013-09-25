var makeQueue = function(){
  var instance = {};
  instance.size = 0;
  instance.base = 0;
  for (var key in queueMethods){
    instance[key] = queueMethods[key];
  }
  return instance;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value){
    console.log(this);
    this[this.base + this.size] = value;
    this.size++;
  }, 

  dequeue: function(){
    if (this.size){
	     this.size--;
      var a = storage[base];
      delete this[base];
      this.base++;
	     return a;
	   }
  },

  size: function(){
    return this.size;
  } 
};

