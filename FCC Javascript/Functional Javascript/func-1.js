// * No. 1
// * FP: learn about functional programming
// ? prepare tea 
// ? return green tea
const prepareTea = () => 'greenTea';

// ? amount of tea to get
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cup = 1; cup <= numOfCups; cup++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);

// console.log(tea4TeamFCC);

// * No. 2
// * FP: understand functional programming terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => "blackTea";

const getTeas = (prepareTea, numOfCups) => {
    const teaCups = [];
    for (let cup = 1; cup <= numOfCups; cup++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTeas(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeas(prepareBlackTea, 13);


// * No. 3
// * FP: understand the hazards of using imperative code
// ? tabs is an array of titles of each site open within the new window
var Window = function(tabs) {
    this.tabs = tabs; // ? keep a record of the array inside the object
};

// ? when two windows joined into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// ? when a new tab opened at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // ? let's open a new tab for now
    return this;
};

// ? when a tab closed
Window.prototype.tabClose = function(index) {
    var tabsBeforeIndex = this.tabs.splice(0, index); // * get tabs before the tab
    var tabsAfterIndex = this.tabs.splice(index); // * get tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // * join them together
    return this;
};

// ? create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow = new Window(['Netflix','YouTube','Vimeo','Vine']);

// ? perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen()
                    .join(videoWindow.tabClose(2))
                    .join(workWindow.tabClose(1).tabOpen()); // ? open a new tab
// alert(finalTabs.tabs);
// console.log(finalTabs);

// * No. 4
// * FP: avoid mutations and side effects using functional programming
var fixedValue = 4;

function incrementer() {
    return fixedValue+1;
} 

var newValue = incrementer();
console.log(fixedValue);
console.log(newValue);

// * No. 5
// * FP: pass arguments to avoid external dependence in a function
var fixedValue = 4;
function incrementer(fixedValue) {
    return fixedValue + 1;
}
var newValue = incrementer(fixedValue);
console.log(fixedValue);

// * No. 6
// * FP: refactor global variables out of functions
var bookList = ["The Hound of the Baskervilles", "On the Electrodynamics of Moving Bodies", "Philosophies Naturalis Principia Mathematica", "Disquisitiones Arithmetics"];

function add(bookList, bookName) {
    var newArr = [...bookList];
    newArr.push(bookName);
    return newArr;
}

function remove(bookList, bookName) {
    var newArr = [...bookList];
    var index = newArr.indexOf(bookName);
    if(index >= 0) {
        newArr.splice(index, 1);
    }
    return newArr;
}
// ? simpler
function add1(bookList, bookName) {
    return [...bookList, bookName];
}

function remove1(bookList, bookName) {
    if (bookList.indexOf(bookName) >= 0) {
        // ? return a new array without a book with the same name as book name
        return bookList.filter((item) => item !== bookName);
    }
}

var newBookList = add1(bookList, 'A Brief History of Time');
console.log(newBookList);
var newerBookList = remove1(bookList, 'On the Electrodynamics of Moving Bodies');
console.log(newerBookList);
var newestBookList = remove1(add1(bookList, 'A Brief History of Time'), 'On the Electrodynamics of Moving Bodies');
console.log(newestBookList);
console.log(bookList);

// * No. 7
// * FP: use the map to extract data from an array
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// var rating = [];
// for (var i = 0; i < watchList.length; i++) {
//     rating.push({title: watchList[i]["Title"], 
//     rating: watchList[i]["imdbRating"]});
// }

var rating = watchList.map((item) => ({title: item["Title"], rating: item["imdbRating"]}));

console.log(rating);

// * No. 8
// * FP: implement map on a prototype
var s = [23,65,98,5];
Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        // * callback function
        newArray.push(callback(this[i]));
    }
    // ? is simpler
    // this.forEach(itemInArray => newArray.push(callback(itemInArray)));
    return newArray;
};



var new_s = s.myMap(function(item){
    return item * 2;
});

console.log(new_s);

// * No. 9
// * FP: use the filter method to extract data from an array
var filteredList = watchList.map((item) => ({ title: item["Title"], rating: item["imdbRating"] })).filter((item) => item.rating >= 8.0);

console.log(filteredList);

// * No. 10
// * FP: implement the filter method on a prototype
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for (var i = 0; i <= this.length; i++) {
        if (callback(this[i])){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});

console.log(new_s);

// * No. 11
// * FP: return part of an array using the slice method
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
var sliceRes = sliceArray(inputAnim, 1, 3);
console.log(sliceRes);

// * No. 12
// * FP: remove elements from an array using slice instead of splice
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
var spliceRes = nonMutatingSplice(inputCities);
console.log(inputCities);
console.log(spliceRes);