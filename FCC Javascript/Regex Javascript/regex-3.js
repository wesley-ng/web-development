// * No. 23
// * Regex: match whitespace
let sample = "Whitespaces is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result);

// * No. 24
// * Regex: match non-whitespace characters
let xample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result_1 = xample.match(countNonWhiteSpace);
console.log(result_1.length);

// * No. 25
// * Regex: specify upper and lower numbers of matches
let ohStr = "Ohhhhhhh no";
let ohRegex = /Oh{3,6}\s/;
let result_2 = ohRegex.test(ohStr);
console.log(result_2);

// * No. 26
// * Regex: specify only the lower number of matches
let haStr = "Ha"+"z".repeat(100) + "ah";
let haRegex = /Haz{4,}ah/;
let result_3 = haRegex.test(haStr);
console.log(result_3);

// * No. 27
// * Regex: specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result_4 = timRegex.test(timStr);

// * No. 28
// * Regex: Check for all or none
let favWord = "favourite";
let favRegex = /favou?rite/;
let result_5 = favRegex.test(favWord);
console.log(result_5);

// * No. 29
// * Regex: positive and negative lookahead
let sampleWords = "astronaut123";
let pwRegex = /(?=\D{3,})(?=\D*\d{2,})/;
// ? First bracket would check all characters which are not numbers with minimum 3 characters and the last bracket check all characters which ended with numbers with minimum 2 characters
let result_6 = pwRegex.test(sampleWords);
console.log(result_6);
console.log(sampleWords.match(pwRegex));

// * No. 30
// * Regex: reuse patterns using capture group
let repeatNum = "142 142 142 143 143";
let reRegex = /^(\d+)\s\1\s\1\s(\d+)\s\2$/;
// ? \1 is the reference to the first \d
// ? \2 is the reference to the second \d
let result_7 = reRegex.test(repeatNum);
console.log(result_7);
console.log(repeatNum.match(reRegex));

// * No. 31 
// * Regex: use capture groups to search and replace
let huhText = "This sandwich is good";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result_8 = huhText.replace(fixRegex, replaceText);
console.log(result_8);

// * No. 32
// * Regex: remove whitespace from start and end
let hello = "    Hello, World!    ";
let wsRegex = /^(\s+)|(\s+)$/g;
let result_9 = hello.replace(wsRegex, "");
console.log(result_9);