"use strict"


let numbers = [1, 2, 3, 4];
let newNumbers;

console.log("////////////-1-//////////////");

let oddNumbers = numbers.filter(x => x % 2 !== 0);
console.log("the odd numbers : "+oddNumbers);



newNumbers = oddNumbers.map(x => x * 2);
console.log("odd numbers doubled : "+newNumbers);




let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);


console.log("////////////-2-//////////////");

var totalDuration = 0;
tasks.forEach(task => task = totalDuration = totalDuration+ task.duration);
console.log("total time is : " + totalDuration +" minutes");


console.log("////////////-3-//////////////");

var totalHours = tasks.map(task => task.duration/60);

console.log(totalHours);




console.log("////////////-4-//////////////");

var newTimes = totalHours.filter(x => x >= 2);
console.log(newTimes);


console.log("////////////-5-//////////////");
var Maartje = newTimes.map(hour => hour * 15);
console.log(Maartje);
var sumUp = 0;
Maartje.map((a) => a = sumUp = sumUp + a);
console.log(sumUp +" €");



