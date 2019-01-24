// * No. 1 
// * Regex: using the test method
let myString = "Hello World";
let myRegex = /Hello/;
let result_0 = myRegex.test(myString);
console.log(result_0);

// * No. 2
// * Regex: match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result_1 = waldoRegex.test(waldoIsHiding);
console.log(result_1);

// * No. 3
// * Regex: match a literal string with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|fish|bird/;
let result_2 = petRegex.test(petString);
console.log(result_2);

// * No. 4
// * Regex: ignore case while matching (/regex/i)
let theirString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result_3 = fccRegex.test(theirString);
console.log(result_3);

// * No. 5
// * Regex: extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result_4 = extractStr.match(codingRegex);
console.log(result_4);

// * No. 6
// * Regex: find more than the first match (/regex/g)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result_5 = twinkleStar.match(starRegex);
console.log(result_5);

// * No. 7
// * Regex: match anything with wildcard period
let exampleStr = "Let's have a fun, a run with regular expressions!";
let unRegex = /.un/;
let result_6 = unRegex.test(exampleStr);
console.log(result_6);

// * No. 8
// * Regex: match single character with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it";
let vowelRegex = /[aiueo]/gi;
let result_7 = quoteSample.match(vowelRegex);
console.log(result_7.length);

// * No. 9
// * Regex: match letters of the alphabet
let quoteXample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result_8 = quoteXample.match(alphabetRegex);
console.log(result_8.length);

// * No. 10
// * Regex: match numbers and letters of the alphabet
let quotXample = "Blueberry 3.141592653s are delicious.";
let myRegeks = /[h-s2-6]/gi;
let result_9 = quotXample.match(myRegeks);
console.log(result_9.length);

// * No. 11
// * Regex: match single characters not specified
let quote_sample = "3 blind mice.";
let my_regex = /[^aiueo0-9]/gi;
let result_10 = quote_sample.match(my_regex);
console.log(result_10.length);