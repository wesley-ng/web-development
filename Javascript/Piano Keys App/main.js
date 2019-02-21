// * Keys and notes are stored in keys variable
const keys = [
    'c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'
];
const notes = [];
keys.forEach(function(key) {
    notes.push(document.getElementById(key));
});

// * Function that change the color of the keys
const keyPlay = () => {
    event.target.style.backgroundColor = '#12cc34';
};

const keyReturn = () => {
    event.target.style.backgroundColor = '';
};

// * function with event handler properties
const assignEvent= (note) => {
    note.onmousedown = () => keyPlay();
    note.addEventListener('mouseup', keyReturn);
};

// * loop that runs the array elements through the function
// * means that every note in notes is passed to the eventAssignment function, hence eventAssignment(note)
// ? basically the same with notes.forEach(eventAssigment)
notes.forEach(note => assignEvent(note));

// * variables to store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');


// * this variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// * These statements hidding all the progress buttons, but the frist one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// * event handler for the first progress button
nextOne.onclick = () => {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
}; 

// * event handler for the second progress button
nextTwo.onclick = () => {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
    lastLyric.style.display = 'inline-block';
};

// * event handler for the third progress button
nextThree.onclick = () => {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU';
    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    lastLyric.style.display = 'none';
};


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
};