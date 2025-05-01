// index.js - Lab 7 Function
// Author: Angelina Todorov
// Date:5/1/25

// Constants

// Functions

function sortUserName() {
  let userName = window.prompt("Please state your name")
  console.log("userName=", userName)

  let nameArray = userName.split('');
  console.log("nameArray = ", nameArray)

  let sortedNameArray = nameArray.sort();
  console.log("sortedNameArray= ", sortedNameArray)

  nameSorted = sortedNameArray.join('')
  console.log("nameSorted= ", nameSorted)

  return nameSorted
}

// output 
let func = sortUserName();
document.writeln("Here is your sorted name: ", func, "</br>")
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
