

function doNothing() {} 

function sayHello() {
    console.log('Hello!');
  } 

  sayHello();

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 

  sayHelloToIsabel ();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 

  sayHelloToSofia ();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 

  sayHelloToBrendan ();

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan(); 

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething('Bono'); // passing the argument 'anything' into our function  

//   function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
//   } 

//   say("Goodbye", "Julio");

//   function say(greeting, firstName) {
//     console.log("firstName: ", firstName);
//     console.log("greeting: ", greeting);
//     console.log(`${greeting}, ${firstName}!`);
//   } 
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
  } 
  console.log(say("Hello", "Sofia"));


  function add(x, y) {
     x + y;
  } 

  console.log(add(1,2));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log('I was called!');
  } 

  console.log(say("Howdy", "partner")); 

  function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
  } 