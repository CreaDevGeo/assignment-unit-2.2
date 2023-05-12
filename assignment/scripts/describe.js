// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable named Dane without a value assigned.
// We then write a conditional statement.
// The first part is stating that if name equals Mary, then console.log string "Hi, Mary!"
// The second part is stating that if name is anything besides Mary, then console.log string "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
/* Two varibales are being created. The first one is named secret and has no value assigned. 
   The second one is named code with a value attributed with numbers 123.
   Conditional statement is then being created. 
   First condition states if variable, code exactly equals 123, secret will have a value of string "super" and code variable's value is multiplied by 2.
   Second condition states if varaible code is greater than 250, secret will have a value of string "duper".
   We then console.log variable, secret. 
*/

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
/* Four varibales are being created. 
   The first one is named isStudent and has boolean, true assigend. 
   The second one is named age with a value attributed of numbers 34.
   The Third one is named zip with a value attributed of numbers 55407.
   Conditional statement is then being created. 
   First condition states if variable, isStudent exactly equals true and zip variable is greater than 80000, console.log string "You're a student on the West Coast!".
   Second condition states otherwise that if varaible, isStudent exactly equals false or age variable is less than 30, console.log string "What are your hobbies?".
   Third condition states otherwise that if varaible, isStudent exactly equals true, console.log string "Welcome to Prime!".
   Final condition states otherwise if none of those then console.log string "How about the weather?".
   We then console.log variable, secret. 
*/

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable, called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne variable set to red and colorTwo set to blue, but instructions say they are set vise versa positions. 
// Variable colorOne should be set to blue and colorTwo to red.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Compound conditional of or || is being used rather than and&& as stated in instructions.
// Change from || to &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Conditional of less than or equal to <= is being used rather than great than or equal to >= as per instructed.  
// Change conditional from <= to >=.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

