// * No. 18
// * Create strings using template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    const resultDisplayArray = arr.map(arr => `<li class="text-warning">${arr}</li>`);

    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// * No. 19
// * Write concise obj literal declarations using simple fields
const createPerson = (name, age, gender) => ({
    name, age, gender
});
console.log(createPerson("Zodiac Hashbro", 56, "male"));

// * No. 20
// * Write concise declarative functions with es6
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(10);
console.log(bicycle.gear);

// * No. 21
// * Use class syntax to define a constructor function
function makeClass() {
    "use strict";
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// * No. 22
// * Use getters and setters to control access to an object
function makeXlass() {
    "use strict";
    class Thermostat {
        constructor(fahrenheit) {
            this._fahrenheit = fahrenheit;
        }
        // ? getter make fahrenheit to celcius
        // ? getter return the value in celcus
        get temperature() {
            return (5/9) * (this._fahrenheit-32);
        }
        // ? setter input is in celcius
        set temperature(celcius) {
            this._fahrenheit = celcius * 9.0 / 5 + 32;
        }
    }

    return Thermostat;
}
const Thermostat = makeXlass();
const thermos = new Thermostat(76); //directly to the seter
let temp = thermos.temperature; //setter work here
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// * No. 23
// * Understand the differences between import and require
import {capitalizeString} from "string_functions";
// ? "use strict";
capitalizeString("hello!"); 

// * No. 24
// * Use export to reuse a code block
const capitalizzeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const foo = "bar";
export const bar = "foo";

// * No. 25
// * Use * to import everything from a file
import * as myCapitalizeStrings from "capitalize_strings";

// * No. 26
// * Create an Export Fallback with export default
export default function substract(x,y) {
   return x - y; 
}

// * No. 27
// * Import a default export
// * The difference is without using curly braces to import from default export
import subtract from "math_functions";
subtract(7,4);