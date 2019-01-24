// * No. 12
// * Regex: match characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result.length);

// * No. 13
// * Regex: match characters that occur zero or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /aaa*/gi;
let result_1 = chewieQuote.match(chewieRegex);
console.log(result_1.length);

// * No. 14
// * Regex: find characters with lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegexx = /<h1*>/;
let result_2 = text.match(myRegexx);
console.log(result_2);

// * No. 15
// * Regex: find one or more criminals in a hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /[^a-bd-z0-9]+/gi; // ? /C+/
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// * No. 16
// * Regex: match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^cal/gi;
let result_3 = calRegex.test(rickyAndCal);
console.log(result_3);

// * No. 17
// * Regex: match ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result_4 = lastRegex.test(caboose);
console.log(result_4);

// * No. 18
// * Regex: match all letters and numbers
// * \w = match all alphabet, number, and '_'
let quote_sample = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /[\w+]/gi;
let result_5 = quote_sample.match(alphabetRegexV2).length;
console.log(result_5);

// * No. 19
// * Regex: match everything but letters and numbers
// * \W = match all non-alphanumeric characters
let quoteXample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /[\W]/gi;
let result_6 = quoteXample.match(nonAlphabetRegex).length;
console.log(result_6);

// * No. 20
// * Regex: match all numbers
// * \d = match all numeric characters
let numString = "Your sandwich will be $5.00";
let numRegex = /[\d]/gi;
let result_7 = numString.match(numRegex);
console.log(result_7);

// * No. 21
// * Regex: match all non-numbers
// * \D = match all non-numeric characters
let numStringie = "Your sandwich will be $5.00";
let noNumRegex = /[\D]/gi;
let result_8 = numStringie.match(noNumRegex).length;
console.log(result_8);

// * No. 22
// * Regex: restrict possible usernames
let username = "JACK";
let userCheck = /^[A-Za-z][a-zA-Z]+[\w]*$/i;
let result_9 = userCheck.test(username);
console.log(result_9);