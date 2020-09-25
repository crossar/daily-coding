// I forgot to do a check in last night cause I wasn't home. 

// Logical Order in If Else Statements

function orderMyLogic(val) {
    if(val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }

    // Chaining If Else Statements

    function testSize(num) {

        
       if (num < 5) {
          return "Tiny";
        } else if (num < 10) {
          return "Small";
        } else if (num < 15) {
          return "Medium";
        } else if (num < 20) {
          return "Large";
        } else {
          return "Huge";
        }
      }
      
      testSize(7);

      // Golf Code

      function golfScore(par, strokes) {
        // Only change code below this line
        if (strokes == 1) {
          return "Hole-in-one!";
        } else if (strokes <= par - 2) {
          return "Eagle";
        } else if (strokes == par - 1) {
          return "Birdie";
        } else if (strokes == par) {
          return "Par";
        } else if (strokes == par + 1) {
          return "Bogey";
        } else if (strokes == par + 2) {
          return "Double Bogey";
        } else {
          return "Go Home!";
        }
        // Only change code above this line
      }
      // Change these values to test
      golfScore(5, 4);