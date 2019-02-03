// * No. 1
// * Algo: sum all numbers in a range
function sumAll(arr) {
    arr.sort((a,b) => a - b);
    let total = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }
    return total;
}

console.log(sumAll([5, 10]));

// * No. 2
// * Algo: diff two arrays
// * first
function diffArray(arr1, arr2) {
    let newArr = [];

    function swappedCompare(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }
    swappedCompare(arr1, arr2);
    swappedCompare(arr2, arr1);
    return newArr;
}
// * second
function diffeArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    newArr = newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
    return newArr;
}

console.log(diffeArray([1,2,3,5], [1,2,3,4,5]));

// * No. 3
// * Algo: seek and destroy
function destroyer(arr) {
    let args = [...arguments];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => Boolean);
}
console.log(destroyer([1,2,3,1,2,3,4], 2, 3, 4));