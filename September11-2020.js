// Manipulate Arrays With shift()
var myArray = [["John", 23], ["dog", 3]];

// This removed the first element in array
// should be equals to  ["dog", 3]
var removedFromMyArray = myArray.shift();
console.log(myArray)

// Manipulate Arrays With unshift()

// This is similar to push() but instead of adding the element at the end of the array,unshift() adds the element at the beginning of the array.

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul",35]);
console.log(myArray)

// Shopping List

var myList = [
    ["Spam", 5],
    ["Loaf of bread", 1],
    ["Box of eggs", 3],
    ["Paper Plates", 30],
    ["Paper Towels", 1]
    ];

// Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();


