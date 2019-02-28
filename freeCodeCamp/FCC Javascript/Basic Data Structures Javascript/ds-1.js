// * No. 1
// * DS: use an array to store a collection of data
let yourArray = ["Wesley", 22, 'A', "Cool", true];

// * No. 2
// * DS: access an array's contents using bracket notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "y";
console.log(myArray);

// * No. 3
// * DS: add items to an array with push() and unshift()
function mixedNumbers(arr) {
    arr.push(7, "VIII", 9);
    arr.unshift("I", 2, "three");
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// * No. 4
// * DS: remove items from an array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// * No. 5
// * DS: remove items using splice()
function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a,b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// * No. 6
// * DS: add items using splice()
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'Paleturqoise', 'FireBrick']));

// * No. 7
// * DS: copy array items using slice
function forecast(arr) {
    arr = arr.slice(2,4);
    return arr;
}
console.log(forecast(['cold','rainy','warm','sunny','cool','thunderstorms']));

// * No. 8
// * DS: copy an array with the spread operator
function copyMachine (arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// * No. 9 
// * DS: combine arrays with the spread operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
console.log(spreadOut());

// * No. 10
// * DS: check for the presence of an element with indexOf()
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) != -1) return true;
    else return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));