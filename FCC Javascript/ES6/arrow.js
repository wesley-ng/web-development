// * No. 6
// * Use arrow function to write concise anonymous functions
const magic = () => {
    "use strict";
};

// * No. 7
// * Use arrow functions to write concise anonymous functions
const magix = () => {
    "use strict";
    return new Date();
};

// * No. 8
// * Write arrow functions with parameters
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
console.log(myConcat([1,2], [3,4,5]));

// * No. 9
// * Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr.filter(arr => {
        // if (arr > 0) {
        //     return Number.isInteger(arr);
        // }
       return arr > 0 && Number.isInteger(arr)===true; 
    }).map(arr => arr*arr);

    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// * No. 10
// * Set default parameters for your functions
const increment = (function(){
    "use strict";
    return function increment(number, value=1){
        return number + value;    
    };
})();
console.log(increment(5,2));
console.log(increment(5));

const inkrement= (number, value=1) => {
    return number + value;
};

const decrement = (() => {
    return function decrement(number, value=1) {
        return number - value;
    };
})();
console.log(inkrement(7, 10));

// * No. 11
// * Use the rest operator with function parameters
// * spread operator(...) args which could take a variable number of arguments
const sum = (()=> {
    "use strict";
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,5));

// * No. 12
// * Use the spread operator to evaluate arrays in place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    "use strict";
    arr2 = [...arr1];
})();
console.log(arr2);
arr1[0] = "DEC";
console.log(arr1);
console.log(arr2);