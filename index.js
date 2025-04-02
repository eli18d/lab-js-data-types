/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string

console.log(tongueTwister);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
let result = part1 + part2;
console.log(result);

const lastCharUppercasedT = result[result.length - 1].toUpperCase();
console.log(lastCharUppercasedT);

const lastCharUppercasedA = result[3].toUpperCase();
console.log(lastCharUppercasedA);

result = result.slice(0, 3) + lastCharUppercasedA + result.slice(5, 9) + lastCharUppercasedT;

// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tipAmount = billTotal * 15 /100; 

// Calculate the tip (15% of the bill total)



// Print out the tipAmount

console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

function getRandom (min, max) {
    
     random = Math.random() * (max - min) + min;
     roundedRandom= Math.round(random)
  return  roundedRandom;
  
  }

  const randomNumber = getRandom(1, 10);

  console.log(randomNumber);




// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

const expression7 = a && a; // true

console.log(expression1, expression2, expression3, expression4, expression5, expression6, expression7);