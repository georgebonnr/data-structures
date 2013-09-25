var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;   //number of items in storage
  var base = 0;   //location of the oldest item in the array
  // Implement the methods below

  instance.enqueue = function(value){
    storage[base + size] = value;   //base and value need to be summed so that it's adding to the end of the option
    size++;
  };

  instance.dequeue = function(){
    if (size){
	     size--;
      var a = storage[base];    //var a is a temporary variable so that the item can be returned and the space cleared
      delete storage[base];
      base++;
	     return a;
	   }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
