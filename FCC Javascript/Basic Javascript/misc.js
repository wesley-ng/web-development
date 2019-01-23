// * No. 93
// * Generate random number fractions with js
function randomFraction() {
    return Math.random();
}

// * No. 94
// * Generate random whole numbers with js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// * No. 95
// * Generate random whole numbers within a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
var myRandom = randomRange(5, 15);
console.log(myRandom);

// * No. 96
// * Use the parseInt function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

// * No. 97
// * Use the parseInt with a radix
function convertToIntegerX(str) {
    return parseInt(str, 2);
}
console.log(convertToIntegerX("10011"));

// * No. 98
// * Use the conditional (ternary) operator
function checkEqual(a, b) {
    return a === b ? true : false;
}

// * No. 99
// * Use multiple conditional operators 
function checkSign(num) {
    return (num === 0) ? "zero" : (num < 0) ? "negative": "positive";
}
console.log(checkSign(10));