// index.js -Lab 13 Loops
// Author: Angelina Todorov
// Date:5/25/25

function whatHappensOnClick() {
    console.log("click");

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    for (let i = 1; i <= 200; i++) {
      let message = "";

      if (i % 7 === 0 && i % 2 === 0) {
        message = "Boom!";
      } else if (i % 5 === 0) {
        message = "Buzz!";
      } else if (i % 3 === 0) {
        message = "Fizz!";
      } else {
        message = i;
      }

      const p = document.createElement("p");
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  }

  // Attach the click event using jQuery
  $(document).ready(function () {
    $("#button").click(whatHappensOnClick);
  });

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
