// ? create a new element and append it as a last child (like a list)
var li = document.createElement('li');
li.id = "oaxaca";
li.innerHTML = "Oaxaca, Mexico";
document.getElementById('more-destinations').appendChild(li);

// ? remove element 
let cape_town = document.getElementById('capetown');
console.log(cape_town);
document.getElementById('more-destinations').removeChild(cape_town);

// ? hide element 
let jackson_hole = document.getElementById('jacksonhole');
console.log(jackson_hole);
jackson_hole.hidden = true;