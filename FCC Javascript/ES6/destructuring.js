// * No. 13
// * Use destructuring assignment to assign variables from objects
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // the value of tomorrow property is saved on tempOfTomorrow variable
    const {
        tomorrow: tempOfTomorrow
    } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// * No. 14
// * Use destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
    today: {
        min: 72,
        max: 83
    },
    tomorrow: {
        min: 73.3,
        max: 84.6
    }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {
        tomorrow: {
            max: maxOfTomorrow
        }
    } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// * No. 15
// * Use destructuring assignment to assign variables frm arrays
let a = 8, b = 6;
(() => {
    "use strict";
    [a,b] = [b,a];
})();
console.log(a);
console.log(b);

// * No. 16
// * Use destructuring assignment with the rest operator to reassign array elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);