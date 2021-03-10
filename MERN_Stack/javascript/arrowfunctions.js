const sayHello = (name) =>{
  console.log(`Hello ${name}`);
};

sayHello('john')

var square = function(n) {
  return n * n;
};
 //is the same as
 const square = n => n * n;


 //Arrow functions provide a simpler syntax with implicit returns for succinct expressions.
 // Additionally, they inherit context from parent scopes. While this is great much of the time, 
 // there are instances when you want context to change, so be aware of how an arrow function might affect your code