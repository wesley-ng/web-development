// * Create a database 
let database = [
    {
        username: "wesley",
        password: "goodmorning"
    },
    {
        username: "anne",
        password: "wesley"
    },
    {
        username: "xanders",
        password: "007"
    }
];

let newsFeed = [
    {
        username: "anne",
        timeline: "I love you, Wesley"
    }, 
    {
        username: "kathie",
        timeline: "Friendship lasts forever"
    }
];

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i]["username"] && pass === database[i]["password"]) {
            return true;
        } 
    }
    return false;
}

function signIn(user, pswd) {
    if (isUserValid(user, pswd)) {
        console.log(newsFeed    );
    } else {
        alert("Wrong username and password!");
    }
}

let userNamePrompt = prompt("Enter your username: ");
let passwordPrompt = prompt("Enter your password: ");

signIn(userNamePrompt, passwordPrompt);