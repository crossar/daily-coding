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
  