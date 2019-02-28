// * No. 1
// * Comment
// Hello this is Wesley

/*
    And I am from Indonesia
    Greetings!!
*/

// * No. 2
// * Initialize Variables
var ourName;
var myName;

// * No. 3
// * Storing Value
var a;
var b = 2;
a = 7;
b = a;


// * No. 4
/* 
    * Initialize var with assignment
    * variables
*/
var a = 9;


// * No. 5
/*
    * Understanding uninitialized
    * variables
*/
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;  // 6
b = b + 5;  // 15
c = c + " String!"; // I am a String!


// * No. 6
/*
    * case sensitivity
    * camelCase or snake_case
*/
var studlyCapVar;
var properCamelCase;
var title_case_over;

studlyCapVar = 10;
properCamelCase = "A String";
title_case_over = 9000;


// * No. 7, 8, 9, 10 
// * Add, Substract, 
// * Multiply, Divide
// * Remainder of 2 numbers
var sum = 10 + 10;
var red = 45 - 33;
var mul = 12 * 10;
var div = 4.4 / 2.0;
var rem = 11 / 3;


// * No. 11, 12, 13, 14
// * Compound assignment 
// * with augmented arithmetic
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

a -= 6;
b -= 15;
c -= 1;

a *= 5;
b *= 3;
c *= 10;

a /= 12;
b /= 4;
c /= 11;


// * No. 15
// * Declare String Variables
var myFirstName = "Wesley";
var myLastName = "Ng";


// * No. 16
// * Escape Literal Quotes in Strings
// * Using \"
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";


// * No. 17
// * Quoting strings with single quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


// * No. 18
// * Escape sequences in String
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


// * No. 19 
// * Concatenating String with Plus Operator
var myStr = "This is the start. " + "This is the end.";


// * No. 20
// * Concatenating String with Plus Equals operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";


// * No. 21
// * Constructing strings with variables
var myName = "Huang";
var myStr = "Our last name is "+ myName + ".";


// * No. 22
// * Appending variables to string
var someAdjective = "cool";
var myStr = "Learning to code is ";
myStr += someAdjective;


// * No. 23
// * Length of string
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;


// * No. 24
// * Bracket notation to find the first char in string
var firstLetterofLastName = "";
var lastName = "Lovelace";
firstLetterofLastName = lastName[0];


// * No. 25
// * Understand string immutability
var myStr = "Jello World";
myStr[0] = "H"; // ! won't work since string values in Js is immutable
// ? Solution: assign the new sentence to myStr
myStr = "Hello World";

// * No. 26 
// * Bracket notation to find the Nth letter in a string
var lastName = "Lovelace";
var thirdLetterofLastName = lastName[2]; //v

// * No. 27 
// * Bracket notation to find the last letter in a string
var lastName = "Lovelace";
var lastLetterofLastName = lastName[lastName.length-1];

// * No. 28 
// * Bracket notation to find the Nth to last character in a string
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length-2]; //c


// * No. 29 
// * Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

    return result;
}

wordBlanks("dog", "big", "ran", "quickly");