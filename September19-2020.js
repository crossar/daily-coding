// Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  // Comparison with the Less Than Or Equal To Operator

  function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  // Comparisons with the Logical And Operator

  function testLogicalAnd(val) {
   
  
    if (val <= 50 && val >=25) {
        return "Yes";
    }
    return "No";
  }
  
  testLogicalAnd(10);

  // Comparisons with the Logical Or Operator

  function testLogicalOr(val) {
  
    if (val < 10 || val > 20) {
      return "Outside";
    }

    return "Inside";
  }
  
  testLogicalOr(15);

  //  Introducing Else Statements

  function testElse(val) {
    var result = "";
   
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
  }
  
  testElse(4);
  