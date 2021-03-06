// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
    return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function () {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    // target is use to access the property of the event that we are going to pass as an argument
    event.target.style.backgroundColor = randomColor;
};
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;