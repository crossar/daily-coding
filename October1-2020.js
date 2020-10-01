// Returning Boolean Values from Functions

function isLess(a, b) {
    
    return a <= b;
  }
  
  isLess(10, 15);


  // another example from the tutorial

  function isEqual(a,b) {
    return a === b;
  }

  // Return Early Pattern for Functions

 
   function abTest(a, b) {
   
    if (a < 0 || b < 0) {
      return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  // Counting Cards

  let count = 0;

function cc(card) {
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  

cc(2); cc(3); cc(7); cc('K'); cc('A');
  

//