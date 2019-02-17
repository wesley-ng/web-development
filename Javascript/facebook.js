// * Create a database 
let database = [
    {
        username: "wesley",
        password: "goodmorning"
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

function signIn(user, pswd) {
    if (user === database[0]["username"] && pswd === database[0]["password"]) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

let userNamePrompt = prompt("Enter your username: ");
let passwordPrompt = prompt("Enter your password: ");

signIn(userNamePrompt, passwordPrompt);