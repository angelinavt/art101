// index.js - Lab 12: Conditionals 
// Author: Angelina Todorov
// Date:5/22/25

function getHouse(num) {
    // get the remainder when divided by 4
    let remainder = num % 4
    let str = "";

    // assign houses with descriptions based off the remainders
    if (remainder == 0) {
        str = "House Stark of Winterfell: A proud and ancient house from the cold, harsh North, the Starks are known for their honor, stoicism, and deep connection to the old ways.";
    } else if (remainder == 1) {
        str = "House Lannister of Casterly Rock: Wealthy, cunning, and ambitious, the Lannisters are the richest family in Westeros, thanks to their gold mines. .";
    } else if (remainder == 2) {
        str = "House Targaryen of Dragonstone: Once rulers of the Seven Kingdoms, the Targaryens are descended from dragonlords of Valyria. With their silver hair and violet eyes, they are a mystical and fiery presence in Westeros.";
    } else if (remainder == 3) {
        str = "House Baratheon of Storm's End: A house of warriors and storm-born lords, the Baratheons are known for their explosive tempers and raw strength. With a black stag on a field of gold, they embody unyielding power and a tendency toward blunt force rather than cunning.";
    }
    return str;
};

// attach click listener to submit button
$("#button").click(function(){
    console.log("Button clicked!");
    
    // get the value in the input text box, assign to a variable name
    let name = $("#input").val()
    console.log(name);

    // get the length of the name
    let nameLength = name.length;
    console.log(nameLength);

    // get the house
    let house = getHouse(nameLength);
    console.log(house);

    // add house to output div
    $("#output").html("<h2>" + house + "</h2>");
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
