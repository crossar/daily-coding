//Escape Sequences in Strings

/* here are the things you have to keep in mind.

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/

var myDog = "Peter\n\t\\Cross\n'TheWiener'";
console.log(myDog)

// Concatenating Strings with Plus Operator

var myFav = "I love chocolates " + "and green tea."; // Only change this line
console.log(myFav)

// Concatenating Strings with the Plus Equals Operator

var Likes = "I like riding a bike. ";
Likes += "\n\tRiding bike is fun thing to do during summer!\n";

// Constructing Strings with Variables

var myName = "Aileen";
var myStr = "My name is " + myName + " and I am well! ";
console.log(myStr)

//  Appending Variables to Strings

var someAdjective = " 'fun', 'exciting', 'awesome' "; 
var myStr = "Learning to code is";
myStr += someAdjective;

// Find the Length of a String



