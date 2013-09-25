var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var base = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[base + size] = value;
    size++;
    console.log("base: " + base);
    console.log("size: " + size);
  };

  instance.dequeue = function(){
    if (size){
	     size--;
      var a = storage[base];
      delete storage[base];
      base++;
      console.log("base: " + base);
      console.log("size: " + size);
	     return a;
	   }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
