// * No. 73
// * Build js objects
var myDog = {
    "name": "Buddy",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};


// * No. 74
// * Accessing obj properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat; // ? ballcap
var shirtValue = testObj.shirt; // ? jersey

// * No. 75
// * Accessing obj properties with bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"]; // ? hamburger
var drinkValue = testObj["the drink"]; // ? water

// * No. 76
// * Accessing obj properties with variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// * No. 77
// * Updating obj properties
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

// * No. 78
// * Add new properties to a js object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "bow-wow";
console.log(myDog);

// * No. 79
// * Delete properties from a js obj
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;

// * No. 80
// * Using obj for lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    }; 
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

// * No. 81
// * Testing obj for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp) === true)
        return myObj[checkProp];
    return "Not Found";
}
console.log(checkObj("house"));

// * No. 81
// * Manipulating complex objects
var myMusic = [
    // ? myMusic[0]
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD","8T","LP"
        ],
        "gold": true
    },
    // ? myMusic[1] 
    {
        "artist": "HiVi",
        "title": "Satu Satunya",
        "release_year": 2018,
        "formats": [
            "CD", 
            "8T",
            "LP"
        ],
        "gold": true
    }
];

// * No. 82 
// * Accessing Nested obj
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// * No. 83
// * Accessing nested arrays
var myPlants = [ 
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

// * No. 84
// * Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// ? Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// ? First
function updateRecords(id, prop, value) {
    if (prop === "tracks" && value !== "") {
        if (collection[id][prop]) {
            collection[id][prop].push(value);
        }
        else {
            collection[id][prop] = [value];
        }
    } else if (value !== "") {
        collection[id][prop] = value;
    } else {
        delete collection[prop];
    }
}
// ? Second
function updateRecordsX(id, props, value) {
    if (props === "tracks" && !collection[id].hasOwnProperty("tracks")) {
        collection[id][props] = [value];
    } 
    else if (props === "tracks" && value !== "") {
        collection[id][props].push(value);
    } 
    else if (props !== "tracks" && value !== "") {
        collection[id][props] = value;
    }
    else if (value == "") {
        delete collection[id][props];
    }
}
// ? Third 
function updateRecordsY(id, props, value) {
    if (value !== "") {
        if (props === "tracks") {
            if (!collection[id].hasOwnProperty("tracks")) {
                collection[id][props] = [value];
            } else {
                collection[id][props].push(value);
            }
        } else {
            collection[id][props] = value;
        }
    } else {
        delete collection[id][props];
    }
    return collection;
}

updateRecordsY(1245, "tracks", "Meow");
updateRecordsY(5439, "artist", "ABBA");
updateRecordsY(2468, "artist", "");
// collection["5439"].artist = "ABBA";
console.log(collection);
