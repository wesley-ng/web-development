// * No. 1
// * Explore differences between var and let keywords
// ? using let, a variable with the same name can only be declared once
let catName;
let quote;
function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

// * No. 2
// * Compare scopes of the var and let keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i  is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(
    checkScope()
);

// * No. 3
// * Declare a read-only variable with const keyword
function printManyTimes(str) {
    "use strict";
    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp");

// * No. 4
// * Mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5; 
    s[2] = 7;
}
editInPlace();
console.log(s);

// * No. 5
// * Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log("Phew");
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);