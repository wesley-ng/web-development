// * Cash Register
// * design a cash register drawer that accepts purchase as the first argument (price), payment as second argument (cash), and cash-in-drawer (cid) as the third argument
// * cid is a 2D array
// * checkCashRegister() should return an object with a status key and a change key
/*

    ? return {
        * status: "INSUFFICIENT_FUNDS",
        * change: []
    } if cash - in -drawer is less than the change due, or if you cannot return the exact change.

    ? return {
        * status: "CLOSED",
        * change: [...]
    }   with cash - in -drawer as the value for the key change if it is equal to the change due.
    ?
    return {
        * status: "OPEN",
        * change: [...]
    }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

 */

// * currency unit and its amount
// * Penny	$0.01 (PENNY)
// * Nickel $0 .05(NICKEL)
// * Dime $0 .1(DIME)
// * Quarter $0 .25(QUARTER)
// * Dollar $1(DOLLAR)
// * Five Dollars $5(FIVE)
// * Ten Dollars $10(TEN)
// * Twenty Dollars $20(TWENTY)
// * One - hundred Dollars $100(ONE HUNDRED)

const cashValue = [
    {name: "ONE HUNDRED", value: 100},
    {name: "TWENTY", value: 20},
    {name: "TEN", value: 10},
    {name: "FIVE", value: 5},
    {name: "ONE", value: 1},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.1},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
];


function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    console.log(change);
    let total = parseFloat(cid.reduce((accumulator, current) => {
        console.log(current[1]);
        console.log(accumulator.toFixed(2));
        return accumulator + current[1];
    }, 0.0)).toFixed(2);
    console.log("Total: ", total);
    let changeStatus = {
        status: "",
        change: [],
    };

    if (total < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (total == change) {
        console.log(change);
        console.log(total);
        return {status: "CLOSED", change: cid};
    } else {
        cid.reverse();
        console.log(cid);
        cashValue.forEach((element,index) => {
            if (change >= element.value) {
                console.log(element);
                let currentValue = 0.0;
                while (change >= element.value && cid[index][1] >= element.value) {
                    console.log(currentValue);
                    currentValue += element.value;
                    console.log(change);
                    change -= element.value;
                    change = Math.round(change * 100) / 100;
                    cid[index][1] -= element.value;
                }
                changeStatus.status = "OPEN";
                changeStatus.change.push([element.name, currentValue]);
            }
        });
    }
    if (change !== 0) {
        changeStatus.status = "INSUFFICIENT_FUNDS";
        changeStatus.change = [];
    }
    return changeStatus;
}

// console.log(checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));

// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]));

// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]));

// console.log(checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]));