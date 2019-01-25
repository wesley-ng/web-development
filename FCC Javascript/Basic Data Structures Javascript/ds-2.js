// * No. 11
// * DS: iterate through all an array's items using for loops
function filteredArray(arr, elem) {
    let newArrx = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArrx.push(arr[i]);
        }
    }
    return newArrx;
}
console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 2],
    [3, 13, 26],
    [19, 3, 9]
], 3));


// * No. 12
// * DS: create complex multi-dimensional arrays
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        ["deep"],
        [
            ["deeper"],
            [
                ["deepest"]
            ]
        ]
    ]
];

// * No. 13
// * DS: add key-value pairs to js objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

// * No. 14
// * DS: modify an object nested within an object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

// ? Sidenotes
// ? Copying object with iteration
function objCopyIteration(obj) {
    let newObj = {};
    for (let props in obj) {
        if(obj.hasOwnProperty(props)) {
            newObj[props] = obj[props];
        }
    }
    return newObj;
} 
// ? Copying object with JSON
function objCopyJson(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// ? Copying object with assign()
function objCopyAssign(obj) {
    return Object.assign({}, obj);
}

// * No. 15
// * DS: access property names with bracket notation
let foodies = objCopyIteration(foods);
console.log(foodies);

function checkInventory(scannedItem) {
    return foodies[scannedItem];
}
console.log(checkInventory("apples"));

