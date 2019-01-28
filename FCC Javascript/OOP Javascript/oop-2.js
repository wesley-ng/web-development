// * No. 11
// * OOP: iterate over all properties
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let doggo = new Dog("Snoop");
let ownProps = [];
let prototypeProps = [];

for (let prop in doggo) {
    if (doggo.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
    else {
        prototypeProps.push(prop);
    }
}

// * No. 12
// * OOP: understand the constructor property
function Doggo(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Doggo) return true;
    else return false;
}
let meg = new Doggo("Meg");
console.log(joinDogFraternity(meg));

// * No. 13
// * OOP: change the prototype to a new obj
function Dogge(name) {
    this.name = name;
}
Dogge.prototype = {
    numLegs: 4,
    eat() {
        return "Miep miep miep";
    },
    describe() {
        return `${this.name} is a fury, kawaii creature`;
    }
};

let bert = new Dogge("Bert");
console.log(bert.describe());
// * No. 14
// * OOP: remember to set the constructor property when changing the prototype
function Dogs(name) {
    this.name = name;
}

Dogs.prototype = {
    constructor: Dogs,
    numLegs: 4,
    eat() {
        console.log("nom nom");
    },
    describe() {
        console.log("My name is "+ this.name);
    }
};
let bianca = new Dogs("Bianca");
console.log(bianca);

// * No. 15
// * OOP: understand where an object's prototype comes from
function Doggie(name) {
    this.name = name;
}
let golden =  new Doggie("Biggie");
console.log(Doggie.prototype.isPrototypeOf(golden));

// * No. 16
// * OOP: understand the prototype chain
// * Object is the supertype of all obj in JS
// * Like hasOwnProperty method which is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by golden. This is an example of the prototype chain
console.log(Object.prototype.isPrototypeOf(Doggie.prototype));

// * No. 17
// * OOP: use inheritance so you don't repeat yourself
function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat () {
        console.log("nom nom nom");
    }
};

// * No. 18
// * OOP: inherit behaviors from a Supertype
// * use the previous Supertype which is Animal
let duck = new Animal();
let beagle = new Animal();
duck.eat();
beagle.eat();