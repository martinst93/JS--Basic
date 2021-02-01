//1. Calculate the reminder of two numbers.
let num1 = 23;
let num2 = 10;
let sum = num1 % num2 ;

console.log('The reminder of '+ num1 + ' and ' + num2 + ' is ' + sum);

// 2. The farm problem:
//   - Given 3 types of animals: Chickens, Cows and Pigs
//   - Chickens has two legs, cows and piges 4 each.
// Given exact number of chickens, cows and pigs calculate the total number of legs of all chickens, cows and pigs sepratately and then calculate total legs on all animals.

let chickens = 3 ;
let cows = 2;
let pigs = 4;

let chickenLegs = 2;
let cowLegs = 4;
let pigLegs = 4;

let totalNumChickenL = chickens * chickenLegs;
let totalNumCowL = cows * cowLegs;
let totalNumPigL = pigs * pigLegs;
let totalNumL = totalNumChickenL + totalNumCowL + totalNumPigL;

console.log('The total number of chicken legs is ' + totalNumChickenL);
console.log('The total number of cow legs is ' + totalNumCowL);
console.log('The total number of pig legs is ' + totalNumPigL);
console.log('The total number for legs on all animals is ' + totalNumL);


// 3. Given two sides of rectangle a and b calculate the perimeter of the rectangle. (Not area but perimeter).

let numSidA = 2;
let numSidB = 2;
let a = 3 ;
let b = 6 ;

let perimeter = numSidA * a + numSidB * b ;

console.log('The perameter of the rectagle is ' +perimeter);

// 4. Calculate the height of equilateral triangle. (Ramnostran triagolnik)

let ab = 12;
let bc = 12 ;

let ad = ab * ab -  (bc/2 * bc/2) ;
let sum3 = parseInt(ad);
let sumt = Math.sqrt(sum3);

console.log('The height of the triagle is ' +sumt);





