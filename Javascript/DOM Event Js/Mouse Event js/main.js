// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
    itemOne.style.width = ''
    itemTwo.style.backgroundColor = ''
    itemThree.innerHTML = 'The mouse must leave the box to change the text'
    itemFive.hidden = true;
};
resetButton.onclick = reset;

// Write code for the first list item
// * event handler when the mouse hovers over
itemOne.onmouseover = () => {
    itemOne.style.width = "450px";
};

// Write code for the second list item
// * event handler when the mouse is released over the element
itemTwo.onmouseup = () => {
    itemTwo.style.backgroundColor = "tomato";
};


// Write code for the third list item
itemThree.onmouseout = () => {
    itemThree.innerHTML = "The mouse has left the element.";
};

// Write code for the fourth list item
itemFour.onmousedown = () => {
    itemFive.style.display = 'block';
}