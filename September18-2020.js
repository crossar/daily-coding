// Practice comparing different values

function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

// Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  // Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  // Comparison with the Greater Than Operator

  function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);