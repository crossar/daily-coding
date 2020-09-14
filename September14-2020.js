// Passing Values to Functions with Arguments

function functionWithArgs(a,b) {
    console.log(a+b);
    }
    functionWithArgs(1,2); 
    functionWithArgs(7,9);

// Global Scope and Functions

// Declare your variable here
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}