// * No. 1
// * Debugging: use the js console to check the value of a variable
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);

// * No. 2
// * Debugging: understanding the differences between the freecodecamp and browser console
let outputTwo = "This will print to the browser console 2 times";
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
console.clear();
console.log(outputOne);

// * No. 3
// * Debugging: use typeof to check the type of a variable
let seven = 7;
let three = "3";
console.log(typeof(seven + three));
console.log(typeof(seven));
console.log(typeof(three));

// * No. 4
// * Debugging: catch misspelled variable and function names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// * No. 5
// * Debugging: catch unclosed parentheses, brackets, braces, and quotes
let myArray = [1,2,3];
let arraySum = myArray.reduce((accumulator, current) => accumulator + current);
console.log(`Sum of array value is: ${arraySum}`);

// * No. 6
// * Debugging: catch mixed usage of single and double quotes
let innerHtml = "<p>Click here to <a href=\"#Home\">return Home</a></p>";
console.log(innerHtml);

// * No. 7
// * Debugging: catch use of assignment operator instead of equality operator
let x = 7;
let y = 9;
let result = "to come";

if (x === y) result="Equal!";
else result="Not equal!";
console.log(result);

// * No. 8
// * Debugging: catch missing open and closing parenthesis after a function call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let result_1 = getNine();
console.log(result_1);

// * No. 9 
// * Debugging: catch arguments passed in the wrong order when calling a function
function raiseToPower(b, e){
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// * No. 10
// * Debugging: catch off by one errors when using indexing
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
        console.log(firstFive[i]);
    }
}
countToFive();

// * No. 11
// * Debugging: use caution when reinitializing variables inside a loop
function zeroArray(m, n) {
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// * No. 12
// * Debugging: prevent infinite loops with a valid terminal condition
function myFunc() {
    for (let i = 1; i <= 4; i+= 2) {
        console.log("Still going!");
    }
}
myFunc();