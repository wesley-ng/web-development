// * No. 40
// * Write reusable javascript function
function reusableFunction () {
    console.log("Hi World");
}

reusableFunction();

// * No. 41
// * Passing values to function with arguments
function functionWithArgs(a, b) {
    console.log(a + b);
 }

functionWithArgs(10, 5);

// * No. 42 
// * Global scope and functions
var myGlobal = 10;
var oopsGlobal;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: "+ myGlobal; // ? 15, global variable
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsglobal: " + oopsGlobal; // ? undefined cause the value of oopsGlobal is in another scope
    }
    console.log(output);
}
fun2();

// * No. 43
// * Local scope and functions
// * variable which are declared inside a local scope means it only visible within that function
function myLocalScope() {
    'use strict';
    var myVar = 10;
    console.log(myVar);
}
myLocalScope(); // ? 10
//console.log(myVar); // !undefined cause of local variable


// * No. 44
// * Global vs local scope in functions
// * it is possible to have global and local variables with the same name
var outerWear = "t-Shirt"; // global

function myOutfit() {
    outerWear = "sweater"; // local
    return outerWear;
}
console.log(myOutfit()); // ? sweater
console.log(outerWear); // ? sweater since the global variable has been overriden
// * but if outerWear within the scope is declared with var, then the outerWear is T-shirt


// * No. 45
// * Return a value from a function with return 
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(2));


// * No. 46
// * Understanding undefined value returned from a function
var sum = 8;
function addFive() {
    sum = sum + 5; 
}

var returnedValue = addFive(); // ! undefined, caused function didn't return any value

// * No. 47
// * Assignment with a returned value
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

// * No. 48
// * Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    var rmv = arr.shift();
    return rmv;
}

var testArr = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: "+ JSON.stringify(testArr));