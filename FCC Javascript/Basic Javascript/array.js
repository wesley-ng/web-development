// * No. 30
// * Store multiple values in array
var myArray = ["food", 99999];

// * No. 31
// * Nest one array within another array
var myArray = [["money", "1 trillion"], ["world_peace", true]];

// * No. 32 
// * Access array data with indexes
var myArray = [50, 60, 70];
var myData = myArray[0];

// * No. 33
// * Modify array data with indexes
// * entries of array are mutable
var myArray = [18, 64, 99];
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

// * No. 34
// * Access multidimensional arrays with indexes
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

var myData = myArray[2][1]; // ? 8

// * No. 35
// * Manipulate arrays with push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // ? [["John", 23], ["cat", 2], ["dog", 3]]

// * No. 36
// * Manipulate arrays with pop()
var myArray = [
    ["John", 23],
    ["cat", 2]
];

var removedFromMyArray;
removedFromMyArray = myArray.pop(); // * ["cat", 2] 
// ? [["John", 23]]

// * No. 37 
// * Manipulate arrays with shift()
var myArray = [
    ["John", 23],
    ["cat", 2]
];

var removedFromMyArray;
removedFromMyArray = myArray.shift(); // ? ["cat", 2] 
// * [["John", 23]]

// * No. 38 
// * Manipulate arrays with unshift()
var myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.shift();
myArray.unshift(["Paul", 35]);
// ? [["Paul", 35], ["cat", 2]]

// * No. 39 
// * Shopping List
var myList = [
    ["Orange", 3],
    ["Apple", 2],
    ["Watermelon", 1],
    ["Pineapple", 1],
    ["Mango",3]
];