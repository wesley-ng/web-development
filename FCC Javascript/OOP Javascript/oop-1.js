function objCopy(obj) {
    let newObj = {};
    for (let props in obj) {
        newObj[props] = obj[props];
    }
    return newObj;
}
// * No. 1
// * OOP: create a basic oop structure
let dog = {
    name: "Ren",
    numLegs: 4
};

// * No. 2
// * OOP: use dot notation to access the properties of an obj
let dog_2 = objCopy(dog);
console.log(dog_2.name);
console.log(dog_2.numLegs);

// * No. 3
// * OOP: create a method on an obj
let dog_3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return `The name of the dog is ${dog_3.name} and it has ${dog_3.numLegs} legs.`;
    }
};
console.log(dog_3.sayLegs());

// * No. 4
// * OOP: make code more reusable with the this keyword
let dog_4 = {
    name: "Gukguk",
    numLegs: 4,
    sayLegs() {
        return `${this.name} has ${this.numLegs} legs.`;
    }
};
console.log(dog_4.sayLegs());

// * No. 5
// * OOP: define a constructor function
function Dog() {
    this.name = "Dong Dong";
    this.color = "Cream";
    this.numLegs = 4;
}

// * No. 6
// * OOP: use a constructor to create obj
let dog_5 = new Dog();
console.log(dog_5);

// * No. 7
// * OOP: extend constructors to receive arguments
function Doggo(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let dog_6 = new Doggo("Alai", "Golden");
console.log(dog_6);

// * No. 8
// * OOP: verify an object's constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
console.log(
    myHouse instanceof House
);

// * No. 9
// * OOP: understand own properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}
console.log(ownProps);

// * No. 10
// * OOP: use prototype properties to reduce duplicate code
function Dogge(name) {
    this.name = name;
}
Dogge.prototype.numLegs = 4;
let beagle = new Dogge("Scoopy");
console.log(beagle.numLegs);