// * No. 85
// * Iterate with js While loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

// * No. 86
// * Iterate with js For loops
var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

// * No. 87
// * Iterate odd numbers with for loop
var myArray = [];
for (var i = 1; i < 10; i+=2) {
    myArray.push(i);
}

// * No. 88 
// * Count backwards with for loop
var myArray = [];
for (var i = 9; i > 0; i-=2) {
    myArray.push(i);
}

// * No. 89
// * Iterate through an array with for loop
var myArray = [2,3,4,5,6];
var total = 0;
for (var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

// * No. 90
// * Nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

// * No. 91
// * Iterate with js do ... while loop
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 11);

// * No. 92
// * Profile lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    }, 
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        // check if firstname is in the obj
        if (contacts[i].firstName === name) {
            // check if the corresponding name has the prop
            if (contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            } else {
                return "No such property";
            } 
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Sherlock", "likes"));

