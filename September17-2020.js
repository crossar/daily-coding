// Understanding Boolean Values

function welcomeToBooleans() {
    return true; 
  }
  
// Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {

  if (wasThatTrue) {
    return "Yes, that was true";
  }
    return "No, that was false";
   
  }

  // Comparison with the Equality Operator


function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  // Comparison with the Strict Equality Operator

  // val is strictly equal to 7
  
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  