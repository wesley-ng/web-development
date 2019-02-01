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