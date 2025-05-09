// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Angelina Todorov 
// Date: 5/8/25

// Constants

// Functions
function isEven(x){
  return (x-2 == 0);

}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 27, 25, 14, 26, 400]
console.log("My array", array);

var result = array.map(isEven);
//should return [false, false, false, false, false, false]
console.log("Test of eveness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;

})

//should return [10, 5.196152422706632, 5, 3.7416573867739413, 5.0990195135927845, 20]
console.log("Squareroot of array:", result);






// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
