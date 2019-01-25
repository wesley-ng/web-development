// * No. 1
// * Algo: convert celcius to fahrenheit
function convertToF(celsius) {
    let fahrenheit = 9/5 * celsius +32;
    return fahrenheit;
}
console.log(convertToF(-30));

// * No. 2
// * Algo: reverse a string
function reverseString(str) {
    let arr = [];
    for (let i = str.length-1; i >= 0; i--) {
        arr.push(str[i]);
    }
    return arr.join("");
}
// ? Other solution
function revStr(str) {
    return str.split("").reverse().join("");
}

console.log(revStr("hello"));