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