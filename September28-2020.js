// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  caseInSwitch(1);


//   Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    var answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }

  // Adding a Default Option in Switch Statements

  
