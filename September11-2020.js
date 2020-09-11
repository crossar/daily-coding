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




