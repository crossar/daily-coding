// Local Scope and Functions


function myLocalScope() {
    'use strict';
  
  function myLocalScope() {
    var myVar;
    console.log(myVar);
  }
  myLocalScope();
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  
  // Global vs. Local Scope in Functions

  // Setup
var outerWear = "T-Shirt";

function myOutfit() {

  
var myOutfit = "sweater";
return myOutfit;

  return outerWear;
}

myOutfit();

// Return a Value from a Function with Return

function timesFive(num) {
    return num * 5;
  }
  
  var answer = timesFive(5);

  