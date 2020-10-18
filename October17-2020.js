// Iterate Odd Numbers With a For Loop

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Count Backwards With a For Loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Iterate Through an Array with a For Loop

var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}