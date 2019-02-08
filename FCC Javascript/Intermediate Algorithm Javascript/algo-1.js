// * No. 1
// * Algo: sum all numbers in a range
function sumAll(arr) {
    arr.sort((a,b) => a - b);
    let total = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([5, 10]));

// * No. 2
// * Algo: diff two arrays
// * first
function diffArray(arr1, arr2) {
    let newArr = [];

    function swappedCompare(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }
    swappedCompare(arr1, arr2);
    swappedCompare(arr2, arr1);
    return newArr;
}
// * second
function diffeArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    newArr = newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
    return newArr;
}

console.log(diffeArray([1,2,3,5], [1,2,3,4,5]));

// * No. 3
// * Algo: seek and destroy
function destroyer(arr) {
    let args = [...arguments];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item);
}

// ? advanced solution
function destroyee(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}

console.log(destroyee([1,2,3,1,2,3,4], 2, 3, 4));

// * No. 5
// * Algo: spinal tap case
function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[^0-9a-zA-Z]/g, " ").toLowerCase().split(" ").join("-");
}
// console.log("this_IsSpinalTap A".replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_|-/, " ").toLowerCase().split(" "));
console.log(spinalCase("ThisIs Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));

// * No. 6
// * Algo: pig latin
function translatePigLatin(str) {
    str = str.toLowerCase();
    if (str[0].match(/[aiueo]/g)) {
        str += "way";
    } else if (!str.match(/[aiueo]/g)) {
        str += "ay";
    } else {
        str = str.replace(/([^aiueo]*)([aiueo])(\w+)/, "$2$3$1ay");
    }
    return str;
}
console.log(translatePigLatin("agalzax"));
console.log(translatePigLatin("galazax"));
console.log(translatePigLatin("glzx"));

// * No. 7
// * Algo: search and replace
function myReplace(str, before, after) {
    if (str.search(before) !== 1) {
        if (before.match(/^[A-Z]/)) {
            return str.replace(before, after.replace(/^[a-z]/, u => u.toUpperCase()));
        }
        return str.replace(before, after);
    }
}
console.log(myReplace("Let us go to the Store", "Store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

// * No. 8
// * Algo: dna pairing
function pairElement(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'A': arr.push(["A","T"]); break;
            case 'T': arr.push(['T','A']); break;
            case 'C': arr.push(['C','G']); break;
            case 'G': arr.push(['G','C']); break;
        }
    }
    return arr;
}
// ? object solution
function DNAPairing (str) {
    // constanta of object pairs
    const pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
    // split string
    let arr = str.split("");
    return arr.map(item => [item, pairs[item]]);
}

console.log(pairElement("ATCGA"));
console.log(DNAPairing("ATCGA"));

// * No. 9
// * Algo: missing letters
function fearNotLetter(str) {
    const alpha = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alphax = alpha.splice(alpha.indexOf(str[0]), str.length+1);
    str = str.split("");
    if (str.length !== alphax.length) {
        return alphax.filter(item => {
            return (!str.includes(item));
        }).join('');
    }
    return;
}

// ? Other method
function fearNoLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        // try to add code with i to check if it matches or not
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code-1);
        }
    }
    return;
}

console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNoLetter("abce"));

// * No. 10
// * Algo: sorted union
function uniteUnique(arr) {
    let args = [...arguments];
    let newArr = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (newArr.includes(args[i][j]) === false) {
                newArr.push(args[i][j]);
            }
        }
    }
    return newArr;
} 

function unitingUnique() {
    let arr = [];
    let args = [...arguments];
    for (let i = 0; i < args.length; i++) {
        arr = arr.concat(args[i]);
    }
    arr = arr.filter((item, pos) => {
        console.log(item, pos);
        return arr.indexOf(item) === pos;
    });
    return arr;
}

console.log(unitingUnique([1,2], [2,2,[3]], [3,4]));
console.log(unitingUnique([1, 3, 2], [1, [5]], [2, [4]]));

// * No. 11
// * Algo: convert html entities
function converHTML(str) {
    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": "&apos;"
    };
    str = str.split("");
    return str.map(item => entities[item] || item).join("");
}   

console.log(converHTML("Dolce & Gabana"));
