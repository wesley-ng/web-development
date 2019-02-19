let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

// generate position of bot door
let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()*numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else { 
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }

};

// check if the door has been clicked or not
let isClicked = (door) => {
    // if door src is still the same like the previous, then it has not been clicked
    if (door.src === closedDoorPath) {
        return false;
    }
    // if the door has been clicked
    return true;
};

// gameover
let gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
};

// check if the door has bot or not
let isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }
    return false;
};

// play
let playDoor = (door) => {
    // every door clicked will result to the remaining closed door
    numClosedDoors--;
    // if all the doors have been opened which mean we don't find bot
    if (numClosedDoors === 0) {
        gameOver('win');
    }
    // if we find a bot when the closed door is not 0
    else if(isBot(door)){
        gameOver();
    }
};

// play the game again when the game is finished or over
startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

// reset
let startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

// id door1 onclick
door1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
};

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
};
door3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
};

// run random door generator
randomChoreDoorGenerator();