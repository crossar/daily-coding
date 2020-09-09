// Modify Array Data With Indexes

var myArray = [9,10,28];

// first value will be equal to 99
//should appear like this [45,10,28]

myArray[0] = 45;
console.log(myArray)

// Access Multi-Dimensional Arrays With Indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// myData should be equal to 8
// first bracket is 2 cause it starts with 0 so 0 will be [1,2,3] and the second bracket is 1 cause 8 is place second from [7,8,9] 
var myData = myArray[2][1];


// Manipulate Arrays With push()

var myArray = [["John", 23], ["cat", 2]];

// equals to [["John", 23], ["cat", 2], ["dog", 3]];

myArray.push(["dog", 3])

