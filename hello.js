// global variables

// code 1
const sayHello = function(name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdiand");

// code 2
const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

const returnSayHello = function(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);