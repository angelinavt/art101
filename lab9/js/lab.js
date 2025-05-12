// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Angelina Todorov
// Date:5/11/25

// Constants

// Functions

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
 
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});


<head>
    <link rel="stylesheet" type="text/css" href="../css/site.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/lab.js" DEFER></script>
</head>

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
