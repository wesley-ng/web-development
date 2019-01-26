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

// * No. 3
// * Algo: factorialize a number
function factorialize(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorialize(5));

// * No. 4
// * Algo: find the longest word in a string
function findLongestWordLength(str) {
    let lenArr = str.split(" ").map(item => item.length);
    let max = lenArr[0];
    for (let i = 0; i < lenArr.length; i++) {
        if (lenArr[i] > max) {
            max = lenArr[i];
        }
    }
    return max;
}
// ? Simpler solution
function longestWordLength(str) {
    return str.split(" ").reduce((max, words) => Math.max(max, words.length), 0);
}

console.log(findLongestWordLength("May the force be with you"));
console.log(longestWordLength("May the force be with you"));

// * No. 5
// * Algo: return largest numbers in arrays
function largestOfFour(arr) {
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        maxArr.push(max);
    }
    return maxArr;
}

// ? Intermediate solution 
function biggestOfFour(arr) {
    return arr.map(arrInArr => {
        return arrInArr.reduce((prevEl, currentEl) => {
            return (currentEl > prevEl) ? currentEl : prevEl;
        });
    });
}

console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]));

console.log(biggestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
]));

// * No. 6
// * Algo: confirm the ending
// ? Simple solution
function confirmEnding(str, target) {
    if (str.endsWith(target)) return true;
    return false;
}
// ? Algo solution
function endWith(str, target) {
    target = target + "$";
    let re = new RegExp(target, "g");
    return re.test(str);
}

// ? intermediate solution
function ends_with(str, target) {
    return str.slice(str.length-target.length) === target;
}

console.log(ends_with("He has to give me a new name", "name"));
console.log(endWith("Walking on water and developing software from a specification are easy if both are frozen", "zen"));
console.log(confirmEnding("Congratulation", "on"));

// * No. 7
// * Algo: repeat a string repeat a string
// ? simpler solution
function repeatStringNumTimes(str, num) {
    if(num > 0) {
        return str.repeat(num);
    }
    return "";
}

function repeatStr(str, num) {
    let i = 0;
    let temp = "";
    if (num > 0) {
        while (i < num) {
            temp = temp + str;
            i++;
        }
        return temp;
    }
    return "";
}

console.log(repeatStr("*", 3));

// * No. 8
// * Algo: truncate a string
function truncateString(str, num) {
    let arr = [];
    if (num < str.length) {
        for (let i = 0; i < num; i++) {
            arr.push(str[i]);
        }
        return arr.join('')+"...";
    }
    return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));