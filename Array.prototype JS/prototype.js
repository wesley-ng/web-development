// * Array.map()
Array.prototype.mapFn = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
};

console.log(
    [1,2,3].mapFn(element => element * 2)
);