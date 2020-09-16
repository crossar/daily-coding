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

