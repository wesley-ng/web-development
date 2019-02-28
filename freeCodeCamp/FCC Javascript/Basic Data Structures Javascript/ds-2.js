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

// * No. 16
// * DS: use the delete keyword to remove object properties
let fruits = objCopyAssign(foods);
delete fruits.oranges;
delete fruits.plums;
delete fruits.strawberries;
console.log(fruits);

// * No. 17
// * DS: check if an object has a property
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    }, 
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    if (obj.hasOwnProperty("Alan") && obj.hasOwnProperty("Jeff") && obj.hasOwnProperty("Sarah") && obj.hasOwnProperty("Ryan")) {
        return true;
    }
    // * minimum version 
    // ? if (obj.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) {
    // ?   return true;
    // ?}
    return false;
}

console.log(isEveryoneHere(users));

// * No. 18
// * DS: iterate through the keys of an object with a for ... in statement
let members = objCopyIteration(users);
members.Alan.online = false;
members.Sarah.online = false;
// console.log(members);

function countOnline(obj) {
    let count = 0;
    // ? when you use variable as property name, you should use bracket, not dot. Why? Because we try to access user object inside members object which does not exist, meanwhile bracket notation let you to access it
    for (let user in obj) {
        if (obj[user].online === true) {
            count ++;
        }
    }
    return count;     
}
// console.log(members.Alan);
console.log(countOnline(members));

// * No. 19
// * DS: generate an array of all object keys with object.keys()
let party = objCopyJson(members);
// console.log(party);
function getArrayOfUsers(obj) {
    let arrUsers = [];
    for (let user in obj) {
        arrUsers.push(user);
        arrUsers.push(Object.keys(obj[user]));
    }
    return arrUsers;
}

console.log(getArrayOfUsers(party));

// * No. 20
// * DS: modify an array stored in an object
let player = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: [
            "Sam",
            "Kira", 
            "Tomo"
        ],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA"
        }
    }
};

function addFriend(userObj, friend) {
    let frienda = userObj.data.friends;
    frienda.push(friend); 
    return frienda;
}

console.log(addFriend(player, "Peter"));
// console.log(player);