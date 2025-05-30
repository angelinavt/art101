// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Angelina Todorov
// Date:5/11/25

// Constants

// Functions

// Make sure everything runs after the page is fully loaded

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).toggleClass("special");
});

  // now add (or subtract) the "special" class to the section
  $("#button-challenge").toggleClass("special");
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
