// * No. 49 
// * Understanding boolean values
function welcomeToBooleans() {
    return true;
}

// * No. 50
// * Conditional logic with If statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return "Yes, that was true";
    } 
    return "No, that was false";
}
trueOrFalse(true);

// * No. 51
// * Comparison with equality operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    } 
    return "Not Equal";
}

console.log(testEqual(12));

// * No 52
// * Comparison with strict equality operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(7);

// * No. 53
// * Comparing different values
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

// * No. 54
// * Comparison with the inequality operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

// * No. 55
// * Strict inequality
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

// * No. 56
// * Comparison with the greater than operator 
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

// * No. 57 
// * Comparison with the the greater than or equal to operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(19));

// * No. 58
// * Comparison with the less than operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10));

// * No. 59
// * Comparison with the less than or equal to operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    } 
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessThan(10));

// * No. 60
// * Comparison with the logical And operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(25));

// * No. 61
// * Comparison with the logical Or operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

// * No. 62
// * Else statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(10));

// * No. 63
// * Else If statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5"; 
    }
    else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

// * No. 64
// * Logical order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(4));

// * No. 65
// * Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
testSize(20);

// * No. 66
// * Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par-2) {
        return names[1];
    } else if (strokes === par-1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
golfScore(5,4);

// * No. 67 
// * Selecting from many options with Switch statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));

// * No. 67
// * Default option switch statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c": 
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff(1));

// * No. 68
// * Multiple identical options in Switch statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5: 
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8: 
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1));

// * No. 69
// * Switch chains
function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob": 
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1: 
            answer = "There is no #1";
            break;
        case 99: 
            answer = "Missed me by this much!";
            break;
        case 7: 
            answer = "Ate Nine";
            break;
        default:
            answer = "";
            break;
    }
}
console.log("bob");

// * No. 70
// * Returning boolean values from functions
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15)); // ? true

// * No. 71
// * Return early pattern for functions
function abTest(a,b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b)));
}
console.log(abTest(10, 20));

// * No. 72
// * Counting cards
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4: 
        case 5: 
        case 6:
            count += 1;
            break;
        case 7:
        case 8: 
        case 9: 
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    return count <= 0 ? (count + " Hold") : (count + " Bet");   
}
cc(10);cc('J');cc('Q');cc('K');
console.log(cc('A')); // ? -5 Hold
