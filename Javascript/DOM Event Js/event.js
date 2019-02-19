let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// event handler
readMore.onclick = () => {
    moreInfo.style.display = "block";
};

// * Section Container-2
let viewMascot = document.getElementById('view-button');
let closeMascot = document.getElementById('close-button');

let changeText = () => {
    viewMascot.innerHTML = 'Hello, Dunia!';
};
let returnText = () => {
    viewMascot.innerHTML = "View";
};

// ? function to show mascot
viewMascot.onclick = () => {
    margo.style.display = 'block';
    closeMascot.style.display = 'block';
    // changeText();
};

closeMascot.onclick = () => {
    margo.style.display = 'none';
    closeMascot.style.display = 'none';
    // returnText();
};

// ? other way
viewMascot.addEventListener('click', changeText);
closeMascot.addEventListener('click', returnText);

