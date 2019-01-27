// * No. 9
// * Algo: finders keepers
function findElement (arr, func) {
    // arr = arr.filter(num => func(num));
    // arr.forEach(element => {
    //    console.log(element); 
    // });
    return arr.filter(num => func(num))[0];
}

console.log(findElement([1, 2, 4, 9], num => num % 2 === 0));

// * No. 10
// * Algo: boo who
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
    // ? simpler
    // ? return typeof bool === 'boolean';
}
console.log(booWho(""));

// * No. 11
// * Algo: title case a sentence
function titleCase(str) {
    let arr = str.split(" ");
    arr = arr.map(element => {
        element = element.replace(/[A-Z]/g, w => w.toLowerCase());  
        element = element.replace(/^[a-z]/g, w => w.toUpperCase());
        return element;
    });
    return arr.join(" ");
}
// ? Simpler solution
function capitalWord(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
    // * ^ at the beginning of string => capitalize()
    // * \s after space => capitalize()
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(capitalWord("HERe Is mine"));

// * No. 12
// * Algo: slice and splice
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.splice();
    for (let i = arr1.length-1; i >= 0; i--) {
        newArr.splice(n, 0, arr1[i]);
    }
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

// * No. 13
// * Algo: falsy bouncer
function bouncer(arr) {
    arr = arr.filter(element => {
        if (typeof element === "string" || typeof element === "number" || element !== 0) {
            return element;
        }
        return;
    });
    return arr;
}


console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// * No. 14
// * Algo: where do I belong
function getIndexToIns(arr, num) {
    arr = arr.sort();
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) pos++;
    }
    return pos;
}
console.log(getIndexToIns([5, 3, 20, 3], 5));

// * No. 15
// * Algo: mutations
function mutation (arr) {
    arr = arr.map(element => element.toLowerCase());
    let re = arr[1].split('');
    for (var i = 0; i < re.length; i++) {
        // * if just one character from re not in arr, then it return false immediately
        if (arr[0].indexOf(re[i]) === -1)
            return false;
    } 
    // * if all the characters in re was found in arr[0]
    return true;
}
console.log(mutation(["Hello", "helo"]));

// * No. 16
// * Algo: chunky monkey
// * using push slice
function chunkArrayInGroups(arr, size) {
    let arrTemp = [];
    for (let i = 0; i < arr.length; i+=size) {
        arrTemp.push(arr.slice(i, i+size));
        console.log("insert: ", arr.slice(i, i+size));
        console.log("Arr Temp Now: ", arrTemp);
    }
    return arrTemp;
}
// * using splice 
function chunkArray(arr, size) {
    let arrTemp = [];
    while (arr.length !== 0) {
        console.log("Arr length now: ", arr.length);
        arrTemp.push(arr.splice(0, size));
    }
    return arrTemp;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArray(["a","b","c","d","e"], 2));