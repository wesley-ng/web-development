function newStyle() {
    let newColor = '';
    let newFont = '';
    let randNum = Math.floor(Math.random()*7);
    switch(randNum) {
        case 0: newColor = 'lightsalmon'; newFont = 'Times New Roman'; break;
        case 1: newColor = 'lime'; newFont = 'Florence, cursive'; break;
        case 2: newColor = 'black'; newFont = 'Verdana'; break;
        case 3: newColor = 'lightskyblue'; newFont = 'Courier New'; break;
        case 4: newColor = 'crimson'; newFont = 'Georgia'; break;
        case 5: newColor = 'tomato'; newFont = 'Palatino'; break;
        case 6: newColor = 'maroon'; newFont = 'Impact'; break;
    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
    elem.style.fontSize = "4em";
}   