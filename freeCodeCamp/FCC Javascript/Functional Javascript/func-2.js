// * No. 13
// * FP: combine two arrays using the concat method
function nonMutatingConcat (original, attach) {
    return original.concat(attach);
}   
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

// * No. 14
// * FP: add elements to the end of an array using concat instead of push
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
var first = [1,2,3];
var second = [4,5];
console.log(nonMutatingPush(first, second));

// * No. 15
// * FP: use the reduce method to analyze data
var watchList = [{
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
// ? well I make this more complicated hahaha
var filteredNolan = watchList.map((item) => {
    return ({film: item["Title"],
             director: item["Director"],
             rating: Number(item["imdbRating"])});
}).filter((item) => {
    return item["director"] === "Christopher Nolan";
});

// ? Thou I just wanna see it in a clearer way
var mapScore = filteredNolan.map((item) => item["rating"]);

console.log(filteredNolan);
console.log(mapScore);

var averageRating = mapScore.reduce((accumulator, currentRating) => {
    return (accumulator + currentRating);
}) / mapScore.length;

console.log(averageRating);

// * No. 16
// * FP: sort an array alphabetically using the sort method
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => a > b);
    // return arr.sort();
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));

// * No. 17
// * FP: return a sorted array without changing the original array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // ? return [...arr].sort();
    return [].concat(arr).sort();
}
console.log(nonMutatingSort(globalArray));

// * No. 18
// * FP: split a string into an array using the split method
function splitify(str) {
    // ? match non-alphanumeric characters
    return str.split(/\W/);
}

console.log(splitify("Hello World, I-am code"));

// * No. 19
// * FP: combine an array into a string using the join method
function sentensify(str) {
    return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

// * No. 20
// * FP: apply functional programming to convert strings to URL slugs
var globalTitle = " Winter    Is    Coming";
function urlSlug(title) {
    return title.split(/\s+/).map((word) => word.toLowerCase()).filter(word => word).join("-");
}
var winterComing = urlSlug(globalTitle);
console.log(winterComing);

// * No. 21
// * FP: use the 'every' method to check that every element in an array meets a criteria
function checkPositive(arr) {
    return arr.every(element => {
        return element > 0;
    });
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// * No. 22 
// * FP: use the 'some' method to check that any elements in an array meet a criteria
function checkPos(arr) {
    return arr.some(item => item > 0);
}
console.log(checkPos([1,2,3,-4,5]));

// * No. 23
// * FP: introduction to currying and partial application
// ? the arity of a function is the number of arguments it requires.
// ? currying a function means to convert a function of N-arity into N-functions of arity 1.
// ? in other words, it restructures a function so it takes one argument,then returns another function that takes the next argument, and so on.
// ? eg:
function add(x) {
    return function(y){
        return function(z){
            return x + y + z;
        };   
    };
}
console.log(add(10)(20)(30));
// ? partial call
var partialFn = add(10);
console.log(partialFn(20)(30));