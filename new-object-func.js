var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
 
Person.prototype = {
  toString: function() { return this.firstName + ' ' + this.lastName; }
}

function newObject(func) {
  // get an Array of all the arguments except the first one
  var args = Array.prototype.slice.call(arguments, 1);
 
  // create a new object with its prototype assigned to func.prototype
  var object = Object.create(func.prototype);

  // invoke the constructor, passing the new object as 'this'
  // and the rest of the arguments as the arguments
  var result = func.apply(object, args);

  // return the new object
  return (typeof result === 'object' && result) || object;
}
 
var pesho = newObject(Person, "Peter", "Stamatov");
console.log(pesho.toString());