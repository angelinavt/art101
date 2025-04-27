// index.js - Lab 6 - Arrays and Objects
// Author: Angelina Todorov
// Date: 4/27/25

//Define Variables
myTransport = ["bus", "car", "walking"];

var myMainRide = {
  make: "Metro Bus",
  model: "Shuttle Bus",
  color: "blue and white",
  year: 2014,
  age: function() {
      return 2025 - this.year;
  }
}

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// Constants

// Functions

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
