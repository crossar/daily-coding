// Halloweeeeeen today yay! but I want to do check in even for a lil bit. cause I've been sick this past few days and now we are celebrating Halloween with Family <3

//  Replace Loops using Recursion

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }