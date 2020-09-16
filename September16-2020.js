// Understanding Undefined Value returned from a Function

var sum = 0;

function addThree() {
  sum = sum + 3;
}


function addFive() {
   sum = sum + 5;
}

addThree();
addFive();

// Assignment with a Returned Value

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Stand in Line

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
  }
  
 
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  