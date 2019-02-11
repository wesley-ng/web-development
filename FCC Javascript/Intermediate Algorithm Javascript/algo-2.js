// * No. 12
// * Algo: sum all odd fibonacci numbers

function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let result = 0;
    while (curr <= num) {
        console.log(curr);
        console.log(prev);
        if (curr % 2 !== 0) {
            console.log(curr);
            result += curr;
            console.log(result);
        }
        curr += prev;
        prev = curr - prev;
    }
    return result;
}

function sumaFib(num) {
    let prev = 0;
    let curr = 1;
    let arr = [];
    while (curr <= num) {
        arr.push(curr);
        curr += prev;
        prev = curr - prev;
    }
    return arr.reduce((accumulator, current) => {
        console.log(current);
        console.log(accumulator);
        return accumulator + current * (current % 2); // either 0 or 1
    });
}
console.log(sumaFib(10));

// * No. 13
// * Algo: sum all primes
function sievePrimes(num) {
    let sieve = [], primes = [];
    for (let i = 2; i <= num; i++) {
        if (!sieve[i]) {
            primes.push(i);
            console.log(i);
            for (j = i << 1; j <= num; j+= i) {
                console.log(i);
                sieve[j] = true;
                console.log(j);
            }
        }
    }
    return primes;
}

console.log(sievePrimes(10));

function sumPrimes(num) {
    let prime = sievePrimes(num);
    return prime.reduce((acc,curr) => acc + curr);
}

// ? Simpler
function sumPrime(num) {
    let sieve = [];
    let prime = 0;
    for (let i = 2; i <= num; i++) {
        if (!sieve[i]) {
            prime += i;
            for (let j = i << 1; j <= num; j+=i) {
                sieve[j] = true;
            } 
        }
    }
    return prime;
}

console.log(sumPrime(10));
console.log(sumPrimes(977));

// * No. 14
// * Algo: smallest common multiple
function smallestCommon (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    function gcd(a, b) {
        return !b ? a: gcd(b, a%b);
    }

    function lcm(a,b) {
        return (a * b) / gcd(a, b);
    }
    let candidate = min;
    for (let i = min; i <= max; i++) {
        candidate = lcm(i, candidate);
        console.log(candidate);
    }
    return candidate;

} 

console.log(smallestCommon([1,8]));

// * No. 15
// * Algo: drop it
function dropElements(arr, func) {
    // * when the number doesn't fulfill the condition
    while(arr.length !== 0 && func(arr[0]) === false) {
        arr.shift();
    }
    return arr;
}
console.log(dropElements([1,2,1,2,3,4], function(n) {return n >= 2;}));

// * No. 16
// * Algo: steamroller
function steamrollArray(arr) {
    return arr.reduce((flat, toFlat) => {
        console.log(flat);
        console.log(toFlat);
        return flat.concat(Array.isArray(toFlat) ? steamrollArray(toFlat) : toFlat);
    }, []);
}
console.log(steamrollArray(["z", ["a"], [["b"]]]));

// * No. 17
// * Algo: binary agents
function binaryToChar(str) {
    return String.fromCharCode(parseInt(str,2));
}
function binaryAgent(str) {
    let biner = str.split(" ");
    let utf = [];
    for (let i = 0; i < biner.length; i++) {
        utf.push(binaryToChar(biner[i]));
    }
    return utf.join("");
    // return String.fromCharCode(...str.split(" ").map(function(char){return parseInt(char, 2)}))
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// * No. 18
// * Algo: everything be true
// * falsy or truthy
function truthCheck(collection, pre) {
    return collection.every(obj => {
        return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
    });
    // ? return collection.every(obj => obj[pre]);
}

console.log(truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex"));

// * No. 19
// * Algo: arguments optional
function addTogether() {
    let arg = [...arguments];

    function checkNum (num) {
        if (typeof num !== 'number') return undefined;
        else return num;
    }

    if (arg.length > 1) {
        let a = arg[0];
        let b = arg[1];
        if (checkNum(a) === undefined || checkNum(b) === undefined) {
            return undefined; 
        } 
        return a + b;
    }

    if (arg.length === 1) {
        let c = arg[0];
        if (checkNum(c) === undefined) {
            return undefined;
        } else {
            return function(d) {
                if (checkNum(d) === undefined) {
                    return undefined;
                } else {
                    return c + d;
                }
            };
        }
    }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
let num = addTogether(2);
console.log(num(3));

// * No. 20
// * Algo: make a person
let Person = function(firstAndLast) {
    let name = firstAndLast.split(" ");
    this.getFullName = function() {
        return name.join(" ");
    };
    this.getFirstName = function() {
        return name[0];
    };
    this.getLastName = function() {
        return name[1];
    };
    this.setFirstName = function(first) {
        name[0] = first;
    };
    this.setLastName = function(last) {
        name[1] = last;
    };
    this.setFullName = function(firstAndLast) {
        name = firstAndLast.split(" ");
    };
};

let bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName('Haskell');
console.log(bob.getFirstName());
bob.setLastName("Rossy");
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFullName('Wesley Huang');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);

// * No. 21
// * Algo: map debris
function orbitalPeriod(arr) {
    
    function orbitalEquation(avgAlt) {
        const GM = 398600.4418; 
        const earthRadius = 6367.4447;
        const PI = Math.PI;
        return Math.round(2 * PI * (Math.sqrt(
            Math.pow(earthRadius + avgAlt, 3) / GM
        )));
    }

    arr = arr.map(obj => {
        return {"name": obj.name, "orbitalPeriod": orbitalEquation(obj.avgAlt)};
    });
    return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}]));