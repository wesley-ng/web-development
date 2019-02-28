// * No. 19
// * OOP: set the child's prototype to an instance of the parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat() {
        console.log("nom nom nom");
    }
};

function Dog(name) {
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
let golden = new Dog("Golden");
golden.eat();
console.log(golden.name);

// * No. 20
// * OOP: reset an inherited constructor property
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird(); 
console.log(duck.constructor); // ? It will return Animal since Bird is the instance of Animal, and so is duck
Bird.prototype.constructor = Bird; // * solution is to set Bird's constructor to Bird object 
Dog.prototype.constructor = Dog;
console.log(duck.constructor); 
console.log(golden.constructor);

// * No. 21
// * OOP: add methods after inheritance
function Hewan() { }
Hewan.prototype.makan = function () {
    console.log("nom nom nom");   
};

function Sapi () { }
Sapi.prototype = Object.create(Hewan.prototype);
Sapi.prototype.constructor = Sapi;
Sapi.prototype.suara = function (){
    console.log("moooooooo");
};

let wagyu = new Sapi();
console.log(wagyu.constructor);
wagyu.makan();
wagyu.suara();

// * No. 22
// * OOP: override inherited methods
function Burung () { }
Burung.prototype.terbang = function () {
    console.log("Saya terbang!");  
};

function Penguin() { }
Penguin.prototype = Object.create(Burung.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.terbang = function () {
    return "Sayang sekali, saya burung yang tidak bisa terbang";
};

let kanari = new Burung();
let penguin = new Penguin();
kanari.terbang();
console.log(penguin.terbang());

// * No. 23
// * OOP: use a mixin to add common behavior between unrelated obj
let burung = {
    name: "Donald",
    numLegs: 2
};

let kapal = {
    name: "Musashi",
    type: "Kapal Induk"
};

let glideMixin = function (obj) {
    obj.glide = function () {
      console.log(this.name + " Gliding, yeah");  
    };
};

glideMixin(kapal); // ? kapal can access method in glideMixin now
kapal.glide();
glideMixin(burung);
burung.glide();

// * No. 24
// * OOP: use closure to protect props within an obj from being modified externally
function Duck() {
    let hatchedEgg = 10; // ? private property (using let instead of this)
    let weight = 15;
    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
    this.getWeight = () => {
        return weight;
    };
}
let ducky = new Duck();
console.log(ducky.getHatchedEggCount());
console.log(ducky.getWeight());

// * No. 25
// * OOP: understand the immediately invoked function expression (IIFE)
// * means the function should be anonymous
(function() {
    console.log("Sarang yang nyaman telah selesai dibuat");
})();

// * No. 26
// * OOP: use an IIFE to create module
// * example
// ? Normal
function danceMixin(obj) {
    obj.dance = function () {
        console.log("Dance till drop.");
    };
}

function flyMixin(obj) {
    obj.fly = function () {
        console.log("I believe I could fly");
    };
}
// ? IIFE
let motionModule = (function() {
    return {
        danceMixin: function (obj) {
            obj.dance = function () {
                console.log("Dance till sunrise");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Yes I could fly");  
            };
        }
    };
})(); // * the 2 parentheses cause the function to be immediately invoked

let bebek = {
    name: "Donald",
    numLegs: 2
};

motionModule.danceMixin(bebek);
bebek.dance();
motionModule.flyMixin(bebek);
bebek.fly();

let funModule = (function() {
    return {
        isCuteMixin: function (object) {
            object.isCute = function () {
                return true;
            };
        },
        singMixin: function (object) {
            object.sing = () => {
                console.log("Singing to an awesome tune");
            };
        }
    };
})();

funModule.isCuteMixin(bebek);
console.log(bebek.isCute());
funModule.singMixin(bebek);
bebek.sing();