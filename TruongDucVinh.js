let minValue = 30;
let maxValue = 300;
let randomNumber = Math.floor(Math.random()*(maxValue-minValue)+minValue);

console.log("Random number: ", randomNumber);

let check1 = randomNumber % 7 === 0
let check2 = randomNumber % 13 === 0

if (check1 && check2) {
    console.log('a-z')
} else if (check1) { 
    console.log('abc')
} else if (check2) {
    console.log('xyz')
}