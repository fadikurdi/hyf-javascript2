"use strict"
//------Q1-----//
function foo(callback) {
    console.log('hi i am foo!');
    callback();
}

function bar() {
    console.log('Hello, I am bar!');

}
foo(bar);

//------Q2-----//
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000);

//-------------//
var arr = [];
function sayThree(a) {
    if (a % 3 === 0) {
        console.log("this number " + a + " is divisible by 3 ");
        arr.push(a);
    } else {
        console.log("this number( " + a + " )is not divisible by 3 ");
        arr.push(a);
    }

}
function sayFive(a) {
    if (a % 5 === 0) {
        console.log("this number " + a + " is divisible by 5 ");
        arr.push(a);
    } else {
        console.log("this number( " + a + " )is not divisible by 5 ");
        arr.push(a);
    }

}

function threeFive(startIndex, stopIndex) {

    for (let index = startIndex; index < stopIndex; index++) {
        if (index % 3 === 0) {
            sayThree(index);
        } else if (index % 5 === 0) {
            sayFive(index);
        } else {
            sayFive(index);
            sayThree(index);
        }
    }
}
threeFive(5, 25, sayThree, sayFive);

//-----Q3.1-----//

function repeatStringNumTimes(str, num) {
    if (num >= 0) { return str.repeat(num); }
}

console.log(repeatStringNumTimes("abc", 3));

//-----Q3.2-----//


function repeatStringNumTimes(str, num) {
    var result = "";
    for (let i = 0; i <= num; i++) {

        result += str;
    }
    return result;
}
console.log("using a for loop " + repeatStringNumTimes("abc", 3));


//----Q3.3----//
function repeatStringNumTimes(str, num) {
    var result = "";
    while (num > 0) {
        result += str;
        num--;
    }
    return result;
}
console.log("using a while loop " + repeatStringNumTimes("Fadi", 3));

//----Q3.4----//
function repeatStringNumTimes(str, num) {
    var result = "";
    do {

        result += str;
        num--;
    } while (num > 0);
    return result;
}

console.log("using a do loop " + repeatStringNumTimes("Ella", 3));

//----Q4---//
var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

// Only change code below this line.

var MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
};

//----Q5---//
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
//----Q6.Q1----//

let arr2d = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
        console.log("i will do it with two for loops :" + arr2d[i][j]);

    }

}
//----Q6.Q2----//
// function arrDimensions(params) {   // commented for later solution 
//     if (params=) {

//     }
// }

//-----Q7----//
let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log("the x variable is outside the function so the value of it will stay the same for later use (" + x + " )");


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log("we access the y object as a key x that is why we can modify it and change the value (", y, " )");
